import {
	AppBar,
	Button,
	Hidden,
	List,
	MenuItem,
	Toolbar,
} from '@material-ui/core'
import logo from 'assets/images/logo.png'
import {
	bindHover,
	bindMenu,
	usePopupState,
} from 'material-ui-popup-state/hooks'
import Menu from 'material-ui-popup-state/HoverMenu'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import DrawerComponent from './DrawerComponent/DrawerComponent'
import { useStyles } from './styles.js'

const Header = () => {
	const classes = useStyles()
	const popupState1 = usePopupState({ variant: 'popper', popupId: 'menu1' })

	return (
		<AppBar position="fixed" className={classes.header}>
			<Toolbar>
				<RouterLink to="/">
					<img src={logo} alt="logo" className={classes.logo} />
				</RouterLink>
				<Hidden smDown implementation="js">
					<List component="nav" className={classes.nav}>
						<Button
							className={classes.navItemText}
							variant="contained"
							component={RouterLink}
							to="/"
							disableRipple
						>
							Trang chủ
						</Button>
						<Button
							className={classes.navItemText}
							variant="contained"
							component={RouterLink}
							to="/teacher"
							{...bindHover(popupState1)}
							disableRipple
						>
							Giới thiệu
						</Button>
						<Menu
							{...bindMenu(popupState1)}
							classes={{ paper: classes.listDropdown }}
							MenuListProps={{
								disablePadding: true,
							}}
						>
							<MenuItem
								selected={false}
								className={classes.navItemTextDropdown}
								onClick={popupState1.close}
								component={RouterLink}
								to="/teacher"
								disableRipple
							>
								Đội ngũ giáo viên
							</MenuItem>
							<MenuItem
								selected={false}
								className={classes.navItemTextDropdown}
								onClick={popupState1.close}
								component={RouterLink}
								to="/vision"
								disableRipple
							>
								Tầm nhìn và sứ mệnh
							</MenuItem>
						</Menu>
						<Button
							className={classes.navItemText}
							variant="contained"
							component={RouterLink}
							to="/programs"
							disableRipple
						>
							Chương trình
						</Button>

						<Button
							className={classes.navItemText}
							variant="contained"
							component={RouterLink}
							to="/admission"
							disableRipple
						>
							Tuyển sinh
						</Button>
						<Button
							className={classes.navItemText}
							variant="contained"
							component={RouterLink}
							to="/contact"
							disableRipple
						>
							Liên hệ
						</Button>
					</List>

					<RouterLink to="/login" className={classes.loginText}>
						Đăng nhập
					</RouterLink>
				</Hidden>
				<Hidden mdUp implementation="js">
					<DrawerComponent />
				</Hidden>
			</Toolbar>
		</AppBar>
	)
}

export default Header
