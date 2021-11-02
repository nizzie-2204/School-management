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
} from '@material-ui/core'
import React, { useEffect } from 'react'
import useStyles from './styles'
import SearchIcon from '@material-ui/icons/Search'
import { getExam } from '../../examSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getStudents } from 'components/Dashboard/Common/StudentAccount/studentAccountSlice'
const ListStudent = (props) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const exam = useSelector((state) => state.exam.exam)
	const studentAccounts = useSelector((state) => state.student.students)

	useEffect(() => {
		window.scrollTo(0, 0)
		console.log(studentAccounts)
	}, [])

	useEffect(() => {
		const fetchData = () => {
			const action = getExam(props.exam._id)
			dispatch(action)

			const action2 = getStudents()
			dispatch(action2)
		}
		fetchData()
	}, [])

	return (
		<Box className={classes.container}>
			<Box className={classes.header}>
				<Typography variant="h5" className={classes.title}>
					Danh sách học sinh
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
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}

export default ListStudent
