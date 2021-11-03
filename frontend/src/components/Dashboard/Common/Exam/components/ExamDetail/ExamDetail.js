import { Box, Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import docPNG from 'assets/images/docs.png'
import schedulePNG from 'assets/images/schedule.png'
import cupPNG from 'assets/images/trophy.png'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import formatDate from 'utils/formatDate'
import { getExam } from '../../examSlice'
import ListExamAnswer from '../ListExamAnswer/ListExamAnswer'
import ListStudent from '../ListStudent/ListStudent'
import PointSpectrum from '../PointSpectrum/PointSpectrum'
import useStyles from './styles'

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
		title: 'Tổ chức kỳ thi',
		path: '/dashboard/exam',
	},
	{
		title: 'Chi tiết bài thi',
		path: '/dashboard/exam/:id',
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

const ExamDetail = (props) => {
	const classes = useStyles()
	const exam = useSelector((state) => state.exam.exam)
	const dispatch = useDispatch()
	const [value, setValue] = useState(0)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const totalScore = exam.examResult.reduce((first, next) => {
		return first + next.score
	}, 0)

	const mediumScore = parseFloat(
		Number(totalScore / exam.examResult.length).toFixed(2)
	)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	useEffect(() => {
		const fetchData = () => {
			const action = getExam(props.exam?._id)
			dispatch(action)
		}
		fetchData()
	}, [])

	return (
		<>
			<Helmet>
				<title>Chi tiết bài thi - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>

			<Box className={classes.main}>
				<Breadcrumb links={links} />
				<Box className={classes.content}>
					<Box className={classes.info}>
						<Typography variant="h5" className={classes.infoTitle}>
							{exam?.name}
						</Typography>
						<div>
							<p>
								Thời gian:
								<span style={{ color: '#5278db' }}>
									{` ${formatDate(new Date(exam?.startAt))}`}
								</span>
							</p>
						</div>
						<div>
							<span>
								Khối:{' '}
								<span style={{ color: '#5278db' }}>{` ${exam?.grade}`} - </span>
							</span>
							<span>
								Môn:
								<span
									style={{ color: '#5278db' }}
								>{` ${exam?.subjectId.name} `}</span>
							</span>
						</div>
						<div>
							<span>
								Thời gian làm bài:
								<span style={{ color: '#5278db' }}>
									{` ${exam?.duration} phút`}
								</span>
							</span>
						</div>
					</Box>
					<Box className={classes.overview}>
						<Typography variant="h5" className={classes.overviewTitle}>
							Tổng quan
						</Typography>
						<Box className={classes.dataContainer}>
							<Box className={classes.dataRow}>
								<div className={classes.dataImg}>
									<img src={schedulePNG} alt="user" />
								</div>
								<div className={classes.dataInfo}>
									<strong>1</strong>
									<span>lần sử dụng</span>
								</div>
							</Box>
							<Box className={classes.dataRow}>
								<div className={classes.dataImg}>
									<img src={docPNG} alt="doc" />
								</div>
								<div className={classes.dataInfo}>
									<strong>{exam?.examResult?.length || 0}</strong>
									<span>người trả lời</span>
								</div>
							</Box>
							<Box className={classes.dataRow}>
								<div className={classes.dataImg}>
									<img src={cupPNG} alt="cup" />
								</div>
								<div className={classes.dataInfo}>
									<strong>{mediumScore || 0}</strong>
									<span>điểm trung bình</span>
								</div>
							</Box>
						</Box>
					</Box>
					<Box className={classes.tabContainer}>
						<AppBar position="static" className={classes.appBar}>
							<Tabs
								value={value}
								onChange={handleChange}
								aria-label="simple tabs example"
							>
								<Tab
									className={classes.tab}
									label="Danh sách học sinh"
									{...a11yProps(0)}
								/>
								<Tab
									className={classes.tab}
									label="Bài thi"
									{...a11yProps(1)}
								/>
								<Tab
									className={classes.tab}
									label="Phổ điểm"
									{...a11yProps(2)}
								/>
							</Tabs>
						</AppBar>
						<TabPanel
							value={value}
							index={0}
							className={classes.tabPanelContainer}
						>
							<ListStudent exam={exam} />
						</TabPanel>
						<TabPanel
							className={classes.tabPanelContainer}
							value={value}
							index={1}
						>
							<ListExamAnswer exam={exam} />
						</TabPanel>
						<TabPanel
							className={classes.tabPanelContainer}
							value={value}
							index={2}
						>
							<PointSpectrum examResult={exam.examResult} />
						</TabPanel>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default ExamDetail
