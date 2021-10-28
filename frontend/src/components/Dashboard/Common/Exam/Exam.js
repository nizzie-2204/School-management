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
import VisibilityIcon from '@material-ui/icons/Visibility'
import { unwrapResult } from '@reduxjs/toolkit'
import emptyDataPNG from 'assets/images/document.png'
import Alert from 'components/Alert/Alert'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import checkTimeV2 from 'utils/checkTime.v2'
import downloadExcel from 'utils/downloadExcel'
import formatDate from 'utils/formatDate'
import AddEditAccount from './components/AddEditAccount/AddEditAccount'
import DeleteAlert from './components/DeleteAlert/DeleteAlert'
import { getExams } from './examSlice'
import useStyles from './styles'

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

// Tài khoản: t2100001 mật khẩu: rqa@W65M ====== gvtest1 chu nhiem lop 1a2
// Tài khoản: t2100002 mật khẩu: %By6JW+b ======= gvtest2 am nhac

// Tài khoản: s2100001 mật khẩu: kr_xp*3L ==== hs khoi 1
// Tài khoản: s2100002 mật khẩu: ^bcB4_%m ==== hs khoi 2

const Exam = () => {
	const classes = useStyles()

	const dispatch = useDispatch()
	const history = useHistory()
	const user = useSelector((state) => state.auth.user)
	const exams = useSelector((state) => state.exam.exams)
	const examsLoading = useSelector((state) => state.exam.examsLoading)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const filteredExams = exams.filter((exam) => {
		return exam?.grade === user?.classId?.grade
	})

	const [isSubmitted, setIsSubmitted] = useState(false)
	// exams?.examResult?.forEach((result) => {
	// 	if (result?.studentId?._id === user._id) {
	// 		setIsSubmitted(true)
	// 	}
	// })

	const [thisExam, setThisExam] = useState(null)
	const [open, setOpen] = useState(false)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	const [open2, setOpen2] = useState(false)
	const handleOpen2 = (exam) => {
		setThisExam(exam)
		setOpen2(true)
	}
	const handleClose2 = () => {
		setThisExam(null)
		setOpen2(false)
	}

	const [open3, setOpen3] = useState(false)
	const handleOpen3 = (exam) => {
		setThisExam(exam)
		setOpen3(true)
	}
	const handleClose3 = () => {
		setThisExam(null)
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
		const fetchExams = () => {
			const action = getExams()
			dispatch(action)
				// .unwrap()
				.then(unwrapResult)
				.catch((error) => console.log(error))
		}
		fetchExams()
	}, [dispatch])

	const handleTakingExam = (exam) => {
		// if (user.role !== 'student') return
		history.push({
			pathname: `/dashboard/taking-exam/${exam._id}`,
			state: { exam },
		})
	}

	const handleViewDetailExam = (exam) => {
		// if (user.role !== 'teacher') return
		history.push({
			pathname: `/dashboard/exam/${exam._id}`,
			state: { exam },
		})
	}

	const handleDownloadExcel = () => {
		if (!exams || exams.length === 0) {
			Alert.fire({
				icon: 'error',
				title: 'Không có dữ liệu',
			})
		} else {
			downloadExcel(exams, 'Danh Sách Bài Thi', 'DanhSachBaiThi')
		}
	}

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
							className={classes.searchButton}
							startIcon={<SearchIcon />}
						>
							Tìm kiếm
						</Button>
					</div>
				</form>

				<div className={classes.titleTable}>
					{user?.role === 'admin' && (
						<>
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
										<FontAwesomeIcon
											icon={faFileExcel}
											style={{ fontSize: 13, marginRight: 5 }}
										/>
									}
									style={{
										backgroundColor: '#198750',
										marginRight: 20,
									}}
									onClick={handleDownloadExcel}
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
						</>
					)}
				</div>
				{examsLoading ? (
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
											Khối
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
									{((filteredExams.length > 0 && filteredExams) || exams).map(
										(exam) => {
											return (
												<TableRow>
													<TableCell
														align="center"
														component="th"
														scope="row"
														className={classes.limitText}
													>
														{exam?._id}
													</TableCell>
													<TableCell align="center">
														<p>{exam?.name}</p>
														<p>Môn: {exam?.subjectId?.name}</p>
													</TableCell>
													<TableCell align="center">
														<p>{exam?.grade}</p>
													</TableCell>
													<TableCell align="center">
														{formatDate(new Date(exam.startAt))}
													</TableCell>
													<TableCell align="center">
														{exam?.duration} phút
													</TableCell>
													<TableCell
														align="center"
														style={{
															color: `${
																checkTimeV2(exam.startAt, exam.duration) ===
																'Đang diễn ra'
																	? '#4caf50'
																	: [
																			checkTimeV2(
																				exam.startAt,
																				exam.duration
																			) === 'Đã kết thúc'
																				? '#f44336'
																				: '#52575e',
																	  ]
															}  `,
														}}
													>
														{checkTimeV2(exam.startAt, exam.duration)}
													</TableCell>

													<TableCell align="center">
														{user?.role === 'admin' && (
															<Tooltip title="Chỉnh sửa">
																<IconButton
																	onClick={() => {
																		handleOpen3(exam)
																	}}
																>
																	<CreateIcon
																		fontSize="small"
																		style={{ color: '#5278db' }}
																	/>
																</IconButton>
															</Tooltip>
														)}
														{user?.role === 'teacher' && (
															<Tooltip title="Chi tiết">
																<IconButton
																	onClick={() => {
																		handleViewDetailExam(exam)
																	}}
																>
																	<VisibilityIcon
																		fontSize="small"
																		style={{ color: '#ffa000' }}
																	/>
																</IconButton>
															</Tooltip>
														)}
														{user?.role === 'admin' && (
															<Tooltip title="Xóa">
																<IconButton
																	onClick={() => {
																		handleOpen2(exam)
																	}}
																>
																	<DeleteIcon
																		fontSize="small"
																		style={{ color: '#e96053' }}
																	/>
																</IconButton>
															</Tooltip>
														)}
														{user?.role === 'student' &&
															checkTimeV2(exam.startAt, exam.duration) ===
																'Đang diễn ra' && (
																<Button
																	variant="contained"
																	className={classes.takingExam}
																	onClick={() => {
																		handleTakingExam(exam)
																	}}
																>
																	Làm bài
																</Button>
															)}
													</TableCell>
												</TableRow>
											)
										}
									)}
									<DeleteAlert
										open={open2}
										handleClose={handleClose2}
										thisExam={thisExam}
									/>
									<AddEditAccount
										open={open3}
										handleClose={handleClose3}
										thisExam={thisExam}
									/>
								</TableBody>
							</Table>
						</TableContainer>
						{exams?.length > 0 ? (
							<TablePagination
								rowsPerPageOptions={[10]}
								component="div"
								// Pagination on search
								count={
									exams?.filter((teacher) => {
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
