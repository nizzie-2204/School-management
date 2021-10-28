import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@material-ui/core'
import image1 from 'assets/images/hoclichsuobaotang.jpg'
import image3 from 'assets/images/jpj_WKWQ.jpg'
import image2 from 'assets/images/SG200481.jpg'
import Breadcrumb from 'components/Homepage/Breadcrumb/Breadcrumb'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Fade from 'react-reveal/Fade'
import { useStyles } from './styles'

const links = [
	{
		title: 'Trang chủ',
		path: '/',
	},
	{
		title: 'Tuyển sinh',
		path: '/admission',
	},
]

const Admission = () => {
	const classes = useStyles()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Helmet>
				<title>Tuyển sinh - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Breadcrumb links={links} />
			<div className={classes.admission}>
				<Container maxWidth="xl" className={classes.container}>
					<Fade bottom cascade>
						<div className={classes.top}>
							<Typography className={classes.title} variant="h2">
								Thông tin tuyển sinh
							</Typography>
							<Grid container spacing={4}>
								<Grid
									disableSpacing
									className={classes.gridItem}
									item
									md={4}
									sm={12}
								>
									<Card className={classes.root}>
										<CardMedia
											className={classes.media}
											image={image1}
											title="News"
										/>
										<CardContent>
											<Typography
												variant="h5"
												component="h2"
												className={classes.cardTitle}
											>
												Lớp Học Đầu Tiên Cho Bé
											</Typography>

											<Typography
												variant="body2"
												component="p"
												className={classes.cardDesc}
											>
												Tổng hợp các tin tức sinh hoạt, hội hè của khối Mầm Non
												cùng hoạt động bồi dưỡng chuyên môn cho giáo viên VAS.
											</Typography>
										</CardContent>
										<CardActions className={classes.actions}>
											<Button
												className={classes.seeMore}
												size="small"
												color="primary"
											>
												Xem thêm
											</Button>
										</CardActions>
									</Card>
								</Grid>
								<Grid
									disableSpacing
									className={classes.gridItem}
									item
									md={4}
									sm={12}
								>
									<Card className={classes.root}>
										<CardMedia
											className={classes.media}
											image={image2}
											title="News"
										/>
										<CardContent>
											<Typography
												variant="h5"
												component="h2"
												className={classes.cardTitle}
											>
												Tuyển Sinh Mùa Xuân
											</Typography>

											<Typography
												variant="body2"
												component="p"
												className={classes.cardDesc}
											>
												Thông tin mới nhất về các cuộc thi, hoạt động đội nhóm,
												chương trình sinh hoạt ngoại khoá của khối Tiểu Học
											</Typography>
										</CardContent>
										<CardActions className={classes.actions}>
											<Button
												className={classes.seeMore}
												size="small"
												color="primary"
											>
												Xem thêm
											</Button>
										</CardActions>
									</Card>
								</Grid>
								<Grid
									disableSpacing
									className={classes.gridItem}
									item
									md={4}
									sm={12}
								>
									<Card className={classes.root}>
										<CardMedia
											className={classes.media}
											image={image3}
											title="News"
										/>
										<CardContent>
											<Typography
												variant="h5"
												component="h2"
												className={classes.cardTitle}
											>
												Tuyển Sinh Mùa Hè
											</Typography>

											<Typography
												variant="body2"
												component="p"
												className={classes.cardDesc}
											>
												Cập nhật tin thường xuyên về các dự án cộng đồng và
												thành tích của các em học sinh khối Tiểu học
											</Typography>
										</CardContent>
										<CardActions className={classes.actions}>
											<Button
												className={classes.seeMore}
												size="small"
												color="primary"
											>
												Xem thêm
											</Button>
										</CardActions>
									</Card>
								</Grid>
							</Grid>
						</div>
					</Fade>
				</Container>
			</div>
		</>
	)
}

export default Admission
