import {
	Box,
	Button,
	Table,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
	Paper,
	TableBody,
	Tooltip,
} from '@material-ui/core'
import React, { useEffect } from 'react'
import useStyles from './styles'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { getExam } from '../../examSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getStudents } from 'components/Dashboard/Common/StudentAccount/studentAccountSlice'
import formatDate from 'utils/formatDate'
const ListStudent = (props) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const exam = useSelector((state) => state.exam.exam)
	const students = useSelector((state) => state.student.students)

	const studentsInGrade = students.filter(
		(student) => student.classId.grade === exam.grade
	)

	const studentInExam = exam?.examResult?.map((result) => result.studentId._id)

	useEffect(() => {
		window.scrollTo(0, 0)
		console.log(exam)
		console.log(students)
	}, [])

	useEffect(() => {
		const fetchData = () => {
			const action = getExam(props.exam._id)
			dispatch(action)

			const action2 = getStudents()
			dispatch(action2)
		}
		fetchData()
	}, [])

	return (
		<Box className={classes.container}>
			<Box className={classes.header}>
				<Typography variant="h5" className={classes.title}>
					Danh sách học sinh
				</Typography>
				<span className={classes.subTitle}>
					{studentsInGrade.length} kết quả
				</span>
			</Box>
			<form className={classes.form}>
				<TextField
					className={classes.searchField}
					id="outlined-textarea"
					placeholder="Họ tên học sinh hoặc tên lớp"
					variant="outlined"
					inputProps={{
						style: { padding: '12.5px 14px' },
					}}
					// onChange={handleChangeSearch}
				/>
				<Button
					variant="contained"
					className={classes.button}
					startIcon={<SearchIcon />}
				>
					Tìm kiếm
				</Button>
			</form>
			<TableContainer component={Paper} className={classes.tableContainer}>
				<Table className={classes.table} stickyHeader aria-label="sticky table">
					<TableHead className={classes.tableHeadContainer}>
						<TableRow>
							<TableCell align="center" className={classes.tableHead}>
								ID
							</TableCell>
							<TableCell align="center" className={classes.tableHead}>
								Họ và tên
							</TableCell>

							<TableCell align="center" className={classes.tableHead}>
								Ngày sinh
							</TableCell>

							<TableCell align="center" className={classes.tableHead}>
								Lớp
							</TableCell>
							<TableCell align="center" className={classes.tableHead}>
								Đã làm
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{studentsInGrade?.map((student) => {
							return (
								<TableRow>
									<TableCell
										align="center"
										component="th"
										scope="row"
										className={classes.limitText}
									>
										{student._id}
									</TableCell>
									<TableCell align="center">{student.name}</TableCell>

									<TableCell align="center">
										{formatDate(student.dateOfBirth).slice(5)}
									</TableCell>
									<TableCell align="center">{student.classId.name}</TableCell>
									<TableCell align="center">
										{studentInExam.includes(student._id) && (
											<CloseIcon style={{ fontSize: 14 }} />
										)}
									</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}

export default ListStudent
