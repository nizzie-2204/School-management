import { Button, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Fade from 'react-reveal/Fade';
import { useStyles } from './styles';

const Banner = () => {
	const classes = useStyles();

	return (
		<div className={classes.banner}>
			<Container maxWidth="xl" disableGutters className={classes.container}>
				<Fade bottom cascade>
					<div className={classes.content}>
						<Typography variant="h1" className={classes.title}>
							Chào mừng đến với môi trường tốt nhất dành cho bé
						</Typography>
						<Typography variant="subtitle1" className={classes.subtitle}>
							Chúng tôi cam kết, dành cho con của bạn một môi trường hoàn hảo để
							phát triển toàn diện
						</Typography>
						<Button className={classes.button}>Xem thêm</Button>
					</div>
				</Fade>
			</Container>
		</div>
	);
};

export default Banner;
