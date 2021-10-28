import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import useStyles from './styles'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import {
	Box,
	Button,
	FormControl,
	IconButton,
	InputLabel,
	MenuItem,
	Paper,
	Select,
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
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import SearchIcon from '@material-ui/icons/Search'
import { getSubjects } from 'components/Dashboard/Common/Subject/subjectSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getExamResults } from '../../examResultSlice'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { useHistory } from 'react-router'

const links = [
	{
		title: 'Dashboard',
		path: '/dashboard/overview',
	},
	{
		title: 'Khảo thí',
		path: '/dashboard/exam',
	},
	{
		title: 'Kết quả học tập',
		path: '/dashboard/learning-result',
	},
]

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

const LearningResult = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const subjects = useSelector((state) => state.subjects.subjects)
	const examResults = useSelector((state) => state.examResult.examResults)
	const user = useSelector((state) => state.auth.user)
	const [value, setValue] = useState(0)
	const history = useHistory()

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const [subject, setSubject] = useState()
	const handleChangeSubject = (e) => {
		setSubject(e.target.value)
	}

	useEffect(() => {
		const fetchSubject = () => {
			const action = getSubjects()
			dispatch(action)
		}

		const fetchExamResult = () => {
			const action = getExamResults()
			dispatch(action)
		}
		fetchSubject()
		fetchExamResult()
	}, [dispatch])

	const filtedExamResults = examResults.filter((result) => {
		return result?.studentId?._id === user?._id
	})

	const handleViewDetailExamResult = (exam) => {
		// if (user.role !== 'teacher') return
		history.push({
			pathname: `/dashboard/exam-answer/${exam._id}`,
			state: { exam },
		})
	}
	return (
		<>
			<Helmet>
				<title>Kết quả học tập - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>

			<Box className={classes.main}>
				<Breadcrumb links={links} />
				<form autoComplete="off" className={classes.formContainer}>
					<div className={classes.inputGroup}>
						<FormControl variant="outlined" className={classes.select}>
							<InputLabel
								id="demo-simple-select-outlined-label"
								style={{ color: '#000', fontSize: 14 }}
							>
								Môn học
							</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								value={subject}
								onChange={handleChangeSubject}
								required
							>
								{subjects?.map((subject) => {
									return (
										<MenuItem
											style={{ fontSize: 14 }}
											key={subject._id}
											value={subject._id}
										>
											{subject.name}
										</MenuItem>
									)
								})}
							</Select>
						</FormControl>
					</div>
					<div className={classes.searchBar}>
						<TextField
							className={classes.searchField}
							id="outlined-textarea"
							placeholder="Tên lớp"
							variant="outlined"
							inputProps={{
								style: { padding: '12.5px 14px' },
							}}
							// onChange={handleChangeSearch}
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
				<Box className={classes.content}>
					<Box className={classes.tabContainer}>
						<AppBar position="static" className={classes.appBar}>
							<Tabs
								value={value}
								onChange={handleChange}
								aria-label="simple tabs example"
							>
								<Tab
									className={classes.tab}
									label="Bảng điểm"
									{...a11yProps(0)}
								/>
							</Tabs>
						</AppBar>
						<TabPanel
							value={value}
							index={0}
							className={classes.tabPanelContainer}
						>
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
												Môn
											</TableCell>

											<TableCell align="center" className={classes.tableHead}>
												Bài thi
											</TableCell>
											<TableCell align="center" className={classes.tableHead}>
												Điểm
											</TableCell>
											<TableCell align="center" className={classes.tableHead}>
												Nhận xét của giáo viên
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{filtedExamResults?.map((exam) => {
											return (
												<TableRow>
													<TableCell
														align="center"
														component="th"
														scope="row"
														className={classes.limitText}
													>
														{exam?._id}
													</TableCell>
													<TableCell align="center">
														{exam?.examId?.subjectId?.name}
													</TableCell>

													<TableCell align="center">
														{exam.examId.name}
													</TableCell>
													<TableCell align="center">{exam.score}/10</TableCell>
													<TableCell align="center">
														<Tooltip title="Chi tiết">
															<IconButton
																onClick={() => {
																	handleViewDetailExamResult(exam)
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
						</TabPanel>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default LearningResult
