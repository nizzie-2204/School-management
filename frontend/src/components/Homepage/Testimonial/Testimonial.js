import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import image1 from 'assets/images/si-hoang_1.jpg'
import image3 from 'assets/images/kim-dung.jpg'
import image2 from 'assets/images/thanh-dien.jpg'
import React from 'react'
import { useStyles } from './styles'
import Fade from 'react-reveal/Fade'

const Testimonial = () => {
	const classes = useStyles()

	return (
		<div className={classes.testimonial}>
			<Fade bottom cascade>
				<Typography className={classes.testimonialTitle} variant="h2">
					Phụ Huynh Nói Gì
				</Typography>
				<Container maxWidth="xl">
					<Grid container spacing="8" justifyContent="center">
						<Grid item md={5}>
							<Card className={classes.root}>
								<CardMedia
									className={classes.media}
									image={image1}
									title="Contemplative Reptile"
								/>
								<div>
									<StarIcon className={classes.star} />
									<StarIcon className={classes.star} />
									<StarIcon className={classes.star} />
									<StarIcon className={classes.star} />
									<StarIcon className={classes.star} />
								</div>

								<CardContent>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
										className={classes.desc}
									>
										Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc
										và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu
										tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn
										văn bản chỉ gồm
									</Typography>
									<Typography
										gutterBottom
										variant="h5"
										component="h2"
										className={classes.title}
									>
										Anh Nhựt Tân
									</Typography>
								</CardContent>
								<div className={classes.quote}>
									<FormatQuoteIcon className={classes.quoteIcon} />
								</div>
							</Card>
						</Grid>

						<Grid item md={5}>
							<Card className={classes.root}>
								<CardMedia
									className={classes.media}
									image={image2}
									title="Contemplative Reptile"
								/>
								<div>
									<StarIcon className={classes.star} />
									<StarIcon className={classes.star} />
									<StarIcon className={classes.star} />
									<StarIcon className={classes.star} />
									<StarIcon className={classes.star} />
								</div>
								<CardContent>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
										className={classes.desc}
									>
										Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc
										và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu
										tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn
										văn bản chỉ gồm
									</Typography>
									<Typography
										gutterBottom
										variant="h5"
										component="h2"
										className={classes.title}
									>
										Anh Nhựt Tân
									</Typography>
								</CardContent>
								<div className={classes.quote}>
									<FormatQuoteIcon className={classes.quoteIcon} />
								</div>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</Fade>
		</div>
	)
}

export default Testimonial
