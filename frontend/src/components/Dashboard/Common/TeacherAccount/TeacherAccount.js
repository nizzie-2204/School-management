import {
	Box,
	Button,
	IconButton,
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
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import useStyles from './styles'
import Header from 'components/Dashboard/Common/Header/Header'
import Sidebar from 'components/Dashboard/Common/Sidebar/Sidebar'
function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs }
}

const rows = [
	createData(1, 'Nguyễn Văn A', '12/02/2021', '12/02/2021'),
	createData(1, 'Nguyễn Văn A', '12/02/2021', '12/02/2021'),
	createData(1, 'Nguyễn Văn A', '12/02/2021', '12/02/2021'),
	createData(1, 'Nguyễn Văn A', '12/02/2021', '12/02/2021'),
	createData(1, 'Nguyễn Văn A', '12/02/2021', '12/02/2021'),
]

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

	return (
		<>
			<Helmet>
				<title>Giáo viên - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>

			<Box className={classes.root}>
				<Box className={classes.header}>
					<Header />
				</Box>

				<Box className={classes.sidebar}>
					<Sidebar />
				</Box>

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
						>
							Thêm tài khoản
						</Button>
					</div>

					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell align="center" className={classes.tableHead}>
										STT
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
								{rows.map((row) => (
									<TableRow key={row.name}>
										<TableCell align="center" component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="center">{row.calories}</TableCell>

										<TableCell align="center">
											{isLoggedIn ? (
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
										<TableCell align="center">t2100021</TableCell>
										<TableCell align="center">{row.carbs}</TableCell>
										<TableCell align="center">{row.fat}</TableCell>
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
												<IconButton>
													<BuildIcon
														fontSize="small"
														style={{ color: '#ffa326' }}
													/>
												</IconButton>
											</Tooltip>
											<Tooltip title="Xóa">
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
						</Table>
					</TableContainer>
				</Box>
			</Box>
		</>
	)
}

export default TeacherAccount
