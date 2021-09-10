import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from '@material-ui/core';
import { Container, Grid } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';
import React from 'react';
import image1 from 'assets/images/teacher.png';
import image2 from 'assets/images/book.png';
import image3 from 'assets/images/support.png';
import image4 from 'assets/images/scholarship.png';
import Fade from 'react-reveal/Fade';
import { useStyles } from './styles';

const Introduction = () => {
	const classes = useStyles();

	return (
		<div className={classes.introduction}>
			<Container maxWidth="xl" className={classes.container}>
				<Fade bottom cascade>
					<Grid container spacing={4} className={classes.grid}>
						<Grid
							item
							lg={3}
							md={3}
							sm={6}
							xs={12}
							className={classes.gridItem}
						>
							<Card classes={{ root: classes.card }}>
								<div className={classes.cardHeader}>
									<CardMedia
										component="img"
										className={classes.cardMedia}
										image={image1}
										title="Teacher"
									/>
								</div>
								<span className={classes.cardDivider}></span>
								<CardContent style={{ paddingTop: '0' }}>
									<Typography
										className={classes.cartTitle}
										variant="h5"
										color="textSecondary"
										component="p"
									>
										Giáo viên
									</Typography>
									<Typography
										className={classes.cartSubtitle}
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Giáo viên hướng dẫn kèm cặp 1-1 mỗi em
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid
							item
							lg={3}
							md={3}
							sm={6}
							xs={12}
							className={classes.gridItem}
						>
							<Card
								classes={{ root: classes.card }}
								style={{ backgroundColor: '#ff002a' }}
							>
								<div className={classes.cardHeader}>
									<CardMedia
										component="img"
										className={classes.cardMedia}
										image={image2}
										title="Teacher"
									/>
								</div>
								<span className={classes.cardDivider}></span>
								<CardContent style={{ paddingTop: '0' }}>
									<Typography
										className={classes.cartTitle}
										variant="h5"
										color="textSecondary"
										component="p"
									>
										Chất lượng giảng dạy
									</Typography>
									<Typography
										className={classes.cartSubtitle}
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Đào tạo theo tiêu chuẩn quốc tế
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid
							item
							lg={3}
							md={3}
							sm={6}
							xs={12}
							className={classes.gridItem}
						>
							<Card
								classes={{ root: classes.card }}
								style={{ backgroundColor: '#003d69' }}
							>
								<div className={classes.cardHeader}>
									<CardMedia
										component="img"
										className={classes.cardMedia}
										image={image3}
										title="Teacher"
									/>
								</div>
								<span className={classes.cardDivider}></span>
								<CardContent style={{ paddingTop: '0' }}>
									<Typography
										className={classes.cartTitle}
										variant="h5"
										color="textSecondary"
										component="p"
									>
										Đảm bảo đầu ra
									</Typography>
									<Typography
										className={classes.cartSubtitle}
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Môi trường giáo dục hàng đầu cho trẻ em
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid
							item
							lg={3}
							md={3}
							sm={6}
							xs={12}
							className={classes.gridItem}
						>
							<Card
								classes={{ root: classes.card }}
								style={{ backgroundColor: '#3db2d5' }}
							>
								<div className={classes.cardHeader}>
									<CardMedia
										component="img"
										className={classes.cardMedia}
										image={image4}
										title="Teacher"
									/>
								</div>
								<span className={classes.cardDivider}></span>
								<CardContent style={{ paddingTop: '0' }}>
									<Typography
										className={classes.cartTitle}
										variant="h5"
										color="textSecondary"
										component="p"
									>
										Môi trường năng động
									</Typography>
									<Typography
										className={classes.cartSubtitle}
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Cùng chúng tôi khám phá tiềm năng của con trẻ
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Fade>
			</Container>
		</div>
	);
};

export default Introduction;
