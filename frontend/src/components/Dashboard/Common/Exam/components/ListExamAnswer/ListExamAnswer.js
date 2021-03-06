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
	IconButton,
	TablePagination,
} from '@material-ui/core'
import React, { useEffect, useState, memo } from 'react'
import useStyles from './styles'
import SearchIcon from '@material-ui/icons/Search'
import VisibilityIcon from '@material-ui/icons/Visibility'
import formatDate from 'utils/formatDate'
import { useHistory } from 'react-router-dom'
import { getExam } from '../../examSlice'
import { useDispatch, useSelector } from 'react-redux'
import emptyDataPNG from 'assets/images/document.png'

const ListExamAnswer = (props) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const history = useHistory()
	const exam = useSelector((state) => state.exam.exam)
	const results = exam.examResult

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		const fetchData = () => {
			const action = getExam(props.exam._id)
			dispatch(action)
		}
		fetchData()
	}, [])

	const handleScoringExam = (result) => {
		history.push({
			pathname: `/dashboard/exam-answer/${result._id}`,
			state: { exam, result },
		})
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

	return (
		<Box className={classes.container}>
			<Box className={classes.header}>
				<Typography variant="h5" className={classes.title}>
					Danh sách bài thi
				</Typography>
				<span className={classes.subTitle}>{results.length} kết quả</span>
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
								Tài khoản
							</TableCell>
							<TableCell align="center" className={classes.tableHead}>
								Lớp
							</TableCell>
							<TableCell align="center" className={classes.tableHead}>
								Điểm
							</TableCell>
							<TableCell align="center" className={classes.tableHead}>
								Hành động
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{results
							?.filter((student) => {
								if (searchTerm === '') {
									return student
								} else if (
									student.studentId.name
										.toLowerCase()
										.includes(searchTerm.toLowerCase()) ||
									student.studentId.username
										.toLowerCase()
										.includes(searchTerm.toLowerCase())
								) {
									return student
								} else if (
									student.studentId.classId.name
										.toLowerCase()
										.includes(searchTerm.toLowerCase())
								) {
									return student
								}
								return false
							})
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((result) => {
								return (
									<TableRow>
										<TableCell
											align="center"
											component="th"
											scope="row"
											className={classes.limitText}
										>
											{result._id}
										</TableCell>
										<TableCell align="center">
											{result.studentId.name}
										</TableCell>

										<TableCell align="center">
											{formatDate(result.studentId.dateOfBirth)}
										</TableCell>
										<TableCell align="center">
											{result.studentId.username}
										</TableCell>
										<TableCell align="center">
											{result.studentId.classId.name}
										</TableCell>
										<TableCell align="center">{result.score || 0}/10</TableCell>
										<TableCell align="center">
											<Tooltip title="Chi tiết">
												<IconButton
													onClick={() => {
														handleScoringExam(result)
													}}
												>
													<VisibilityIcon
														fontSize="small"
														style={{ color: '#ffa000' }}
													/>
												</IconButton>
											</Tooltip>
										</TableCell>
									</TableRow>
								)
							})}
					</TableBody>
				</Table>
			</TableContainer>
			{results.length > 0 ? (
				<TablePagination
					rowsPerPageOptions={[10]}
					component="div"
					// Pagination on search
					count={results?.filter((student) => {
						if (searchTerm === '') {
							return student
						} else if (
							student.studentId.name
								.toLowerCase()
								.includes(searchTerm.toLowerCase()) ||
							student.studentId.username
								.toLowerCase()
								.includes(searchTerm.toLowerCase())
						) {
							return student
						} else if (
							student.studentId.classId.name
								.toLowerCase()
								.includes(searchTerm.toLowerCase())
						) {
							return student
						}
						return false
					})}
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

export default memo(ListExamAnswer)
