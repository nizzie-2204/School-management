import { Container, Typography } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from 'assets/images/hoat_dong.jpg';
import image2 from 'assets/images/hoat_dong_1.jpg';
import image3 from 'assets/images/hoat_dong_2.jpg';
import image4 from 'assets/images/hoat_dong_3.jpg';
import image6 from 'assets/images/hoat_dong_5.jpg';
import { Button } from '@material-ui/core';
import { useStyles } from './styles';
import Fade from 'react-reveal/Fade';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 1280 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 1280, min: 960 },
		items: 4,
	},
	tablet: {
		breakpoint: { max: 960, min: 600 },
		items: 4,
	},
	mobile: {
		breakpoint: { max: 600, min: 0 },
		items: 2,
	},
};

const Activity = () => {
	const classes = useStyles();

	return (
		<div className={classes.activity}>
			<Fade bottom cascade>
				<Container maxWidth="xl" className={classes.container}>
					<Typography className={classes.activityTitle} variant="h2">
						Ảnh hoạt động
					</Typography>
					<Carousel
						additionalTransfrom={0}
						arrows
						// autoPlay
						autoPlaySpeed={1000}
						centerMode={true}
						containerClass="container-with-dots"
						draggable
						infinite
						keyBoardControl
						minimumTouchDrag={80}
						slidesToSlide={1}
						swipeable
						responsive={responsive}
					>
						<div className={classes.activityImageContainer}>
							<img
								src={image1}
								alt="activity"
								className={classes.activityImage}
							/>
						</div>
						<div className={classes.activityImageContainer}>
							<img
								src={image2}
								alt="activity"
								className={classes.activityImage}
							/>
						</div>
						<div className={classes.activityImageContainer}>
							<img
								src={image3}
								alt="activity"
								className={classes.activityImage}
							/>
						</div>
						<div className={classes.activityImageContainer}>
							<img
								src={image4}
								alt="activity"
								className={classes.activityImage}
							/>
						</div>
						<div className={classes.activityImageContainer}>
							<img
								src={image6}
								alt="activity"
								className={classes.activityImage}
							/>
						</div>
					</Carousel>
					<Button className={classes.button}>Xem thêm</Button>
				</Container>
			</Fade>
		</div>
	);
};

export default Activity;
