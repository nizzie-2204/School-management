import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

const Family = () => {
	const classes = useStyles()

	return (
		<Box className={classes.background}>
			<form>
				<Grid container>
					<Grid item container className={classes.row}>
						<Grid item md={3}>
							<Typography variant="span" className={classes.label}>
								Họ và tên cha
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
								Địa chỉ
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
								Ngày sinh
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
								Số điện thoại
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
								Email
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
								Họ và tên mẹ
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
								Địa chỉ
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
								Ngày sinh
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
								Số điện thoại
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
								Email
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

export default Family
