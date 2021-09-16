import React from 'react'
import useStyles from './styles'
import { Helmet } from 'react-helmet-async'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import { Box } from '@material-ui/core'

const links = [
	{
		title: 'Dashboard',
		path: '/dashboard/overview',
	},
	{
		title: 'Thời khóa biểu',
		path: '/dashboard/timetable',
	},
]

const Timetable = () => {
	const classes = useStyles()
	return (
		<>
			<Helmet>
				<title>Thời khóa biểu - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Box className={classes.main}>
				<Breadcrumb links={links} />
				<div>Thời khóa biểu</div>
			</Box>
		</>
	)
}

export default Timetable
