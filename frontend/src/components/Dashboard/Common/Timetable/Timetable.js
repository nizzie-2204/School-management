import {
	Box,
	FormControl,
	MenuItem,
	Paper,
	Select,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@material-ui/core'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import {
	emptyTeacher,
	getTeacher,
} from 'components/Dashboard/Common/TeacherAccount/teacherAccountSlice'
import addDays from 'date-fns/addDays'
import startOfWeek from 'date-fns/startOfWeek'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { getClass } from '../Class/classSlice'
import TableCellSubject from './components/TableCellSubject/TableCellSubject'
import useStyles from './styles'
const links = [
	{
		title: 'Dashboard',
		path: '/dashboard/overview',
	},
	{
		title: 'Thời khóa biểu',
		path: '/dashboard/timetable',
	},
]

// Get days in week
const days = []
for (let i = 1; i < 6; i++) {
	const day = addDays(
		startOfWeek(new Date(), {
			weekStartsOn: 1,
		}),
		i
	)
	days.push(day)
}

const Timetable = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const classesFromStore = useSelector((state) => state.classes.classes)
	const user = useSelector((state) => state.auth.user)
	const [selectedClass, setSelectedClass] = useState('')
	const handleChangeClass = (e) => {
		setSelectedClass(e.target.value)
		const action = getClass(e.target.value)
		dispatch(action)
			.unwrap()
			.then((res) => {
				if (res?.data?.teacherId) {
					const action = getTeacher(res?.data?.teacherId._id)
					dispatch(action)
						.unwrap()

						.catch((error) => console.log(error))
				} else {
					const action = emptyTeacher()
					dispatch(action)
				}
			})
	}

	return (
		<>
			<Helmet>
				<title>Thời khóa biểu - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Box className={classes.main}>
				<Breadcrumb links={links} />

				<Box className={classes.content}>
					{user.role === 'admin' && (
						<Box className={classes.top}>
							<Typography variant="body1" className={classes.title}>
								Lớp
							</Typography>
							<FormControl variant="outlined" className={classes.selectClass}>
								<Select
									labelId="demo-simple-select-outlined-label"
									id="demo-simple-select-outlined"
									value={selectedClass}
									onChange={handleChangeClass}
								>
									{classesFromStore?.map((thisClass) => {
										return (
											<MenuItem key={thisClass._id} value={thisClass._id}>
												{thisClass.name}
											</MenuItem>
										)
									})}
								</Select>
							</FormControl>
						</Box>
					)}

					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label="simple table">
							<TableHead className={classes.tableHead}>
								<TableRow>
									<TableCell align="center" className={classes.tableHeadTitle}>
										Buổi
									</TableCell>

									<TableCell align="center" className={classes.tableHeadTitle}>
										Thời gian
									</TableCell>

									{days.map((day, index) => {
										return (
											<TableCell
												align="center"
												className={classes.tableHeadTitle}
												key={index}
											>
												<div>{`Thứ ${index + 2}`}</div>
												<div className={classes.titleSmall}>
													{day.toLocaleDateString('vi-VN', { timeZone: 'UTC' })}
												</div>
											</TableCell>
										)
									})}
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow className={classes.tableHead}>
									<TableCell
										align="center"
										scope="row"
										rowSpan={6}
										className={classes.session}
									>
										Sáng
									</TableCell>
								</TableRow>

								<TableCellSubject />
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Box>
		</>
	)
}

export default Timetable
