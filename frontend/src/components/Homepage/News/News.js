import {
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import image1 from 'assets/images/hoclichsuobaotang.jpg'
import image3 from 'assets/images/jpj_WKWQ.jpg'
import image2 from 'assets/images/SG200481.jpg'
import React from 'react'
import { useStyles } from './styles'
import Fade from 'react-reveal/Fade'

const News = () => {
	const classes = useStyles()

	return (
		<div className={classes.news}>
			<Fade bottom cascade>
				<Container maxWidth="xl">
					<Typography className={classes.newsTitle} variant="h2">
						Tin tức tháng 10
					</Typography>
					<Grid container justifyContent="center">
						<Grid
							disableSpacing
							className={classes.gridItem}
							item
							md={4}
							sm={12}
						>
							<Card
								elevation={0}
								className={classes.root}
								component={RouterLink}
								to="/"
							>
								<CardMedia
									className={classes.media}
									image={image1}
									title="News"
								/>
								<CardContent className={classes.content}>
									<Typography
										variant="h5"
										component="h2"
										className={classes.cardTitle}
									>
										Lịch sử, không còn là môn học “khó nhằn”nữa…
									</Typography>
									<Typography
										variant="h5"
										component="subtitle1"
										className={classes.cardSubtitle}
									>
										16 Tháng Một, 2019
									</Typography>
									<Typography
										variant="body2"
										component="p"
										className={classes.cardDesc}
									>
										Vào một chiều cuối thu, có một cậu học trò đến bên cạnh tôi
										thì thầm nói: “ Cô ơi! Con rất thích học Lịch Sử nhưng con
										lại không thích phải thi cô ạ. Những câu hỏi phải trả ...
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid
							disableSpacing
							className={classes.gridItem}
							item
							md={4}
							sm={12}
						>
							<Card
								elevation={0}
								className={classes.root}
								component={RouterLink}
								to="/"
							>
								<CardMedia
									className={classes.media}
									image={image2}
									title="News"
								/>
								<CardContent className={classes.content}>
									<Typography
										variant="h5"
										component="h2"
										className={classes.cardTitle}
									>
										Back to school: Chào mừng ngày tựu trường năm học
									</Typography>
									<Typography
										variant="h5"
										component="subtitle1"
										className={classes.cardSubtitle}
									>
										16 Tháng Một, 2019
									</Typography>
									<Typography
										variant="body2"
										component="p"
										className={classes.cardDesc}
									>
										Năm học 2018 – 2019 là năm học vô cùng ý nghĩa và đặc biệt
										đối với Trường Mần Non MONA Kids vì đây là năm học thứ 10
										của MONA Kids kể từ khi thành lập. Sau một mùa ...
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid
							disableSpacing
							className={classes.gridItem}
							item
							md={4}
							sm={12}
						>
							<Card
								elevation={0}
								className={classes.root}
								component={RouterLink}
								to="/"
							>
								<CardMedia
									className={classes.media}
									image={image3}
									title="News"
								/>
								<CardContent className={classes.content}>
									<Typography
										variant="h5"
										component="h2"
										className={classes.cardTitle}
									>
										Hello Grade 1 – Cùng con tự tin vào
									</Typography>
									<Typography
										variant="h5"
										component="subtitle1"
										className={classes.cardSubtitle}
									>
										16 Tháng Một, 2019
									</Typography>
									<Typography
										variant="body2"
										component="p"
										className={classes.cardDesc}
									>
										Thời gian: 09:00 – 12:00, ngày 12/01/2019 (thứ 7) Địa điểm:
										Trường Tiểu học MONA Kids, 319 C16 Lý Thường Kiệt, Quận 11,
										TP.HCM Nếu ở bậc mẫu giáo, các hoạt động vui chơi khám phá
										là chủ đạo, các bài học ...
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</Fade>
		</div>
	)
}

export default News
