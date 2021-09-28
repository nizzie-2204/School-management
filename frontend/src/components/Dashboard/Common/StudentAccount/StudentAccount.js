import {
	Box,
	Button,
	IconButton,
	TextField,
	Tooltip,
	Typography,
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
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
import AddEditAccount from './components/AddEditAccount/AddEditAccount'
import useStyles from './styles'
import DeleteAlert from './components/DeleteAlert/DeleteAlert'

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
		title: 'Học sinh',
		path: '/dashboard/student',
	},
]

const StudentAccount = () => {
	const classes = useStyles()

	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const [open, setOpen] = useState(false)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	const [open2, setOpen2] = useState(false)
	const handleOpen2 = () => {
		setOpen2(true)
	}
	const handleClose2 = () => {
		setOpen2(false)
	}

	return (
		<>
			<Helmet>
				<title>Học sinh - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>

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
						Danh sách tài khoản học sinh
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
							{rows.map((row, index) => (
								<TableRow key={index}>
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
											<IconButton onClick={handleOpen2}>
												<DeleteIcon
													fontSize="small"
													style={{ color: '#e96053' }}
												/>
											</IconButton>
										</Tooltip>
									</TableCell>
								</TableRow>
							))}
							<DeleteAlert open={open2} handleClose={handleClose2} />
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</>
	)
}

export default StudentAccount
