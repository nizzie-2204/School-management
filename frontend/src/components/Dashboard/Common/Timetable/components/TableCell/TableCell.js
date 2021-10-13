import {
	Backdrop,
	Box,
	Button,
	Fade,
	FormControl,
	InputLabel,
	MenuItem,
	Modal,
	Popover,
	Select,
	TableCell,
	Typography,
} from '@material-ui/core'
import BookIcon from '@material-ui/icons/Book'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import ScheduleIcon from '@material-ui/icons/Schedule'
import {
	emptyClass,
	updateStudentClass,
} from 'components/Dashboard/Common/Class/classSlice'
import { updateClassTeacher } from 'components/Dashboard/Common/TeacherAccount/teacherAccountSlice'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './styles'

const Lesson = ({ row, index, cell, prevIndex }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { enqueueSnackbar } = useSnackbar()

	const user = useSelector((state) => state.auth.user)
	const subjects = useSelector((state) => state.subjects.subjects)
	const classFromStore = useSelector((state) => state.classes.class)
	const classesFromStore = useSelector((state) => state.classes.classes)

	const teacherFromStore = useSelector((state) => state.teacher.teacher)
	const teachersFromStore = useSelector((state) => state.teacher.teachers)

	// Get all teachers of this class
	const teachersOfThisClass = teachersFromStore.filter((teacher) => {
		return !teacher.teacherType.isClassHeadTeacher
	})
	if (teacherFromStore) {
		teachersOfThisClass?.push(teacherFromStore)
	}

	// Open modal
	const [open, setOpen] = useState(false)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	// Popover
	const [anchorEl, setAnchorEl] = useState(null)

	const handleClick = (event) => {
		if (cell.subjectId || cell.teacherId) {
			setAnchorEl(event.currentTarget)
		} else return
	}

	const handleClose2 = () => {
		setAnchorEl(null)
	}

	const open2 = Boolean(anchorEl)
	const id = open2 ? 'simple-popover' : undefined

	const [asd, setAsd] = useState([])
	const [subject, setSubject] = useState('')

	const [displaySubject, setDisplaySubject] = useState(null)
	const [displayTeacher, setDisplayTeacher] = useState(null)
	const [displayClass, setDisplayClass] = useState(null)

	const handleChangeSubject = (e) => {
		setSubject(e.target.value)

		// Filtering these teachers teach this subject
		const theseTeachers = teachersOfThisClass.filter((teacher) => {
			return teacher.teacherType.subjects.includes(e.target.value)
		})

		// Check if these teachers teach this class or not
		const timetableTeachers = theseTeachers?.filter((teacher) => {
			return !teacher.timetable[prevIndex].content[index].subjectId
		})

		if (teacher) {
			const oldTeacher = theseTeachers.find((x) => {
				return x._id === teacher
			})
			timetableTeachers.push(oldTeacher)
		}

		setAsd(timetableTeachers)
	}

	const [teacher, setTeacher] = useState([])
	const handleChangeTeacher = (e) => {
		setTeacher(e.target.value)
	}

	const handleConfirm = () => {
		// 1. Not selected subject and teacher yet
		if (!subject || !teacher) {
			console.log('Not selected  and teacher yet')
			handleClose()
		}
		// 2. Not changed subject and teacher yet
		else if (
			subject === displaySubject?._id &&
			teacher === displayTeacher?._id
		) {
			console.log('Not changed subject and teacher yet')
			handleClose()
		}
		// 3. Changed subject and teacher
		else if (
			subject !== displaySubject?._id &&
			teacher !== displayTeacher?._id
		) {
			// Update class timetable
			const classData = {
				classId: classFromStore?._id,
				time: row?._id,
				subjectId: subject,
				teacherId: teacher,
				day: cell?._id,
			}
			const action = updateStudentClass(classData)
			dispatch(action)

			// Update new teacher timetable
			const newTeacher = teachersFromStore.find((x) => {
				return x._id === teacher
			})
			const newTeacherData = {
				teacherId: teacher,
				subjectId: subject,
				classId: classFromStore?._id,
				time: newTeacher?.timetable[prevIndex]._id,
				day: newTeacher?.timetable[prevIndex].content[index]._id,
			}
			const action2 = updateClassTeacher(newTeacherData)
			dispatch(action2)
				.unwrap()
				.then((res) => console.log(res))
				.catch((error) => console.log(error))

			// Update old teacher timetable
			if (displayTeacher?._id) {
				const oldTeacherData = {
					teacherId: displayTeacher?._id,
					subjectId: '',
					classId: '',
					time: displayTeacher?.timetable[prevIndex]._id,
					day: displayTeacher?.timetable[prevIndex].content[index]._id,
				}
				const action3 = updateClassTeacher(oldTeacherData)
				dispatch(action3)
					.unwrap()
					.then((res) => console.log(res))
					.catch((error) => console.log(error))
			}

			enqueueSnackbar(`Chỉnh sửa thành công`, {
				variant: 'success',
			})
			setSubject()
			setTeacher()
			handleClose()
		}
		// 4. Changed subject and not changed teacher yet
		else if (
			subject !== displaySubject?._id &&
			teacher === displayTeacher?._id
		) {
			// Update class timetable
			const classData = {
				classId: classFromStore?._id,
				time: row?._id,
				subjectId: subject,
				teacherId: displayTeacher?._id,
				day: cell?._id,
			}
			const action = updateStudentClass(classData)
			dispatch(action)

			// Update current teacher timetable
			const currTeacherData = {
				teacherId: displayTeacher?._id,
				subjectId: subject,
				classId: classFromStore?._id,
				time: displayTeacher.timetable[prevIndex]._id,
				day: displayTeacher.timetable[prevIndex].content[index]._id,
			}
			const action2 = updateClassTeacher(currTeacherData)
			dispatch(action2)

			enqueueSnackbar(`Chỉnh sửa thành công`, {
				variant: 'success',
			})
			setSubject()
			setTeacher()
			handleClose()
		}
		// 5. Changed teacher and not changed subject yet
		else {
			// Update class timetable
			const classData = {
				classId: classFromStore?._id,
				time: row?._id,
				subjectId: displaySubject?._id,
				teacherId: teacher,
				day: cell?._id,
			}
			const action = updateStudentClass(classData)
			dispatch(action)
				.unwrap()
				.then((res) => console.log(res))
				.catch((error) => console.log(error))

			// Update new teacher timetable
			const newTeacher = teachersFromStore.find((x) => {
				return x._id === teacher
			})
			const newTeacherData = {
				teacherId: teacher,
				subjectId: displaySubject?._id,
				classId: classFromStore?._id,
				time: newTeacher?.timetable[prevIndex]._id,
				day: newTeacher?.timetable[prevIndex].content[index]._id,
			}
			const action2 = updateClassTeacher(newTeacherData)
			dispatch(action2)
				.unwrap()
				.then((res) => console.log(res))
				.catch((error) => console.log(error))

			// Update old teacher timetable
			const oldTeacherData = {
				teacherId: displayTeacher?._id,
				subjectId: '',
				classId: '',
				time: displayTeacher?.timetable[prevIndex]._id,
				day: displayTeacher?.timetable[prevIndex].content[index]._id,
			}
			const action3 = updateClassTeacher(oldTeacherData)
			dispatch(action3)
				.unwrap()
				.then((res) => console.log(res))
				.catch((error) => console.log(error))
			enqueueSnackbar(`Chỉnh sửa thành công`, {
				variant: 'success',
			})
			setSubject()
			setTeacher()
			handleClose()
		}
	}

	useEffect(() => {
		const action = emptyClass()
		dispatch(action)
	}, [dispatch])

	useEffect(() => {
		if (cell) {
			setDisplayClass(() => {
				return classesFromStore.find((thisClass) => {
					return thisClass._id === cell?.classId
				})
			})
			setSubject(cell?.subjectId)
			setTeacher(cell?.teacherId)

			setDisplayTeacher(() => {
				return teachersFromStore.find((teacher) => {
					return teacher._id === cell?.teacherId
				})
			})
			const asdz = teachersFromStore.find((teacher) => {
				return teacher._id === cell?.teacherId
			})

			setDisplaySubject(() => {
				return subjects.find((subject) => {
					return subject._id === cell?.subjectId
				})
			})

			const theseTeachers = teachersOfThisClass.filter((teacher) => {
				return teacher.teacherType.subjects.includes(cell?.subjectId)
			})

			// Check if these teachers teach this class or not
			const timetableTeachers = theseTeachers?.filter((teacher) => {
				return !teacher.timetable[prevIndex].content[index].subjectId
			})

			if (cell.teacherId) {
				const x = teachersFromStore.find((teacher) => {
					return teacher._id === cell?.teacherId
				})
				timetableTeachers.push(x)
			}

			setAsd(timetableTeachers)
		}
	}, [classFromStore])

	return (
		<>
			<TableCell
				{...(!user.role !== 'admin' && { onClick: handleClick })}
				{...(user.role === 'admin' &&
					classFromStore && {
						onClick: handleOpen,
					})}
				{...(user.role === 'admin' &&
					!classFromStore && {
						onClick: () => {
							enqueueSnackbar(`Chưa chọn lớp`, {
								variant: 'error',
								autoHideDuration: 3000,
							})
						},
					})}
				className={classes.tableCell}
				align="center"
			>
				<div>{displaySubject?.name}</div>
				<div className={classes.titleSmall}>{displayTeacher?.name}</div>
				<div className={classes.titleSmall}>{displayClass?.name}</div>
			</TableCell>
			{user.role === 'admin' ? (
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className={classes.modal}
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 100,
					}}
				>
					<Fade in={open}>
						<div className={classes.paper}>
							<Typography className={classes.formTitle} variant="h5">
								Chọn môn học và giáo viên
							</Typography>
							<FormControl variant="outlined" className={classes.selectOption}>
								<InputLabel
									id="demo-simple-select-outlined-label"
									style={{ color: '#000' }}
								>
									Môn học
								</InputLabel>
								<Select
									labelId="demo-simple-select-outlined-label"
									id="demo-simple-select-outlined"
									value={subject}
									onChange={handleChangeSubject}
									label="Lớp"
								>
									{subjects?.map((subject) => {
										return (
											<MenuItem key={subject._id} value={subject._id}>
												{subject.name}
											</MenuItem>
										)
									})}
								</Select>
							</FormControl>
							<FormControl variant="outlined" className={classes.selectOption}>
								<InputLabel
									id="demo-simple-select-outlined-label"
									style={{ color: '#000' }}
								>
									Giáo viên
								</InputLabel>
								<Select
									labelId="demo-simple-select-outlined-label"
									id="demo-simple-select-outlined"
									value={teacher}
									onChange={handleChangeTeacher}
									label="Lớp"
								>
									{asd?.map((teacher) => {
										return (
											<MenuItem value={teacher._id}>{teacher.name}</MenuItem>
										)
									})}
								</Select>
							</FormControl>
							<Button
								variant="contained"
								onClick={handleConfirm}
								className={classes.submit}
							>
								Xác nhận
							</Button>
						</div>
					</Fade>
				</Modal>
			) : (
				<Popover
					className={classes.popoverClass}
					id={id}
					open={open2}
					anchorEl={anchorEl}
					onClose={handleClose2}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
				>
					<Box className={classes.infoClass}>
						<Box
							className={classes.row}
							style={{ textTransform: 'uppercase', fontWeight: 600 }}
						>
							<BookIcon className={classes.rowIcon} />
							{displaySubject?.name}
						</Box>
						<Box className={classes.row}>
							<PermIdentityIcon className={classes.rowIcon} />
							{user.name}
						</Box>
						<Box className={classes.row}>
							<LocalOfferIcon className={classes.rowIcon} />
							{displayClass?.name}
						</Box>
						<Box className={classes.row}>
							<ScheduleIcon
								className={classes.rowIcon}
								style={{ color: '#000' }}
							/>
							{row.time}
						</Box>
						<Button variant="contained" className={classes.button}>
							Chưa diễn ra
						</Button>
					</Box>
				</Popover>
			)}
		</>
	)
}

export default Lesson
