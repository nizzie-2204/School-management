import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

const Account = () => {
	const classes = useStyles()

	return (
		<Box className={classes.background}>
			<form>
				<Grid container>
					<Grid item container className={classes.row}>
						<Grid item md={3}>
							<Typography variant="span" className={classes.label}>
								Tài khoản
							</Typography>
						</Grid>
						<Grid item md={9}>
							<TextField
								// {...register('username')}
								className={classes.input}
								InputLabelProps={{
									style: { color: '#000' },
								}}
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								name="username"
								autoComplete="email"
							/>
						</Grid>
					</Grid>

					<Grid item container className={classes.row}>
						<Grid item md={3}>
							<Typography variant="span" className={classes.label}>
								Ngày tạo
							</Typography>
						</Grid>
						<Grid item md={9}>
							<TextField
								// {...register('username')}
								className={classes.input}
								InputLabelProps={{
									style: { color: '#000' },
								}}
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								name="username"
								autoComplete="email"
							/>
						</Grid>
					</Grid>

					<Grid item container className={classes.row}>
						<Grid item md={3}>
							<Typography variant="span" className={classes.label}>
								Ngày cập nhật
							</Typography>
						</Grid>
						<Grid item md={9}>
							<TextField
								// {...register('username')}
								className={classes.input}
								InputLabelProps={{
									style: { color: '#000' },
								}}
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								name="username"
								autoComplete="email"
							/>
						</Grid>
					</Grid>

					<Grid item container className={classes.row}>
						<Grid item md={3}>
							<Typography variant="span" className={classes.label}></Typography>
						</Grid>
						<Grid item md={9}>
							<Button
								disableElevation
								variant="contained"
								color="primary"
								className={classes.btnSave}
							>
								Cập nhật
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</Box>
	)
}

export default Account
