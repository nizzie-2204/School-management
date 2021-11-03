import { Box, Typography } from '@material-ui/core'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import React, { useEffect } from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import CountUp from 'react-countup'
import { Helmet } from 'react-helmet-async'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import OverviewUser from './OverviewUser/OverviewUser'
import { getStudents } from '../StudentAccount/studentAccountSlice'
import { useDispatch } from 'react-redux'
import { getTeachers } from '../TeacherAccount/teacherAccountSlice'
import { getExams } from '../Exam/examSlice'

const data = {
	labels: ['Nguyễn Anh Tuấn', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [
		{
			label: 'Lượt truy cập',
			data: [21, 15, 14, 8, 5, 1],
			backgroundColor: ['rgba(118,178,240,255)'],
			borderColor: ['rgba(118,178,240,255)'],
		},
	],
}

const options = {
	indexAxis: 'y',

	elements: {
		bar: {
			borderWidth: 2,
		},
	},
	scales: {
		y: {
			grid: {
				display: false,
			},
		},
	},
	responsive: true,
}

const links = [
	{
		title: 'Dashboard',
		path: '/dashboard/overview',
	},
	{
		title: 'Tổng quan',
		path: '/dashboard/overview',
	},
]

const Overview = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const user = useSelector((state) => state.auth.user)
	const students = useSelector((state) => state.student.students)
	const teachers = useSelector((state) => state.teacher.teachers)
	const exams = useSelector((state) => state.exam.exams)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const users = [...students, ...teachers].sort((a, b) => {
		return b - a
	})

	const totalUserVisits = users.reduce((curr, next) => {
		return curr + next.visitingTime
	}, 0)

	const top10Users = users.slice(0, 10)
	const barChartData = {
		labels: top10Users?.map((user) => {
			return user.name
		}),
		datasets: [
			{
				label: 'Lượt truy cập',
				data: top10Users?.map((user) => {
					return user.visitingTime
				}),
				backgroundColor: ['rgba(118,178,240,255)'],
				borderColor: ['rgba(118,178,240,255)'],
			},
		],
	}

	const pieChartData = {
		labels: ['Giáo viên', 'Học sinh'],
		datasets: [
			{
				label: '# of Votes',
				data: [teachers.length, students.length],
				backgroundColor: ['rgba(16,132,145,255)', 'rgba(248,98,84,255)'],
				borderColor: ['rgba(16,132,145,255)', 'rgba(248,98,84,255)'],
			},
		],
	}

	useEffect(() => {
		const fetchData = () => {
			const action = getStudents()
			dispatch(action)

			const action2 = getTeachers()
			dispatch(action2)

			const action3 = getExams()
			dispatch(action3)
		}

		fetchData()
	}, [])

	return (
		<>
			<Helmet>
				<title>Tổng quan - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>

			<Box className={classes.main}>
				<Breadcrumb links={links} />
				<Box className={classes.container}>
					{user?.role === 'admin' && (
						<>
							<Box className={classes.data}>
								<Typography variant="h4" className={classes.dataTitle}>
									Thống kế nhanh
								</Typography>
								<Box className={classes.numberContainer}>
									<Box className={classes.numberItem}>
										<CountUp
											end={users.length}
											duration={1}
											className={classes.numberItemTitle}
											style={{ color: '#0baa9b' }}
										/>
										<Typography variant="h6" className={classes.numberItemDesc}>
											Người dùng hoạt động
										</Typography>
									</Box>

									<Box
										style={{
											borderRight: '1px solid rgb(239 239 239)',
											borderLeft: '1px solid rgb(239 239 239)',
										}}
										className={classes.numberItem}
									>
										<CountUp
											end={exams.length}
											duration={1}
											className={classes.numberItemTitle}
											style={{ color: '#ffa326' }}
										/>
										<Typography variant="h6" className={classes.numberItemDesc}>
											Bài thi đã tạo
										</Typography>
									</Box>

									<Box className={classes.numberItem}>
										<CountUp
											end={totalUserVisits}
											duration={1}
											className={classes.numberItemTitle}
											style={{ color: '#e96053' }}
										/>
										<Typography variant="h6" className={classes.numberItemDesc}>
											Tổng số lượt truy cập
										</Typography>
									</Box>
								</Box>
							</Box>
							<Box className={classes.chart}>
								<Box className={classes.chartItem}>
									<Typography variant="h4" className={classes.dataTitle}>
										Tài khoản truy cập nhiều nhất
									</Typography>
									<Bar data={data} options={options} />
								</Box>
								<Box className={classes.chartItem}>
									<Typography variant="h4" className={classes.dataTitle}>
										Tỉ trọng tài khoản người dùng
									</Typography>
									<Pie data={pieChartData} />
								</Box>
							</Box>
						</>
					)}
					{user?.role !== 'admin' && <OverviewUser />}
				</Box>
			</Box>
		</>
	)
}

export default Overview
