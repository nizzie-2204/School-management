import {
	Box,
	FormControl,
	InputLabel,
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
import addDays from 'date-fns/addDays'
import startOfWeek from 'date-fns/startOfWeek'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
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

// React select
const options = [
	{ value: 'a', label: '1A' },
	{ value: 'b', label: '2C' },
	{ value: 'c', label: '3A' },
	{ value: 'd', label: '3C' },
	{ value: 'e', label: '4A' },
	{ value: 'f', label: '5B' },
]

const Timetable = () => {
	const classes = useStyles()

	// React select
	const [selectedOption, setselectedOption] = useState()

	const handleChange = (selectedOption) => {
		setselectedOption(selectedOption)
	}

	const [subject, setSubject] = useState('')
	const handleChangeSubject = (event) => {
		setSubject(event.target.value)
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
					<Box className={classes.top}>
						<Typography variant="body1" className={classes.title}>
							Thời khóa biểu
						</Typography>
						<FormControl variant="outlined" className={classes.selectClass}>
							<InputLabel
								id="demo-simple-select-outlined-label"
								style={{ color: '#000' }}
							>
								Lớp
							</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								value={subject}
								onChange={handleChangeSubject}
								label="Lớp"
							>
								<MenuItem value="1A">1A</MenuItem>
							</Select>
						</FormControl>
					</Box>

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
													{day.toLocaleDateString('en-US', { timeZone: 'UTC' })}
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
