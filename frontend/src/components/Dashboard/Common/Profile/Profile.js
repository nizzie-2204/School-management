import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import HttpsIcon from '@material-ui/icons/Https'
import SettingsIcon from '@material-ui/icons/Settings'
import { useTheme } from '@material-ui/styles'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import SwipeableViews from 'react-swipeable-views'
import Account from './components/Account/Account'
import Background from './components/Background/Background'
import Family from './components/Family/Family'
import useStyles from './styles'

const links = [
	{
		title: 'Dashboard',
		path: '/dashboard/overview',
	},
	{
		title: 'Hồ sơ',
		path: '/dashboard/profile',
	},
]

// Tabs
const TabPanel = (props) => {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

const a11yProps = (index) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

const Profile = () => {
	const classes = useStyles()
	// Tabs
	const [value, setValue] = useState(0)
	const theme = useTheme()

	const handleChange = (e, newValue) => {
		setValue(newValue)
	}

	const handleChangeIndex = (index) => {
		setValue(index)
	}
	return (
		<>
			<Helmet>
				<title>Hồ sơ - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Box className={classes.main}>
				<Breadcrumb links={links} />
				<Box className={classes.container}>
					<AppBar position="static " className={classes.appBar}>
						<Tabs
							className={classes.tabs}
							value={value}
							classes={{
								indicator: classes.selected,
							}}
							onChange={handleChange}
							aria-label="wrapped simple tabs example"
						>
							<Tab
								classes={{
									wrapper: value === 0 ? classes.activeTab : classes.tab,
								}}
								icon={<SettingsIcon />}
								label="Lý lịch"
								{...a11yProps(0)}
							/>
							<Tab
								classes={{
									wrapper: value === 1 ? classes.activeTab : classes.tab,
								}}
								icon={<HttpsIcon />}
								label="Tài khoản"
								{...a11yProps(1)}
							/>
							<Tab
								classes={{
									wrapper: value === 2 ? classes.activeTab : classes.tab,
								}}
								icon={<HomeIcon />}
								label="Gia đình"
								{...a11yProps(2)}
							/>
						</Tabs>
					</AppBar>
					<SwipeableViews
						axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
						index={value}
						onChangeIndex={handleChangeIndex}
					>
						<TabPanel value={value} index={0}>
							<Background />
						</TabPanel>
						<TabPanel value={value} index={1}>
							<Account />
						</TabPanel>
						<TabPanel value={value} index={2}>
							<Family />
						</TabPanel>
					</SwipeableViews>
				</Box>
			</Box>
		</>
	)
}

export default Profile
