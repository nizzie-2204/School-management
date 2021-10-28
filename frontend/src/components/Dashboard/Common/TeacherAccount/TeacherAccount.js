import {
	Box,
	Button,
	IconButton,
	TablePagination,
	TextField,
	Typography,
} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Tooltip from '@material-ui/core/Tooltip'
import AddIcon from '@material-ui/icons/Add'
import CheckIcon from '@material-ui/icons/Check'
import ClearIcon from '@material-ui/icons/Clear'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'
import SearchIcon from '@material-ui/icons/Search'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import formatDate from 'utils/formatDate'
import AddEditAccount from './AddEditAccount/AddEditAccount'
import DeleteAlert from './DeleteAlert/DeleteAlert'
import useStyles from './styles'
import { getTeachers } from './teacherAccountSlice'
import emptyDataPNG from 'assets/images/document.png'
import {
	getTypeTeacher,
	getTypeTeachers,
} from '../TypeTeacher/typeTeacherSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'

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
		title: 'Giáo viên',
		path: '/dashboard/teacher',
	},
]

const TeacherAccount = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const teachers = useSelector((state) => state.teacher.teachers)
	const teachersLoading = useSelector((state) => state.teacher.teachersLoading)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const [open, setOpen] = useState(false)
	const handleOpen = (subject) => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	const [thisTeacher, setThisTeacher] = useState(null)
	const [open2, setOpen2] = useState(false)
	const handleOpen2 = (teacher) => {
		setThisTeacher(teacher)
		setOpen2(true)
	}
	const handleClose2 = () => {
		setThisTeacher(null)
		setOpen2(false)
	}

	const [open3, setOpen3] = useState(false)
	const handleOpen3 = (teacher) => {
		setThisTeacher(teacher)
		setOpen3(true)
	}
	const handleClose3 = () => {
		setThisTeacher(null)
		setOpen3(false)
	}

	useEffect(() => {
		const fetchTeachers = () => {
			const action = getTeachers()
			dispatch(action)
		}

		const fetchTeacherTypes = () => {
			const action = getTypeTeachers()
			dispatch(action)
		}

		fetchTeachers()
		fetchTeacherTypes()
	}, [dispatch])

	// Search
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
		const fetchTeachers = () => {
			const action = getTeachers()
			dispatch(action)
		}
		fetchTeachers()
	}, [dispatch])

	return (
		<>
			<Helmet>
				<title>Giáo viên - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>

			<Box className={classes.main}>
				<Breadcrumb links={links} />

				<form autoComplete="off">
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
							className={classes.searchButton}
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
						Danh sách tài khoản giáo viên
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
							Thêm mới
						</Button>
					</Box>

					<AddEditAccount open={open} handleClose={handleClose} />
				</div>

				{teachersLoading ? (
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
								{teachersLoading ? (
									<div className={classes.loading}>
										<CircularProgress
											style={{
												color: '#3254ac',
											}}
										/>
										<p>Đang tải dữ liệu...</p>
									</div>
								) : (
									<TableBody>
										{teachers
											?.filter((teacher) => {
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
											})
											.slice(
												page * rowsPerPage,
												page * rowsPerPage + rowsPerPage
											)
											.map((teacher, index) => (
												<TableRow key={index}>
													<TableCell
														align="center"
														component="th"
														scope="row"
														className={classes.limitText}
													>
														{teacher._id}
													</TableCell>
													<TableCell align="center">{teacher.name}</TableCell>

													<TableCell align="center">
														{teacher.isLoggedIn ? (
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
													<TableCell align="center">
														{teacher.username}
													</TableCell>
													<TableCell align="center">
														{formatDate(teacher.createdAt)}
													</TableCell>
													<TableCell align="center">
														{formatDate(teacher.updatedAt)}
													</TableCell>
													<TableCell align="center">
														<Tooltip title="Chỉnh sửa">
															<IconButton
																onClick={() => {
																	handleOpen2(teacher)
																}}
															>
																<CreateIcon
																	fontSize="small"
																	style={{ color: '#5278db' }}
																/>
															</IconButton>
														</Tooltip>
														<Tooltip
															title="Xóa"
															onClick={() => {
																handleOpen3(teacher)
															}}
														>
															<IconButton>
																<DeleteIcon
																	fontSize="small"
																	style={{ color: '#e96053' }}
																/>
															</IconButton>
														</Tooltip>
													</TableCell>
												</TableRow>
											))}
									</TableBody>
								)}
								<AddEditAccount
									open={open2}
									handleClose={handleClose2}
									thisTeacher={thisTeacher}
								/>
								<DeleteAlert
									open={open3}
									handleClose={handleClose3}
									thisTeacher={thisTeacher}
								/>
							</Table>
						</TableContainer>
						{teachers.length > 0 ? (
							<TablePagination
								rowsPerPageOptions={[10]}
								component="div"
								// Pagination on search
								count={
									teachers?.filter((teacher) => {
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

export default TeacherAccount
