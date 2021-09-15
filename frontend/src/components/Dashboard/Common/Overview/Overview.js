import { Box, Typography } from '@material-ui/core'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import CountUp from 'react-countup'
import { Helmet } from 'react-helmet-async'
import useStyles from './styles'

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
	// Elements options apply to all of the options unless overridden in a dataset
	// In this case, we are setting the border of each horizontal bar to be 2px wide
	elements: {
		bar: {
			borderWidth: 2,
		},
	},
	responsive: true,
}

const data2 = {
	labels: ['Giáo viên', 'Học sinh'],
	datasets: [
		{
			label: '# of Votes',
			data: [20, 80],
			backgroundColor: ['rgba(16,132,145,255)', 'rgba(248,98,84,255)'],
			borderColor: ['rgba(16,132,145,255)', 'rgba(248,98,84,255)'],
		},
	],
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

	return (
		<>
			<Helmet>
				<title>Tổng quan - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>

			<Box className={classes.main}>
				<Breadcrumb links={links} />
				<Box className={classes.container}>
					<Box className={classes.data}>
						<Typography variant="h4" className={classes.dataTitle}>
							Thống kế nhanh
						</Typography>
						<Box className={classes.numberContainer}>
							<Box className={classes.numberItem}>
								<CountUp
									end={100}
									duration={1}
									className={classes.numberItemTitle}
									style={{ color: '#1a61c6' }}
								/>
								<Typography variant="h6" className={classes.numberItemDesc}>
									Người dùng đã đăng nhập
								</Typography>
							</Box>

							<Box className={classes.numberItem}>
								<CountUp
									end={100}
									duration={1}
									className={classes.numberItemTitle}
									style={{ color: '#0baa9b' }}
								/>
								<Typography variant="h6" className={classes.numberItemDesc}>
									Người dùng đã đăng nhập
								</Typography>
							</Box>

							<Box className={classes.numberItem}>
								<CountUp
									end={100}
									duration={1}
									className={classes.numberItemTitle}
									style={{ color: '#ffa326' }}
								/>
								<Typography variant="h6" className={classes.numberItemDesc}>
									Người dùng đã đăng nhập
								</Typography>
							</Box>

							<Box className={classes.numberItem}>
								<CountUp
									end={100}
									duration={1}
									className={classes.numberItemTitle}
									style={{ color: '#e96053' }}
								/>
								<Typography variant="h6" className={classes.numberItemDesc}>
									Người dùng đã đăng nhập
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
							<Pie data={data2} />
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default Overview
