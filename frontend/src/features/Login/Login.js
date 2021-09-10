import {
	Avatar,
	Button,
	Checkbox,
	Container,
	CssBaseline,
	FormControlLabel,
	TextField,
	Typography,
	withStyles,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const CustomCheckbox = withStyles({
	root: {
		color: ' #ffb607',
		'&$checked': {
			color: ' #ffb607',
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Login = () => {
	const classes = useStyles();
	return (
		<>
			<Helmet>
				<title>Đăng nhập - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<div className={classes.login}>
				<Container maxWidth="lg" className={classes.container}>
					<CssBaseline />
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Đăng nhập
						</Typography>
						<form className={classes.form} noValidate>
							<TextField
								className={classes.input}
								InputLabelProps={{
									style: { color: '#000' },
								}}
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Tài khoản"
								name="email"
								autoComplete="email"
								autoFocus
							/>
							<TextField
								className={classes.input}
								InputLabelProps={{
									style: { color: '#000' },
								}}
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="password"
								label="Mật khẩu"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<FormControlLabel
								control={<CustomCheckbox value="remember" color="primary" />}
								label="Remember me"
							/>

							{/* <RouterLink to="/" variant="body2">
							Forgot password?
						</RouterLink> */}
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Đăng nhập
							</Button>
						</form>
						<div className={classes.footer}>
							<ul className={classes.footerList}>
								<li>
									<Link className={classes.footerLink} to="/">
										Trang chủ
									</Link>
								</li>
								<li>
									<Link
										className={`${classes.footerLink} ${classes.border}`}
										to="/about"
									>
										Giới thiệu
									</Link>
								</li>
								<li>
									<Link className={classes.footerLink} to="/admission">
										Tuyển sinh
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Login;
