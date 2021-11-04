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
	TablePagination,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { getExam } from '../../examSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getStudents } from 'components/Dashboard/Common/StudentAccount/studentAccountSlice'
import formatDate from 'utils/formatDate'
import emptyDataPNG from 'assets/images/document.png'

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

	const [searchTerm, setSearchTerm] = useState('')
	const handleChangeSearch = (e) => {
		setSearchTerm(e.target.value)
	}

	// Pagination
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(10)

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value)
		setPage(0)
	}

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
					onChange={handleChangeSearch}
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
						{studentsInGrade
							?.filter((student) => {
								if (searchTerm === '') {
									return student
								} else if (
									student.name
										.toLowerCase()
										.includes(searchTerm.toLowerCase()) ||
									student.username
										.toLowerCase()
										.includes(searchTerm.toLowerCase())
								) {
									return student
								} else if (
									student.classId.name
										.toLowerCase()
										.includes(searchTerm.toLowerCase())
								) {
									return student
								}
								return false
							})
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((student) => {
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
			{studentsInGrade.length > 0 ? (
				<TablePagination
					rowsPerPageOptions={[10]}
					component="div"
					// Pagination on search
					count={
						studentsInGrade?.filter((student) => {
							if (searchTerm === '') {
								return student
							} else if (
								student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
								student.username
									.toLowerCase()
									.includes(searchTerm.toLowerCase())
							) {
								return student
							} else if (
								student.classId.name
									.toLowerCase()
									.includes(searchTerm.toLowerCase())
							) {
								return student
							}
							return false
						}).length
					}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			) : (
				<div className={classes.emptyData}>
					<img src={emptyDataPNG} alt="empty" />
					<p>Không có dữ liệu</p>
				</div>
			)}
		</Box>
	)
}

export default ListStudent
