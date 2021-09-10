import { Button, Container, TextField, Typography } from '@material-ui/core'
import Breadcrumb from 'components/Homepage/Breadcrumb/Breadcrumb'
import Footer from 'components/Homepage/Footer/Footer'
import Header from 'components/Homepage/Header/Header'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useStyles } from './styles'
import Fade from 'react-reveal/Fade'

const Contact = () => {
	const links = [
		{
			title: 'Trang chủ',
			path: '/',
		},
		{
			title: 'Liên hệ',
			path: '/contact',
		},
	]
	const classes = useStyles()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Helmet>
				<title>Liên hệ - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Header />
			<Breadcrumb links={links} />
			<div className={classes.contact}>
				<Container maxWidth="xl" className={classes.container}>
					<Fade bottom cascade>
						<Typography className={classes.title} variant="h2">
							Liên hệ với chúng tôi
						</Typography>
						<form className={classes.form} noValidate autoComplete="off">
							<div className={classes.inputGroup}>
								<TextField
									className={classes.root}
									label="Họ tên"
									type="text"
									variant="outlined"
									InputLabelProps={{
										style: { color: '#000' },
									}}
								/>
								<TextField
									className={classes.root}
									label="Email"
									type="email"
									variant="outlined"
									InputLabelProps={{
										style: { color: '#000' },
									}}
								/>
							</div>
							<div className={classes.inputGroup}>
								<TextField
									className={classes.root}
									label="Số điện thoại"
									type="text"
									variant="outlined"
									InputLabelProps={{
										style: { color: '#000' },
									}}
								/>
								<TextField
									className={classes.root}
									label="Địa chỉ"
									type="text"
									variant="outlined"
									InputLabelProps={{
										style: { color: '#000' },
									}}
								/>
							</div>
							<div className={classes.inputGroup}>
								<TextField
									label="Lời nhắn"
									variant="outlined"
									multiline
									rows={6}
									className={classes.textArea}
									InputLabelProps={{
										style: { color: '#000' },
									}}
								/>
							</div>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Gửi
							</Button>
						</form>
					</Fade>
				</Container>
			</div>
			<Footer />
		</>
	)
}

export default Contact
