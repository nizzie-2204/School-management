import useStyles from './styles'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Box, Typography } from '@material-ui/core'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import CakeIcon from '@material-ui/icons/Cake'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import ClassIcon from '@material-ui/icons/Class'
import CallIcon from '@material-ui/icons/Call'
import banner from 'assets/images/14f1ec4bed.jpg'
import onlineClassThumb from 'assets/images/online-class.jpg'
import StopIcon from '@material-ui/icons/Stop'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ScheduleIcon from '@material-ui/icons/Schedule'
import { useSelector } from 'react-redux'
import formatDate from 'utils/formatDate'
import { getSubjects } from '../../Subject/subjectSlice'
import { useDispatch } from 'react-redux'

const OverviewUser = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const user = useSelector((state) => state.auth.user)
	const subjects = useSelector((state) => state.subjects.subjects)
	const timetableTeacher = user.timetable

	// Get subject and time on this day
	const subjectTime = []
	timetableTeacher.forEach((time) => {
		time.content.forEach((lesson) => {
			console.log(lesson)
			const subject = subjects.find((x) => {
				return x._id === lesson.subjectId
			})

			if (lesson.day.includes(new Date().toString().slice(0, 2))) {
				subjectTime.push({
					time: time,
					lesson: subject,
				})
			}
		})
	})

	useEffect(() => {
		const fetchSubjects = () => {
			const action = getSubjects()
			dispatch(action)
		}
		fetchSubjects()
	}, [])

	return (
		<>
			<>
				<Box className={classes.data}>
					<Box className={classes.left}>
						<Typography variant="h6" className={classes.dataTitle}>
							Thông tin cá nhân
						</Typography>
						<Box className={classes.info}>
							<Box className={classes.row}>
								<AccountBoxIcon className={classes.infoIcon} />
								{user.name}
							</Box>
							<Box className={classes.row}>
								<CakeIcon className={classes.infoIcon} />
								Ngày sinh: {formatDate(user.dateOfBirth).slice(5)}
							</Box>
							<Box className={classes.row}>
								<PermIdentityIcon className={classes.infoIcon} />
								Tài khoản: {user.username}
							</Box>
							{user.role === 'student' && (
								<Box className={classes.row}>
									<ClassIcon className={classes.infoIcon} />
									Lớp
								</Box>
							)}
							{user.role === 'teacher' && (
								<Box className={classes.row}>
									<CallIcon className={classes.infoIcon} />
									Số điện thoại cá nhân: {user.phone}
								</Box>
							)}
						</Box>
					</Box>
					<Box className={classes.right}>
						<img src={banner} alt="banner" className={classes.banner} />
					</Box>
				</Box>
				<Box className={classes.schedule}>
					<Typography variant="h6" className={classes.dataTitle}>
						Lịch {user.role === 'teacher' ? 'dạy' : 'học'} hôm nay
					</Typography>

					{subjectTime?.map((subject) => {
						return (
							<Box className={classes.class}>
								<img
									src={onlineClassThumb}
									alt="thumb"
									className={classes.onlineClassThumb}
								/>
								<Box className={classes.classInfo}>
									<Typography variant="subtitle" className={classes.classTitle}>
										Môn: {subject?.lesson}
									</Typography>
									<Box className={classes.rowClass}>
										<StopIcon
											style={{
												color: '#3254ac',
												marginRight: 10,
											}}
										/>
										Lớp học trực tuyến
									</Box>
									<Box className={classes.rowClass}>
										<ScheduleIcon
											style={{
												marginRight: 10,
												marginLeft: 3,
												fontSize: 18,
											}}
										/>
										{subject.time.time}
									</Box>
								</Box>
							</Box>
						)
					})}
				</Box>
			</>
		</>
	)
}

export default OverviewUser
