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
	CircularProgress,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { login } from 'features/Login/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { unwrapResult } from '@reduxjs/toolkit'

const CustomCheckbox = withStyles({
	root: {
		color: ' #5278db',
		'&$checked': {
			color: ' #5278db',
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />)

const schema = yup.object().shape({
	username: yup.string().required('Bạn chưa nhập tài khoản'),
	password: yup.string().required('Bạn chưa nhập mật khẩu'),
})

const Login = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const history = useHistory()
	const isLogging = useSelector((state) => state.auth.isLogging)

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({ resolver: yupResolver(schema), reValidateMode: 'onSubmit' })
	const [error, setError] = useState(null)

	const submit = (data, e) => {
		e.preventDefault()

		const action = login({ ...data })
		dispatch(action)
			.then(unwrapResult)
			.then((res) => {
				if (res.message === 'Username is not correct!') {
					setError('Tài khoản không tồn tại')
				} else if (res.message === 'Password is not correct!') {
					setError('Mật khẩu không đúng')
				}

				if (res.status !== 'fail') {
					history.push('/dashboard/overview')
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

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
						<Typography component="h1" variant="h5" className={classes.title}>
							Đăng nhập
						</Typography>

						{(errors.username && (
							<p className={classes.error}>{errors?.username?.message}</p>
						)) ||
							(errors.password && (
								<p className={classes.error}>{errors?.password?.message}</p>
							)) ||
							(error && <p className={classes.error}>{error}</p>)}

						{!errors?.username && !errors?.password && !error ? (
							<div className={classes.empty}></div>
						) : null}

						<form
							className={classes.form}
							noValidate
							onSubmit={handleSubmit(submit)}
						>
							<TextField
								{...register('username')}
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
								name="username"
								autoComplete="email"
							/>

							<TextField
								{...register('password')}
								className={classes.input}
								InputLabelProps={{
									style: { color: '#000' },
								}}
								variant="outlined"
								margin="normal"
								label="Mật khẩu"
								required
								fullWidth
								name="password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							{/* <FormControlLabel
								control={<CustomCheckbox value="remember" color="primary" />}
								label="Remember me"
							/> */}

							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								{isLogging ? (
									<CircularProgress
										variant="indeterminate"
										disableShrink
										className={classes.top}
										classes={{
											circle: classes.circle,
										}}
										size={18}
										thickness={4}
									/>
								) : (
									'Đăng nhập'
								)}
							</Button>
						</form>
						<Link className={classes.footerLink} to="/">
							<ArrowBackIcon className={classes.footerIcon} />
							Về trang chủ
						</Link>
					</div>
				</Container>
			</div>
		</>
	)
}

export default Login
