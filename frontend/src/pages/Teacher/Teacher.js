import { Container, Grid, Typography } from '@material-ui/core'
import About from 'components/Homepage/About/About'
import Breadcrumb from 'components/Homepage/Breadcrumb/Breadcrumb'
import Footer from 'components/Homepage/Footer/Footer'
import Header from 'components/Homepage/Header/Header'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Fade from 'react-reveal/Fade'
import { useStyles } from './styles'
import image1 from 'assets/images/Tran-Hoang-Anh-2.jpg'
import image2 from 'assets/images/Tamah-Pnematicatos.jpg'
import image3 from 'assets/images/Anna-Alessandra-Lee-Flood-1.jpg'
import image4 from 'assets/images/Nguyen-Phuong-Oanh-1.jpg'
import image5 from 'assets/images/Nguyen-Thi-Mung-2-1.jpg'
import image6 from 'assets/images/Nguyen-Thi-Thanh-Lan.jpg'
const Teacher = () => {
	const links = [
		{
			title: 'Trang chủ',
			path: '/',
		},
		{
			title: 'Giới thiệu',
			path: '/teacher',
		},
		{
			title: 'Đội ngũ giáo viên',
			path: '/teacher',
		},
	]
	const classes = useStyles()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Helmet>
				<title>Đội ngũ giáo viên - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Header />
			<Breadcrumb links={links} />
			<About />
			<div className={classes.teacherContainer}>
				<Fade bottom cascade>
					<Container maxWidth="lg" className={classes.container}>
						<Typography
							variant="body2"
							component="h3"
							className={classes.title}
						>
							Đội ngũ giáo viên
						</Typography>
						<Grid container spacing={8}>
							<Grid item md={4} xs={6}>
								<div className={classes.teacher}>
									<img
										src={image1}
										alt="teacher"
										className={classes.teacherImage}
									/>
									<p className={classes.teacherName}>
										Nguyễn Thị Thanh Lan - Khối trưởng khối 3
									</p>
								</div>
							</Grid>
							<Grid item md={4} xs={6}>
								<div className={classes.teacher}>
									<img
										src={image2}
										alt="teacher"
										className={classes.teacherImage}
									/>
									<p className={classes.teacherName}>
										Anna Alessandra - Teacher English
									</p>
								</div>
							</Grid>
							<Grid item md={4} xs={6}>
								<div className={classes.teacher}>
									<img
										src={image3}
										alt="teacher"
										className={classes.teacherImage}
									/>
									<p className={classes.teacherName}>
										Tamah Pnematicatos - Teacher English
									</p>
								</div>
							</Grid>
							<Grid item md={4} xs={6}>
								<div className={classes.teacher}>
									<img
										src={image4}
										alt="teacher"
										className={classes.teacherImage}
									/>
									<p className={classes.teacherName}>
										Nguyễn Phương Oanh - Khối trưởng khối 1
									</p>
								</div>
							</Grid>
							<Grid item md={4} xs={6}>
								<div className={classes.teacher}>
									<img
										src={image5}
										alt="teacher"
										className={classes.teacherImage}
									/>
									<p className={classes.teacherName}>
										Nguyễn Thị Mừng - Tổ trưởng chuyên môn
									</p>
								</div>
							</Grid>
							<Grid item md={4} xs={6}>
								<div className={classes.teacher}>
									<img
										src={image6}
										alt="teacher"
										className={classes.teacherImage}
									/>
									<p className={classes.teacherName}>
										Trần Hoàng Anh - Hiệu trưởng
									</p>
								</div>
							</Grid>
						</Grid>
					</Container>
				</Fade>
			</div>
			<Footer />
		</>
	)
}

export default Teacher
