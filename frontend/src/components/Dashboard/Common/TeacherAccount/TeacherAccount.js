import {
	Box,
	Button,
	IconButton,
	TablePagination,
	TextField,
	Typography,
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Tooltip from '@material-ui/core/Tooltip'
import AddIcon from '@material-ui/icons/Add'
import BuildIcon from '@material-ui/icons/Build'
import CheckIcon from '@material-ui/icons/Check'
import ClearIcon from '@material-ui/icons/Clear'
import DeleteIcon from '@material-ui/icons/Delete'
import SearchIcon from '@material-ui/icons/Search'
import VisibilityIcon from '@material-ui/icons/Visibility'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import AddEditAccount from './AddEditAccount/AddEditAccount'
import { getTeachers } from './teacherAccountSlice'
import useStyles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import formatDate from 'utils/formatDate'
import DeleteAlert from './DeleteAlert/DeleteAlert'
import CircularProgress from '@material-ui/core/CircularProgress'

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
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const dispatch = useDispatch()
	const teachers = useSelector((state) => state.teacher.teachers)
	const teachersLoading = useSelector((state) => state.teacher.teachersLoading)

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

		fetchTeachers()
	}, [])

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
						Danh sách tài khoản giáo viên
					</Typography>
					<Button
						variant="contained"
						className={classes.button}
						startIcon={<AddIcon />}
						onClick={handleOpen}
					>
						Thêm tài khoản
					</Button>
					<AddEditAccount open={open} handleClose={handleClose} />
				</div>

				{teachersLoading ? (
					<div className={classes.loading}>
						<CircularProgress
							style={{
								color: '#3254ac',
							}}
						/>
					</div>
				) : (
					<>
						<TableContainer component={Paper}>
							<Table className={classes.table} aria-label="simple table">
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
										})
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
												<TableCell align="center">{teacher.username}</TableCell>
												<TableCell align="center">
													{formatDate(teacher.createdAt)}
												</TableCell>
												<TableCell align="center">
													{formatDate(teacher.updatedAt)}
												</TableCell>
												<TableCell align="center">
													<Tooltip title="Chi tiết">
														<IconButton>
															<VisibilityIcon
																fontSize="small"
																style={{ color: '#1a61c6' }}
															/>
														</IconButton>
													</Tooltip>
													<Tooltip title="Chỉnh sửa">
														<IconButton
															onClick={() => {
																handleOpen2(teacher)
															}}
														>
															<BuildIcon
																fontSize="small"
																style={{ color: '#ffa326' }}
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
								}).length
							}
							rowsPerPage={rowsPerPage}
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</>
				)}
			</Box>
		</>
	)
}

export default TeacherAccount
