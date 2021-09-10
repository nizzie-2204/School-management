import { Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import image from 'assets/images/aboutImg.png';
import image2 from 'assets/images/education.png';
import image3 from 'assets/images/class.png';
import image4 from 'assets/images/academy.png';
import { useStyles } from './styles';
import Fade from 'react-reveal/Fade';

const About = () => {
	const classes = useStyles();
	return (
		<div className={classes.about}>
			<Container>
				<Fade bottom cascade>
					<Grid container>
						<Grid item md={6} className={classes.aboutDesc}>
							<div className="desc">
								<Typography variant="h2" className={classes.title}>
									Hệ thống tiểu học quốc tế
								</Typography>
								<Typography variant="body2" className={classes.content}>
									Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng
									vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum
									đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in
									ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn
									văn bản với nhau để tạo thành một bản mẫu văn bản.
								</Typography>
							</div>
							<div className={classes.learning}>
								<div className={classes.item}>
									<div className={classes.itemImage}>
										<img src={image2} alt="education" />
									</div>
									<div className={classes.itemInfo}>
										<Typography variant="h6">Xây dựng niềm tin</Typography>
										<Typography
											variant="body2"
											className={classes.itemInfoSubtitle}
										>
											Phát triển tính độc lập, sáng tạo và phát huy tố chất của
											mỗi trẻ
										</Typography>
									</div>
								</div>
								<div className={classes.item}>
									<div
										className={classes.itemImage}
										style={{
											backgroundColor: '#3db2d5',
										}}
									>
										<img src={image3} alt="education" />
									</div>
									<div className={classes.itemInfo}>
										<Typography variant="h6">Biểu hiện sáng tạo</Typography>
										<Typography
											variant="body2"
											className={classes.itemInfoSubtitle}
										>
											Phát triển tính độc lập, sáng tạo và phát huy tố chất của
											mỗi trẻ
										</Typography>
									</div>
								</div>
								<div className={classes.item}>
									<div
										className={classes.itemImage}
										style={{ backgroundColor: '#dd1146' }}
									>
										<img src={image4} alt="education" />
									</div>
									<div className={classes.itemInfo}>
										<Typography variant="h6">Học tập tương tác</Typography>
										<Typography
											variant="body2"
											className={classes.itemInfoSubtitle}
										>
											Phát triển tính độc lập, sáng tạo và phát huy tố chất của
											mỗi trẻ
										</Typography>
									</div>
								</div>
							</div>
						</Grid>
						<Grid item md={6} className={classes.aboutImage}>
							<img src={image} alt="about" />
						</Grid>
					</Grid>
				</Fade>
			</Container>
		</div>
	);
};

export default About;
