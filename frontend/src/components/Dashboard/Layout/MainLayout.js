import React from 'react'
import useStyles from './styles'
import { Box } from '@material-ui/core'
import Header from 'components/Dashboard/Common/Header/Header'
import Sidebar from '../Common/Sidebar/Sidebar'
import { Route, Switch } from 'react-router-dom'
import Overview from 'components/Dashboard/Common/Overview/Overview'
import StudentAccount from '../Common/StudentAccount/StudentAccount'
import TeacherAccount from '../Common/TeacherAccount/TeacherAccount'

const MainLayout = () => {
	const classes = useStyles()
	return (
		<Box className={classes.root}>
			<Box className={classes.header}>
				<Header />
			</Box>

			<Box className={classes.sidebar}>
				<Sidebar />
			</Box>

			<Box className={classes.main}>
				<Switch>
					<Route exact path="/dashboard/overview" component={Overview} />
					<Route exact path="/dashboard/student" component={StudentAccount} />
					<Route exact path="/dashboard/teacher" component={TeacherAccount} />
				</Switch>
			</Box>
		</Box>
	)
}

export default MainLayout
