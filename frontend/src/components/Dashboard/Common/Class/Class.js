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
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import formatDate from 'utils/formatDate'
import AddEditClass from './AddEditClass/AddEditClass'
import { getClasses } from './classSlice'
import DeleteAlert from './DeleteAlert/DeleteAlert'
import useStyles from './styles'

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
		title: 'Lớp học',
		path: '/dashboard/class',
	},
]

const Class = () => {
	const classes = useStyles()
	const classesFromStore = useSelector((state) => state.classes.classes)
	const classesLoading = useSelector((state) => state.classes.classesLoading)
	const dispatch = useDispatch()

	const [thisClass, setThisClass] = useState(null)

	const [open, setOpen] = useState(false)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	const [open2, setOpen2] = useState(false)
	const handleOpen2 = (thisClass) => {
		setThisClass(thisClass)
		setOpen2(true)
	}
	const handleClose2 = () => {
		setThisClass(null)
		setOpen2(false)
	}

	const [open3, setOpen3] = useState(false)
	const handleOpen3 = (thisClass) => {
		setThisClass(thisClass)
		setOpen3(true)
	}
	const handleClose3 = () => {
		setThisClass(null)
		setOpen3(false)
	}

	useEffect(() => {
		const fetchClasses = () => {
			const action = getClasses()
			dispatch(action)
		}
		fetchClasses()
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
				<title>Lớp học - Hệ thống trường quốc tế</title>
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
						Danh sách lớp học
					</Typography>
					<Button
						variant="contained"
						className={classes.button}
						startIcon={<AddIcon />}
						onClick={handleOpen}
					>
						Thêm lớp học
					</Button>
					<AddEditClass open={open} handleClose={handleClose} />
				</div>

				{classesLoading ? (
					<div className={classes.loading}>
						<CircularProgress
							style={{
								color: '#3254ac',
							}}
						/>
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
											Số lượng học sinh
										</TableCell>
										<TableCell align="center" className={classes.tableHead}>
											Khối
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
										})
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((classFromStore, index) => (
											<TableRow key={index}>
												<TableCell
													align="center"
													component="th"
													scope="row"
													className={classes.limitText}
												>
													{classFromStore._id}
												</TableCell>

												<TableCell align="center">
													{classFromStore.name}
												</TableCell>

												<TableCell align="center">
													{classFromStore.students.length}
												</TableCell>
												<TableCell align="center">
													{classFromStore.grade}
												</TableCell>
												<TableCell align="center">
													{formatDate(classFromStore.createdAt)}
												</TableCell>
												<TableCell align="center">
													{formatDate(classFromStore.updatedAt)}
												</TableCell>
												<TableCell align="center">
													<Tooltip title="Chỉnh sửa">
														<IconButton
															onClick={() => {
																handleOpen3(classFromStore)
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
															onClick={() => handleOpen2(classFromStore)}
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
										thisClass={thisClass}
									/>
									<AddEditClass
										open={open3}
										handleClose={handleClose3}
										currClass={thisClass}
									/>
								</TableBody>
							</Table>
						</TableContainer>
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

export default Class
