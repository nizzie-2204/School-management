import {
	Menu,
	MenuItem,
	Toolbar,
	Badge,
	AppBar,
	makeStyles,
	IconButton,
	Typography,
	InputBase,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import React from 'react'
import useStyles from './styles'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/More'
import logo from 'assets/images/logo.png'
import { useState } from 'react'
import Select from 'react-select'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import { withStyles } from '@material-ui/styles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
const customStyles = {
	option: (provided, state) => ({
		...provided,
		color: '#000',
		padding: 5,
	}),
	control: () => ({
		// none of react-select's styles are passed to <Control />
		width: 180,
		display: 'flex',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderRadius: '4px',
	}),
}

const StyledMenu = withStyles({
	list: {
		backgroundColor: 'transparent',
		padding: '0',
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
		padding: '10px 8px',
		backgroundColor: '#fff',
		color: '#000',
		// "&:focus": {
		// 	backgroundColor: theme.palette.primary.main,
		// 	"& .MuiListItemIcon-root, & .MuiListItemText-primary": {
		// 		color: theme.palette.common.white,
		// 	},
		// },
	},
}))(MenuItem)

const yearOptions = [
	{ value: '2020-2021', label: 'Năm học 2020-2021' },
	{ value: '2021-2022', label: 'Năm học 2021-2022' },
]

const termOptions = [
	{ value: '1', label: 'Học kỳ I' },
	{ value: '2', label: 'Học kỳ II' },
]

const Header = () => {
	const classes = useStyles()

	// React-select
	const [selectedYearOption, setSelectedYearOption] = useState(null)
	const handleChangeYearOption = (selectedYearOption) => {
		setSelectedYearOption(selectedYearOption)
	}

	const [selectedTermOption, setSelectedTermOption] = useState(null)
	const handleChangeTermOption = (selectedTermOption) => {
		setSelectedTermOption(selectedTermOption)
	}

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
				<Link to="/" className={classes.logo}>
					<img src={logo} alt="Logo" />
				</Link>
				<div className={classes.right}>
					<div className={classes.select}>
						<div className={classes.selectItem}>
							<Select
								placeholder="Năm học"
								styles={customStyles}
								className={classes.yearOptions}
								value={selectedYearOption}
								onChange={handleChangeYearOption}
								options={yearOptions}
							/>
						</div>
						<div className={classes.selectItem}>
							<Select
								placeholder="Học kỳ"
								styles={customStyles}
								className={classes.termOptions}
								value={selectedTermOption}
								onChange={handleChangeTermOption}
								options={termOptions}
							/>
						</div>
					</div>
					<div className={classes.info}>
						<IconButton className={classes.notify}>
							<Badge badgeContent={17} classes={{ badge: classes.badge }}>
								<NotificationsNoneIcon />
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
								startIcon={<AccountCircleIcon />}
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
									<ListItemIcon>
										<ExitToAppIcon fontSize="small" />
									</ListItemIcon>
									<ListItemText primary="Đăng xuất" />
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
