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
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import { withStyles } from '@material-ui/styles'
import logo from 'assets/images/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const StyledMenu = withStyles({
	list: {
		backgroundColor: 'transparent',
		padding: '10px 0',
		border: '1px solid rgba(0, 0, 0, 0.15)',
		borderRadius: '8px',
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
		padding: '3px 16px',
		backgroundColor: '#fff',
		color: '#000',
		fontSize: '14px !important',
	},
}))(MenuItem)

const Header = () => {
	const classes = useStyles()

	// User dropdown
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
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
								<StyledMenuItem>
									<PermIdentityIcon
										fontSize="small"
										style={{ marginRight: '15px' }}
									/>
									<ListItemText
										primary="Thông tin"
										className={classes.popupUser}
									/>
								</StyledMenuItem>
								<StyledMenuItem>
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
