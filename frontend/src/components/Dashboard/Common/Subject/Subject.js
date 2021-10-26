import {
	Box,
	Button,
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
import CircularProgress from '@material-ui/core/CircularProgress'
import AddIcon from '@material-ui/icons/Add'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'
import SearchIcon from '@material-ui/icons/Search'
import { unwrapResult } from '@reduxjs/toolkit'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import formatDate from 'utils/formatDate'
import AddEditAccount from './AddEditAccount/AddEditAccount'
import DeleteAlert from './DeleteAlert/DeleteAlert'
import useStyles from './styles'
import { getSubjects } from './subjectSlice'
import emptyDataPNG from 'assets/images/document.png'

const links = [
	{
		title: 'Dashboard',
		path: '/dashboard/overview',
	},
	{
		title: 'Quản lý đào tạo',
		path: '/dashboard/class',
	},
	{
		title: 'Môn học',
		path: '/dashboard/subject',
	},
]

const Subject = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const subjects = useSelector((state) => state.subjects.subjects)
	const subjectsLoading = useSelector((state) => state.subjects.subjectsLoading)
	const [subject, setSubject] = useState(null)

	const [open, setOpen] = useState(false)
	const handleOpen = (subject) => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	const [open2, setOpen2] = useState(false)
	const handleOpen2 = (subject) => {
		setSubject(subject)
		setOpen2(true)
	}
	const handleClose2 = () => {
		setSubject(null)
		setOpen2(false)
	}

	const [open3, setOpen3] = useState(false)
	const handleOpen3 = (subject) => {
		setSubject(subject)
		setOpen3(true)
	}
	const handleClose3 = () => {
		setSubject(null)

		setOpen3(false)
	}

	const [searchTerm, setSearchTerm] = useState('')
	const handleChangeSearch = (e) => {
		setSearchTerm(e.target.value)
		console.log(e.target.value)
	}

	useEffect(() => {
		const action = getSubjects()
		dispatch(action)
			.then(unwrapResult)
			.catch((error) => console.error(error))
	}, [dispatch])

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
				<title>Môn học - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>

			<Box className={classes.main}>
				<Breadcrumb links={links} />

				<form noValidate autoComplete="off">
					<div className={classes.searchBar}>
						<TextField
							className={classes.searchField}
							id="outlined-textarea"
							placeholder="Tên môn hoặc miêu tả"
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
						Danh sách môn học
					</Typography>
					<Button
						variant="contained"
						className={classes.button}
						startIcon={<AddIcon />}
						onClick={handleOpen}
					>
						Thêm môn học
					</Button>
					<AddEditAccount open={open} handleClose={handleClose} />
				</div>

				{subjectsLoading ? (
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
											Tên
										</TableCell>
										<TableCell align="center" className={classes.tableHead}>
											Miêu tả
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
									{/* Search and render */}
									{subjects
										?.filter((subject) => {
											if (searchTerm === '') {
												return subject
											} else if (
												subject.name
													.toLowerCase()
													.includes(searchTerm.toLowerCase()) ||
												subject.desc
													.toLowerCase()
													.includes(searchTerm.toLowerCase())
											) {
												return subject
											}
											return false
										})
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((subject, index) => (
											<>
												<TableRow key={subject._id}>
													<TableCell
														align="center"
														component="th"
														scope="row"
														className={classes.limitText}
													>
														{subject._id}
													</TableCell>
													<TableCell align="center">{subject.name}</TableCell>
													<TableCell align="center">{subject.desc}</TableCell>
													<TableCell align="center">
														{formatDate(subject.createdAt)}
													</TableCell>
													<TableCell align="center">
														{formatDate(subject.updatedAt)}
													</TableCell>
													<TableCell align="center">
														<Tooltip title="Chỉnh sửa">
															<IconButton
																onClick={() => {
																	handleOpen3(subject)
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
																	handleOpen2(subject)
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
											</>
										))}
								</TableBody>
								<DeleteAlert
									open={open2}
									handleClose={handleClose2}
									subject={subject}
								/>
								<AddEditAccount
									open={open3}
									handleClose={handleClose3}
									subject={subject}
								/>
							</Table>
						</TableContainer>
						{subjects.length > 0 ? (
							<TablePagination
								rowsPerPageOptions={[10]}
								component="div"
								// Pagination on search
								count={
									subjects?.filter((subject) => {
										if (searchTerm === '') {
											return subject
										} else if (
											subject.name
												.toLowerCase()
												.includes(searchTerm.toLowerCase()) ||
											subject.desc
												.toLowerCase()
												.includes(searchTerm.toLowerCase())
										) {
											return subject
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

export default Subject
