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
import AddEditTypeTeacher from './AddEditAccount/AddEditTypeTeacher'
import DeleteAlert from './DeleteAlert/DeleteAlert'
import useStyles from './styles'
import { getTypeTeachers } from './typeTeacherSlice'
// import { getSubjects } from './subjectSlice'
import emptyDataPNG from 'assets/images/document.png'
import { getSubjects } from '../Subject/subjectSlice'

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
		title: 'Loại giáo viên',
		path: '/dashboard/teacher-type',
	},
]

const TypeTeacher = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const typeTeachers = useSelector((state) => state.typeTeacher.typeTeachers)
	const typeTeachersLoading = useSelector(
		(state) => state.subjects.typeTeachersLoading
	)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const [typeTeacher, setTypeTeacher] = useState(null)

	const [open, setOpen] = useState(false)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	const [open2, setOpen2] = useState(false)
	const handleOpen2 = (typeTeacher) => {
		setTypeTeacher(typeTeacher)
		setOpen2(true)
	}
	const handleClose2 = () => {
		setTypeTeacher(null)
		setOpen2(false)
	}

	const [open3, setOpen3] = useState(false)
	const handleOpen3 = (typeTeacher) => {
		setTypeTeacher(typeTeacher)
		setOpen3(true)
	}
	const handleClose3 = () => {
		setTypeTeacher(null)

		setOpen3(false)
	}

	const [searchTerm, setSearchTerm] = useState('')
	const handleChangeSearch = (e) => {
		setSearchTerm(e.target.value)
	}

	useEffect(() => {
		const fetchData = () => {
			const action = getTypeTeachers()
			dispatch(action)

			const action2 = getSubjects()
			dispatch(action2)
		}

		fetchData()
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
				<title>Loại giáo viên - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>

			<Box className={classes.main}>
				<Breadcrumb links={links} />

				<form autoComplete="off">
					<div className={classes.searchBar}>
						<TextField
							className={classes.searchField}
							id="outlined-textarea"
							placeholder="Tên loại giáo viên"
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
						Danh sách loại giáo viên
					</Typography>
					<Button
						variant="contained"
						className={classes.button}
						startIcon={<AddIcon />}
						onClick={handleOpen}
					>
						Thêm mới
					</Button>
					<AddEditTypeTeacher open={open} handleClose={handleClose} />
				</div>

				{typeTeachersLoading ? (
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
										{/* <TableCell align="center" className={classes.tableHead}>
									Miêu tả
								</TableCell> */}

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
								{typeTeachersLoading ? (
									<CircularProgress
										style={{ color: '#3254ac' }}
										className={classes.loading}
									/>
								) : (
									<TableBody>
										{/* Search and render */}
										{typeTeachers
											?.filter((typeTeacher) => {
												if (searchTerm === '') {
													return typeTeacher
												} else if (
													typeTeacher.nameType
														.toLowerCase()
														.includes(searchTerm.toLowerCase())
												) {
													return typeTeacher
												}
												return false
											})
											.slice(
												page * rowsPerPage,
												page * rowsPerPage + rowsPerPage
											)
											.map((typeTeacher, index) => (
												<>
													<TableRow key={typeTeacher._id}>
														<TableCell
															align="center"
															component="th"
															scope="row"
															className={classes.limitText}
														>
															{typeTeacher._id}
														</TableCell>
														<TableCell align="center">
															{typeTeacher.nameType}
														</TableCell>

														<TableCell align="center">
															{formatDate(typeTeacher.createdAt)}
														</TableCell>
														<TableCell align="center">
															{formatDate(typeTeacher.updatedAt)}
														</TableCell>
														<TableCell align="center">
															<Tooltip title="Chỉnh sửa">
																<IconButton
																	onClick={() => {
																		handleOpen3(typeTeacher)
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
																		handleOpen2(typeTeacher)
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
								)}
								<DeleteAlert
									open={open2}
									handleClose={handleClose2}
									typeTeacher={typeTeacher}
								/>
								<AddEditTypeTeacher
									open={open3}
									handleClose={handleClose3}
									typeTeacher={typeTeacher}
								/>
							</Table>
						</TableContainer>
						{typeTeachers.length > 0 ? (
							<TablePagination
								rowsPerPageOptions={[10]}
								component="div"
								// Pagination on search
								count={
									typeTeachers?.filter((typeTeacher) => {
										if (searchTerm === '') {
											return typeTeacher
										} else if (
											typeTeacher.nameType
												.toLowerCase()
												.includes(searchTerm.toLowerCase())
										) {
											return typeTeacher
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

export default TypeTeacher
