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
} from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import SearchIcon from '@material-ui/icons/Search'
import VisibilityIcon from '@material-ui/icons/Visibility'

const ListExamAnswer = () => {
	const classes = useStyles()
	return (
		<Box className={classes.container}>
			<Box className={classes.header}>
				<Typography variant="h5" className={classes.title}>
					Danh sách bài thi
				</Typography>
				<span className={classes.subTitle}>10 kết quả</span>
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
					// onChange={handleChangeSearch}
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
						<TableRow>
							<TableCell
								align="center"
								component="th"
								scope="row"
								className={classes.limitText}
							>
								123
							</TableCell>
							<TableCell align="center">123</TableCell>

							<TableCell align="center">123</TableCell>
							<TableCell align="center">123</TableCell>
							<TableCell align="center">123</TableCell>
							<TableCell align="center">0/10</TableCell>
							<TableCell align="center">
								<Tooltip title="Chi tiết">
									<IconButton
									// onClick={() => {
									// 	handleOpen3(student)
									// }}
									>
										<VisibilityIcon
											fontSize="small"
											style={{ color: '#ffa000' }}
										/>
									</IconButton>
								</Tooltip>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}

export default ListExamAnswer