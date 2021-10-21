import React from 'react'
import useStyles from './styles'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import { Helmet } from 'react-helmet-async'
import { Box, Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import schedulePNG from 'assets/images/schedule.png'
import docPNG from 'assets/images/docs.png'
import cupPNG from 'assets/images/trophy.png'
import ListStudent from '../ListStudent/ListStudent'
import ListExamAnswer from '../ListExamAnswer/ListExamAnswer'

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
		title: 'Chi tiết kỳ thi',
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

const ExamDetail = () => {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
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
							Kiểm tra định kỳ
						</Typography>
						<div>
							<p>
								Thời gian: <span style={{ color: '#5278db' }}>01/01/2021</span>
							</p>
						</div>
						<div>
							<span>
								Khối: <span style={{ color: '#5278db' }}>1 - </span>
							</span>
							<span>
								Môn: <span style={{ color: '#5278db' }}>Toán</span>
							</span>
						</div>
						<div>
							<span>
								Thời gian làm bài:{' '}
								<span style={{ color: '#5278db' }}>60 phút</span>
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
									<strong>5</strong>
									<span>người trả lời</span>
								</div>
							</Box>
							<Box className={classes.dataRow}>
								<div className={classes.dataImg}>
									<img src={cupPNG} alt="cup" />
								</div>
								<div className={classes.dataInfo}>
									<strong>0</strong>
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
									label="Bảng điểm"
									{...a11yProps(2)}
								/>
							</Tabs>
						</AppBar>
						<TabPanel
							value={value}
							index={0}
							className={classes.tabPanelContainer}
						>
							<ListStudent />
						</TabPanel>
						<TabPanel
							className={classes.tabPanelContainer}
							value={value}
							index={1}
						>
							<ListExamAnswer />
						</TabPanel>
						<TabPanel
							className={classes.tabPanelContainer}
							value={value}
							index={2}
						>
							Item Three
						</TabPanel>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default ExamDetail
