import { Box, Typography } from '@material-ui/core'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import CakeIcon from '@material-ui/icons/Cake'
import CallIcon from '@material-ui/icons/Call'
import ClassIcon from '@material-ui/icons/Class'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import ScheduleIcon from '@material-ui/icons/Schedule'
import StopIcon from '@material-ui/icons/Stop'
import banner from 'assets/images/14f1ec4bed.jpg'
import onlineClassThumb from 'assets/images/online-class.jpg'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import formatDate from 'utils/formatDate'
import { getSubjects } from '../../Subject/subjectSlice'
import useStyles from './styles'

const OverviewUser = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const user = useSelector((state) => state.auth.user)
	const subjects = useSelector((state) => state.subjects.subjects)

	let timetableTeacher
	if (user?.timetable) {
		timetableTeacher = user.timetable
	}

	let timetableStudent
	if (user?.classId?.timetable) {
		timetableStudent = user?.classId.timetable
	}

	// Get subject and time on this day
	const subjectTime = []
	;(timetableStudent || timetableTeacher)?.forEach((time) => {
		time.content.forEach((lesson) => {
			const subject = subjects.find((x) => {
				return x._id === lesson.subjectId
			})

			if (subject && lesson.day.includes(new Date().toString().slice(0, 2))) {
				console.log('Time: ', time?.time)
				console.log('Subject: ', subject?.names)
				subjectTime.push({
					time: time?.time,
					lesson: subject?.name,
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
								<p>Họ và tên: {user?.name}</p>
							</Box>
							<Box className={classes.row}>
								<CakeIcon className={classes.infoIcon} />
								<p>Ngày sinh: {formatDate(user?.dateOfBirth).slice(5)}</p>
							</Box>
							<Box className={classes.row}>
								<PermIdentityIcon className={classes.infoIcon} />
								<p> Tài khoản: {user?.username}</p>
							</Box>
							{user?.role === 'student' && (
								<Box className={classes.row}>
									<ClassIcon className={classes?.infoIcon} />
									<p>Lớp {user?.classId.name}</p>
								</Box>
							)}
							{user?.role === 'teacher' && (
								<Box className={classes.row}>
									<CallIcon className={classes.infoIcon} />
									<p>Số điện thoại cá nhân: {user?.phone}</p>
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
						Lịch {user?.role === 'teacher' ? 'dạy' : 'học'} hôm nay
					</Typography>

					<Box className={classes.classContainer}>
						{subjectTime.length > 0 &&
							subjectTime.map((subject) => {
								return (
									<Box className={classes.class}>
										<img
											src={onlineClassThumb}
											alt="thumb"
											className={classes.onlineClassThumb}
										/>
										<Box className={classes.classInfo}>
											<Typography
												variant="subtitle1"
												className={classes.classTitle}
											>
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
												{subject.time}
											</Box>
										</Box>
									</Box>
								)
							})}
					</Box>
				</Box>
			</>
		</>
	)
}

export default OverviewUser
