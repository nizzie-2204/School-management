import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	Box,
	Button,
	CircularProgress,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	TextField,
	Tooltip,
	Typography,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'
import SearchIcon from '@material-ui/icons/Search'
import { unwrapResult } from '@reduxjs/toolkit'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { getStudents } from '../StudentAccount/studentAccountSlice'
import AddEditAccount from './components/AddEditAccount/AddEditAccount'
import DeleteAlert from './components/DeleteAlert/DeleteAlert'
import useStyles from './styles'
import emptyDataPNG from 'assets/images/document.png'

const links = [
	{
		title: 'Dashboard',
		path: '/dashboard/overview',
	},
	{
		title: 'Khảo thí',
		path: '/dashboard/exam',
	},
	{
		title: 'Tổ chức kỳ thi',
		path: '/dashboard/exam',
	},
]
const Exam = () => {
	const classes = useStyles()

	const dispatch = useDispatch()
	const students = useSelector((state) => state.student.students)
	const studentsLoading = useSelector((state) => state.student.studentsLoading)

	const [thisStudent, setThisStudent] = useState(null)
	const [open, setOpen] = useState(false)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	const [open2, setOpen2] = useState(false)
	const handleOpen2 = (student) => {
		setThisStudent(student)
		setOpen2(true)
	}
	const handleClose2 = () => {
		setThisStudent(null)

		setOpen2(false)
	}

	const [open3, setOpen3] = useState(false)
	const handleOpen3 = (student) => {
		setThisStudent(student)
		setOpen3(true)
	}
	const handleClose3 = () => {
		setThisStudent(null)
		setOpen3(false)
	}

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

	useEffect(() => {
		const fetchStudents = () => {
			const action = getStudents()
			dispatch(action)
				// .unwrap()
				.then(unwrapResult)
				.then((res) => console.log(res.data))
				.catch((error) => console.log(error))
		}
		fetchStudents()
	}, [dispatch])

	return (
		<>
			<Helmet>
				<title>Tổ chức kỳ thi - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>

			<Box className={classes.main}>
				<Breadcrumb links={links} />
				<form autoComplete="off">
					<div className={classes.searchBar}>
						<TextField
							className={classes.searchField}
							id="outlined-textarea"
							placeholder="Tên lớp"
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
					</div>
				</form>

				<div className={classes.titleTable}>
					<Typography
						className={classes.title}
						variant="h6"
						id="subtitle"
						component="div"
					>
						Tổ chức kỳ thi
					</Typography>
					<Box className={classes.actions}>
						<Button
							variant="contained"
							className={classes.button}
							startIcon={
								<FontAwesomeIcon icon={faFileExcel} style={{ fontSize: 13 }} />
							}
							style={{
								backgroundColor: '#198750',
								marginRight: 20,
							}}
						>
							Xuất excel
						</Button>
						<Button
							variant="contained"
							className={classes.button}
							startIcon={<AddIcon />}
							onClick={handleOpen}
						>
							Thêm tài khoản
						</Button>
					</Box>
					<AddEditAccount open={open} handleClose={handleClose} />
				</div>
				{studentsLoading ? (
					<div className={classes.loading}>
						<CircularProgress
							style={{
								color: '#3254ac',
							}}
						/>
						<p>Đang tải dữ liệu...</p>
					</div>
				) : (
					<>
						<TableContainer
							component={Paper}
							className={classes.tableContainer}
						>
							<Table
								className={classes.table}
								stickyHeader
								aria-label="sticky table"
							>
								<TableHead>
									<TableRow>
										<TableCell align="center" className={classes.tableHead}>
											ID
										</TableCell>
										<TableCell align="center" className={classes.tableHead}>
											Tên kỳ thi
										</TableCell>

										<TableCell align="center" className={classes.tableHead}>
											Thời gian bắt đầu
										</TableCell>
										<TableCell align="center" className={classes.tableHead}>
											Thời gian làm bài
										</TableCell>
										<TableCell align="center" className={classes.tableHead}>
											Trạng thái
										</TableCell>

										<TableCell align="center" className={classes.tableHead}>
											Hành động
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell
											align="center"
											component="th"
											scope="row"
											className={classes.limitText}
										>
											iasdasd
										</TableCell>
										<TableCell align="center">
											<p>Ôn tập học kỳ 1</p>
											<p>Môn: Toán</p>
										</TableCell>

										<TableCell align="center">15/05/2021 00:00</TableCell>
										<TableCell align="center">60 phút</TableCell>
										<TableCell align="center">Chưa diễn ra</TableCell>

										<TableCell align="center">
											{/* <Tooltip title="Chỉnh sửa">
												<IconButton>
													<CreateIcon
														fontSize="small"
														style={{ color: '#5278db' }}
													/>
												</IconButton>
											</Tooltip>
											<Tooltip title="Xóa">
												<IconButton>
													<DeleteIcon
														fontSize="small"
														style={{ color: '#e96053' }}
													/>
												</IconButton>
											</Tooltip> */}
											<Button
												variant="contained"
												className={classes.takingExam}
											>
												Làm bài
											</Button>
										</TableCell>
									</TableRow>

									<DeleteAlert
										open={open2}
										handleClose={handleClose2}
										student={thisStudent}
									/>
									<AddEditAccount
										open={open3}
										handleClose={handleClose3}
										student={thisStudent}
									/>
								</TableBody>
							</Table>
						</TableContainer>
						{students.length > 0 ? (
							<TablePagination
								rowsPerPageOptions={[10]}
								component="div"
								// Pagination on search
								count={
									students?.filter((teacher) => {
										if (searchTerm === '') {
											return teacher
										} else if (
											teacher.name
												.toLowerCase()
												.includes(searchTerm.toLowerCase()) ||
											teacher.username
												.toLowerCase()
												.includes(searchTerm.toLowerCase())
										) {
											return teacher
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
					</>
				)}
			</Box>
		</>
	)
}

export default Exam
