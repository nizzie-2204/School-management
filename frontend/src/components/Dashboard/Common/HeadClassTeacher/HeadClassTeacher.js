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
} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import CreateIcon from '@material-ui/icons/Create'
import SearchIcon from '@material-ui/icons/Search'
import { unwrapResult } from '@reduxjs/toolkit'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { getClasses } from '../Class/classSlice'
import AddEditPage from './AddEditPage/AddEditPage'
import useStyles from './styles'
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
		title: 'Phân công chủ nhiệm',
		path: '/dashboard/head-class-teacher',
	},
]

const HeadClassTeacher = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const classesFromStore = useSelector((state) => state.classes.classes)
	const classesLoading = useSelector((state) => state.classes.classesLoading)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const [currClass, setCurrClass] = useState(null)

	const [open, setOpen] = useState(false)
	const handleOpen = (thisClass) => {
		setCurrClass(thisClass)
		setOpen(true)
	}
	const handleClose = () => {
		setCurrClass(null)
		setOpen(false)
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
		const action = getClasses()
		dispatch(action)
			.then(unwrapResult)
			.catch((error) => console.error(error))
	}, [dispatch])

	return (
		<>
			<Helmet>
				<title>Phân công chủ nhiệm - Hệ thống trường quốc tế</title>
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

				{classesLoading ? (
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
											Tên lớp
										</TableCell>
										<TableCell align="center" className={classes.tableHead}>
											Khối lớp
										</TableCell>
										<TableCell align="center" className={classes.tableHead}>
											Năm học
										</TableCell>

										<TableCell align="center" className={classes.tableHead}>
											Giáo viên chủ nhiệm
										</TableCell>

										<TableCell align="center" className={classes.tableHead}>
											Hành động
										</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{/* Search and render */}
									{classesFromStore
										?.filter((thisClass) => {
											if (searchTerm === '') {
												return thisClass
											} else if (
												thisClass.name
													.toLowerCase()
													.includes(searchTerm.toLowerCase())
											) {
												return thisClass
											}
											return false
										})
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((thisClass, index) => (
											<TableRow key={thisClass._id}>
												<TableCell
													align="center"
													component="th"
													scope="row"
													className={classes.limitText}
												>
													{thisClass.name}
												</TableCell>
												<TableCell align="center">
													{`Khối ${thisClass.grade}`}
												</TableCell>
												<TableCell align="center">
													{`Năm học ${thisClass.schoolYear}`}
												</TableCell>
												<TableCell align="center">
													{thisClass?.teacherId?.name}
												</TableCell>

												<TableCell align="center">
													<Tooltip title="Chỉnh sửa">
														<IconButton
															onClick={() => {
																handleOpen(thisClass)
															}}
														>
															<CreateIcon
																fontSize="small"
																style={{ color: '#5278db' }}
															/>
														</IconButton>
													</Tooltip>
												</TableCell>
											</TableRow>
										))}
								</TableBody>

								<AddEditPage
									open={open}
									handleClose={handleClose}
									thisClass={currClass}
								/>
							</Table>
						</TableContainer>
						{classesFromStore.length > 0 ? (
							<TablePagination
								rowsPerPageOptions={[10]}
								component="div"
								// Pagination on search
								count={
									classesFromStore?.filter((thisClass) => {
										if (searchTerm === '') {
											return thisClass
										} else if (
											thisClass.name
												.toLowerCase()
												.includes(searchTerm.toLowerCase())
										) {
											return thisClass
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

export default HeadClassTeacher
