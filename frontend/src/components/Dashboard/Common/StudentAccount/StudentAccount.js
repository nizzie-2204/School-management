import {
	Box,
	Button,
	IconButton,
	TextField,
	Tooltip,
	Typography,
	TablePagination,
	CircularProgress,
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import AddIcon from '@material-ui/icons/Add'
import CheckIcon from '@material-ui/icons/Check'
import ClearIcon from '@material-ui/icons/Clear'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'
import SearchIcon from '@material-ui/icons/Search'
import { unwrapResult } from '@reduxjs/toolkit'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import formatDate from 'utils/formatDate'
import AddEditAccount from './components/AddEditAccount/AddEditAccount'
import DeleteAlert from './components/DeleteAlert/DeleteAlert'
import { getStudents } from './studentAccountSlice'
import useStyles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import emptyDataPNG from 'assets/images/document.png'

const links = [
	{
		title: 'Dashboard',
		path: '/dashboard/overview',
	},
	{
		title: 'Quản lý tài khoản',
		path: '/dashboard/student',
	},
	{
		title: 'Học sinh',
		path: '/dashboard/student',
	},
]

const StudentAccount = () => {
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
				<title>Học sinh - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>

			<Box className={classes.main}>
				<Breadcrumb links={links} />

				<form noValidate autoComplete="off">
					<div className={classes.searchBar}>
						<TextField
							className={classes.searchField}
							id="outlined-textarea"
							placeholder="Họ và tên"
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
					</div>
				</form>

				<div className={classes.titleTable}>
					<Typography
						className={classes.title}
						variant="h6"
						id="subtitle"
						component="div"
					>
						Danh sách tài khoản học sinh
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
											Họ và tên
										</TableCell>

										<TableCell align="center" className={classes.tableHead}>
											Đăng nhập
										</TableCell>

										<TableCell align="center" className={classes.tableHead}>
											Tài khoản
										</TableCell>
										<TableCell align="center" className={classes.tableHead}>
											Ngày tạo
										</TableCell>
										<TableCell align="center" className={classes.tableHead}>
											Ngày cập nhật
										</TableCell>

										<TableCell align="center" className={classes.tableHead}>
											Hành động
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{students?.map((student, index) => (
										<TableRow key={index}>
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
												{student.isLoggedIn ? (
													<CheckIcon
														fontSize="small"
														className={classes.isLoggedIn}
													/>
												) : (
													<ClearIcon
														fontSize="small"
														className={classes.isLoggedOut}
													/>
												)}
											</TableCell>
											<TableCell align="center">{student.username}</TableCell>
											<TableCell align="center">
												{formatDate(student.createdAt)}
											</TableCell>
											<TableCell align="center">
												{formatDate(student.updatedAt)}
											</TableCell>
											<TableCell align="center">
												<Tooltip title="Chỉnh sửa">
													<IconButton
														onClick={() => {
															handleOpen3(student)
														}}
													>
														<CreateIcon
															fontSize="small"
															style={{ color: '#5278db' }}
														/>
													</IconButton>
												</Tooltip>
												<Tooltip title="Xóa">
													<IconButton
														onClick={() => {
															handleOpen2(student)
														}}
													>
														<DeleteIcon
															fontSize="small"
															style={{ color: '#e96053' }}
														/>
													</IconButton>
												</Tooltip>
											</TableCell>
										</TableRow>
									))}
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

export default StudentAccount
