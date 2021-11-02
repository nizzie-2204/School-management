import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	Box,
	Button,
	CircularProgress,
	IconButton,
	MenuItem,
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
import { getExamResults } from './examResultSlice'
import { getSubjects } from 'components/Dashboard/Common/Subject/subjectSlice'
import ConfirmTakingExam from './components/ConfirmTakingExam/ConfirmTakingExam'

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
// Tài khoản: s2100003 mật khẩu: 6SIPYt60
// Tài khoản: s2100004 mật khẩu: 3nR34&-0
// Tài khoản: s2100002 mật khẩu: ^bcB4_%m ==== hs khoi 2

const Exam = () => {
	const classes = useStyles()

	const dispatch = useDispatch()
	const history = useHistory()
	const user = useSelector((state) => state.auth.user)
	const exams = useSelector((state) => state.exam.exams)
	const subjects = useSelector((state) => state.subjects.subjects)
	const examResults = useSelector((state) => state.examResult.examResults)
	const examsLoading = useSelector((state) => state.exam.examsLoading)

	useEffect(() => {
		window.scrollTo(0, 0)
		console.log(user)
	}, [])

	let filteredExams
	if (user?.role === 'student') {
		filteredExams = exams.filter((exam) => {
			return exam?.grade === user?.classId?.grade
		})
	}
	// gv chủ nhiệm và giáo viên bộ môn hiển thị môn thi của từng người
	if (user?.role === 'teacher' && user?.teacherType.isClassHeadTeacher) {
		filteredExams = exams.filter((exam) => {
			const check = user?.teacherType.subjects.find((subject) => {
				return subject._id === exam.subjectId._id
			})
			return exam?.grade === user?.classId?.grade && check
		})
	}

	if (user?.role === 'teacher' && !user?.teacherType.isClassHeadTeacher) {
		filteredExams = exams.filter((exam) => {
			return exam?.subjectId._id === user?.teacherType.subjects[0]._id
		})
	}

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

	const [open4, setOpen4] = useState(false)
	const handleOpen4 = (exam) => {
		setThisExam(exam)
		setOpen4(true)
	}
	const handleClose4 = () => {
		setThisExam(null)
		setOpen4(false)
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
		const fetchData = () => {
			const action = getExams()
			dispatch(action)

			const action2 = getExamResults()
			dispatch(action2)

			const action3 = getSubjects()
			dispatch(action3)
		}

		fetchData()
	}, [dispatch])

	const [isSubmitted, setIsSubmitted] = useState(false)
	useEffect(() => {
		if (examResults) {
			examResults?.forEach((result) => {
				if (result?.studentId?._id === user?._id) {
					setIsSubmitted(true)
				}
			})
		}
	}, [])

	const handleCheckSubmitted = (exams) => {
		let check
		if (exams?.length === 0) {
			return false
		} else {
			check = exams.find((result) => {
				return result.studentId._id === user._id
			})
			if (check) {
				return true
			} else return false
		}
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

	const [subject, setSubject] = useState('')

	const handleChangeSubject = (event) => {
		setSubject(event.target.value)
	}

	const [typeExam, setTypeExam] = useState('')

	const handleChangeTypeExam = (event) => {
		setTypeExam(event.target.value)
	}

	return (
		<>
			<Helmet>
				<title>Tổ chức kỳ thi - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>

			<Box className={classes.main}>
				<Breadcrumb links={links} />
				<form autoComplete="off" className={classes.form}>
					<TextField
						id="outlined-select-gender"
						select
						label={subject === '' ? 'Môn học' : ''}
						value={subject}
						onChange={handleChangeSubject}
						InputLabelProps={{ shrink: false }}
						SelectProps={{
							MenuProps: {
								className: classes.menu,
							},
						}}
						variant="outlined"
						className={classes.select}
					>
						<MenuItem value="">Mặc định</MenuItem>
						{subjects.map((option) => (
							<MenuItem key={option._id} value={option._id}>
								{option.name}
							</MenuItem>
						))}
					</TextField>
					<TextField
						id="outlined-select-gender"
						select
						label={typeExam === '' ? 'Loại kỳ thi' : ''}
						value={typeExam}
						onChange={handleChangeTypeExam}
						InputLabelProps={{ shrink: false }}
						SelectProps={{
							MenuProps: {
								className: classes.menu,
							},
						}}
						variant="outlined"
						className={classes.select}
					>
						<MenuItem value="">Mặc định</MenuItem>
						<MenuItem value="Giữa học kỳ 1">Giữa học kỳ 1</MenuItem>
						<MenuItem value="Cuối học kỳ 1">Cuối học kỳ 1</MenuItem>
						<MenuItem value="Giữa học kỳ 2">Giữa học kỳ 2</MenuItem>
						<MenuItem value="Cuối học kỳ 2">Cuối học kỳ 2</MenuItem>
					</TextField>
					<div className={classes.searchBar}>
						<TextField
							className={classes.searchField}
							id="outlined-textarea"
							placeholder="Tên môn thi"
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
					{user?.role === 'admin' && (
						<>
							<Typography
								className={classes.title}
								variant="h6"
								id="subtitle"
								component="div"
							>
								Danh sách bài thi
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
											Tên bài thi
										</TableCell>
										<TableCell align="center" className={classes.tableHead}>
											Loại kỳ thi
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
									{user?.role !== 'admin' &&
										((filteredExams?.length > 0 && filteredExams) || [])
											.filter((exam) => {
												if (
													searchTerm === '' &&
													subject === '' &&
													typeExam === ''
												)
													return exam
												if (searchTerm && subject === '' && typeExam === '')
													return exam.name
														.toLowerCase()
														.includes(searchTerm.toLowerCase())
												if (searchTerm && subject && typeExam === '')
													return exam.name
														.toLowerCase()
														.includes(
															searchTerm.toLowerCase() &&
																exam.subjectId._id === subject
														)
												if (searchTerm && subject === '' && typeExam)
													return exam.name
														.toLowerCase()
														.includes(
															searchTerm.toLowerCase() &&
																exam.subjectId._id === subject
														)

												if (searchTerm === '' && subject && typeExam === '')
													return exam.subjectId._id === subject
												if (searchTerm === '' && subject && typeExam)
													return (
														exam.subjectId._id === subject &&
														exam.semester === typeExam
													)
												if (typeExam && searchTerm === '' && subject === '') {
													return exam.semester === typeExam
												} else return false
											})
											.slice(
												page * rowsPerPage,
												page * rowsPerPage + rowsPerPage
											)
											.map((exam) => {
												return (
													<TableRow>
														<TableCell
															align="center"
															component="th"
															scope="row"
														>
															<strong>{exam?.name}</strong>
															<p>Môn học: {exam?.subjectId?.name}</p>
														</TableCell>
														<TableCell align="center">
															{exam.semester}
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
																	'Đang diễn ra' &&
																!handleCheckSubmitted(exam.examResult) && (
																	<Button
																		variant="contained"
																		className={classes.takingExam}
																		onClick={() => {
																			handleOpen4(exam)
																		}}
																	>
																		Làm bài
																	</Button>
																)}
															{user?.role === 'student' &&
																checkTimeV2(exam.startAt, exam.duration) ===
																	'Đang diễn ra' &&
																handleCheckSubmitted(exam.examResult) && (
																	<Typography
																		// className={classes.title}
																		variant="subtitle1"
																	>
																		Đã nộp bài
																	</Typography>
																)}
														</TableCell>
													</TableRow>
												)
											})}
									{user?.role === 'admin' &&
										exams
											.filter((exam) => {
												if (
													searchTerm === '' &&
													subject === '' &&
													typeExam === ''
												)
													return exam
												if (searchTerm && subject === '' && typeExam === '')
													return exam.name
														.toLowerCase()
														.includes(searchTerm.toLowerCase())
												if (searchTerm && subject && typeExam === '')
													return exam.name
														.toLowerCase()
														.includes(
															searchTerm.toLowerCase() &&
																exam.subjectId._id === subject
														)
												if (searchTerm && subject === '' && typeExam)
													return exam.name
														.toLowerCase()
														.includes(
															searchTerm.toLowerCase() &&
																exam.subjectId._id === subject
														)

												if (searchTerm === '' && subject && typeExam === '')
													return exam.subjectId._id === subject
												if (searchTerm === '' && subject && typeExam)
													return (
														exam.subjectId._id === subject &&
														exam.semester === typeExam
													)
												if (typeExam && searchTerm === '' && subject === '') {
													return exam.semester === typeExam
												} else return false
											})
											.slice(
												page * rowsPerPage,
												page * rowsPerPage + rowsPerPage
											)
											.map((exam) => {
												return (
													<TableRow>
														<TableCell
															align="center"
															component="th"
															scope="row"
														>
															<strong>{exam?.name}</strong>
															<p>Môn học: {exam?.subjectId?.name}</p>
														</TableCell>
														<TableCell align="center">
															{exam.semester}
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
															
														</TableCell>
													</TableRow>
												)
											})}
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
									<ConfirmTakingExam open={open4} thisExam={thisExam} 
									handleClose={handleClose4}
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
									exams.filter((exam) => {
										if (searchTerm === '' && subject === '' && typeExam === '')
											return exam
										if (searchTerm && subject === '' && typeExam === '')
											return exam.name
												.toLowerCase()
												.includes(searchTerm.toLowerCase())
										if (searchTerm && subject && typeExam === '')
											return exam.name
												.toLowerCase()
												.includes(
													searchTerm.toLowerCase() &&
														exam.subjectId._id === subject
												)
										if (searchTerm && subject === '' && typeExam)
											return exam.name
												.toLowerCase()
												.includes(
													searchTerm.toLowerCase() &&
														exam.subjectId._id === subject
												)

										if (searchTerm === '' && subject && typeExam === '')
											return exam.subjectId._id === subject
										if (searchTerm === '' && subject && typeExam)
											return (
												exam.subjectId._id === subject &&
												exam.semester === typeExam
											)
										if (typeExam && searchTerm === '' && subject === '') {
											return exam.semester === typeExam
										} else return false
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
								<p style={{ color: '#c3c3c3' }}>Không có dữ liệu</p>
							</div>
						)}
					</>
				)}
			</Box>
		</>
	)
}

export default Exam
