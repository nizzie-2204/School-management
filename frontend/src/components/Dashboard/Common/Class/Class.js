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
	TableRow,
	TextField,
	Tooltip,
	Typography,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import BuildIcon from '@material-ui/icons/Build'
import DeleteIcon from '@material-ui/icons/Delete'
import SearchIcon from '@material-ui/icons/Search'
import VisibilityIcon from '@material-ui/icons/Visibility'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import React from 'react'
import { Helmet } from 'react-helmet'
import useStyles from './styles'
import Header from 'components/Dashboard/Common/Header/Header'
import Sidebar from 'components/Dashboard/Common/Sidebar/Sidebar'
function createData(name, calories, fat, carbs, asd) {
	return { name, calories, asd, fat, carbs }
}

const rows = [
	createData(1, '1A', 18, '12/02/2021', '12/02/2021'),
	createData(1, '1A', 18, '12/02/2021', '12/02/2021'),
	createData(1, '1A', 18, '12/02/2021', '12/02/2021'),
	createData(1, '1A', 18, '12/02/2021', '12/02/2021'),
	createData(1, '1A', 18, '12/02/2021', '12/02/2021'),
]

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
	return (
		<>
			<Helmet>
				<title>Lớp học - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Breadcrumb links={links} />

			<Box className={classes.root}>
				<Box className={classes.header}>
					<Header />
				</Box>

				<Box className={classes.sidebar}>
					<Sidebar />
				</Box>

				<Box className={classes.main}>
					<form noValidate autoComplete="off">
						<div className={classes.searchBar}>
							<TextField
								className={classes.searchField}
								id="outlined-textarea"
								placeholder="Tên lớp"
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
							Danh sách lớp học
						</Typography>
						<Button
							variant="contained"
							className={classes.button}
							startIcon={<AddIcon />}
						>
							Thêm lớp học
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
								{rows.map((row) => (
									<TableRow key={row.name}>
										<TableCell align="center" component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="center">{row.calories}</TableCell>
										<TableCell align="center">{row.fat}</TableCell>

										<TableCell align="center">1</TableCell>
										<TableCell align="center">{row.asd}</TableCell>
										<TableCell align="center">{row.carbs}</TableCell>
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

export default Class
