import {
	AppBar,
	Badge,
	Button,
	IconButton,
	ListItemText,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import { withStyles } from '@material-ui/styles'
import logo from 'assets/images/logo.png'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import useStyles from './styles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from 'features/Login/authSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
const StyledMenu = withStyles({
	paper: {
		boxShadow: ' 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
	},
	list: {
		padding: '0',
		borderRadius: '0',
		overflow: 'hidden',
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center',
		}}
		{...props}
	/>
))

const StyledMenuItem = withStyles((theme) => ({
	root: {
		borderRadius: '0',
		padding: '8px 24px',
		color: '#fff',
		backgroundColor: '#5278db',
		'&:hover': {
			backgroundColor: '#3254ac',
		},
	},
}))(MenuItem)

const Header = () => {
	const classes = useStyles()
	const user = useSelector((state) => state.auth.user)
	const history = useHistory()
	const dispatch = useDispatch()
	// User dropdown
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleLogout = () => {
		const action = logout(user._id)
		dispatch(action)
			.then(unwrapResult)
			.then((res) => {
				console.log(res)
				localStorage.removeItem('token') ||
					localStorage.removeItem('teacherToken') ||
					localStorage.removeItem('studentToken')
				history.push('/login')
			})
			.catch((error) => console.error(error))
	}

	return (
		<AppBar position="fixed" className={classes.appBar} elevation={0}>
			<Toolbar className={classes.toolBar}>
				<Link to="/dashboard/overview" className={classes.logo}>
					<img src={logo} alt="Logo" />
				</Link>
				<Typography
					variant="subtitle1"
					component="p"
					className={classes.schoolYear}
				>
					Năm học 2021-2022
				</Typography>
				<div className={classes.right}>
					<div className={classes.info}>
						<IconButton className={classes.notify}>
							<Badge badgeContent={5} classes={{ badge: classes.badge }}>
								<NotificationsNoneIcon />
							</Badge>
						</IconButton>

						<IconButton className={classes.notify}>
							<Badge badgeContent={2} classes={{ badge: classes.badge }}>
								<MailOutlineIcon />
							</Badge>
						</IconButton>

						<div className={classes.user}>
							<Button
								disableRipple
								disableElevation={true}
								className={classes.username}
								aria-controls="customized-menu"
								aria-haspopup="true"
								variant="contained"
								color="primary"
								onClick={handleClick}
								startIcon={
									<Avatar
										className={classes.avatar}
										src={
											'https://cdn-icons-png.flaticon.com/512/3237/3237472.png'
										}
									/>
								}
								endIcon={<ExpandMoreIcon />}
							>
								Nguyễn Anh Tuấn
							</Button>
							<StyledMenu
								id="customized-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								{/* <StyledMenuItem>
									<Link to="/dashboard/profile" className={classes.popupUser}>
										<AccountCircleIcon
											fontSize="small"
											style={{ marginRight: '15px' }}
										/>
										<ListItemText primary="Xem hồ sơ" />
									</Link>
								</StyledMenuItem> */}
								<StyledMenuItem onClick={handleLogout}>
									<PowerSettingsNewIcon
										fontSize="small"
										style={{ marginRight: '15px' }}
									/>
									<ListItemText
										primary="Đăng xuất"
										className={classes.popupUser}
									/>
								</StyledMenuItem>
							</StyledMenu>
						</div>
					</div>
				</div>
			</Toolbar>
		</AppBar>
	)
}

export default Header
