import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TableCell,
	Typography,
} from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import { emptyClass } from 'components/Dashboard/Common/Class/classSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './styles'
import { useSnackbar } from 'notistack'

const Lesson = ({ row, index, cell, prevIndex }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { enqueueSnackbar } = useSnackbar()

	const subjects = useSelector((state) => state.subjects.subjects)
	const classFromStore = useSelector((state) => state.classes.class)
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

	const [asd, setAsd] = useState([])
	const [subject, setSubject] = useState('')
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

		theseTeachers?.forEach((teacher) => {
			console.log(teacher.timetable[prevIndex].content[index].subjectId)
		})

		console.log(timetableTeachers)

		setAsd(timetableTeachers)

		// console.log(theseTeachers)
		// console.log(timetableTeachers)
		// if (!Boolean(timetableTeachers?.content[index]?.subjectId)) {
		//
		// }
		// console.log(timetableTeachers)
	}

	const [teacher, setTeacher] = useState([])
	const handleChangeTeacher = (e) => {
		setTeacher(e.target.value)
	}

	let newRow = {
		time: row?.session,
		content: [
			{
				day: 'Monday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Tuesday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Wednesday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Thursday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Friday',
				subjectId: '',
				teacherId: '',
			},
		],
	}

	const [lesson, setLesson] = useState({
		subject: '',
		teacher: '',
	})

	const handleConfirm = () => {
		if (subject === '' || teacher === '') {
			return
		}
		console.log('Default value: ', row)
		console.log(`             : `, row.content[index])
		console.log('SubjectId: ', subject)
		console.log('TeacherId: ', teacher)
		console.log('ClassId: ', classFromStore?._id)
		// setLesson({ ...lesson, subject: subject, teacher: teacher })

		// newRow.content[index] = {
		// 	...newRow.content[index],
		// 	subjectId: subject,
		// 	teacherId: teacher,
		// }

		// Create new timetable of class
		// const thisTime = teacherFromStore?.timetable?.find((time) => {
		// 	return time.time === '07:30 - 08:05'
		// })
		// const x = thisTime.content.find((a) => {
		// 	return a.day === 'Monday'
		// })
		// const newSubject = { ...x, subjectId: '61497e9d9951167afbbfe5c8' }
		// const a = thisTime.content.filter((x) => {
		// 	return x.day !== newSubject.day
		// })
		// const b = [...a, newSubject]
		// const c = { ...thisTime, content: b }
		// const d = teacherFromStore.timetable.filter((x) => {
		// 	return x.time !== c.time
		// })
		// const e = [c, ...d]
		// console.table("New timetable's class: ", e)
		// const timetableClass = classFromStore?.timetable.find((x) => {
		// 	return x.time === row.time
		// })
		// console.log([
		// 	"Current timetable's class: ",
		// 	timetableClass,
		// 	timetableClass.content[index],
		// ])

		// console.log(['Subject and time: ', row, row.content[index]])
		// console.log(asd)
	}

	useEffect(() => {
		const action = emptyClass()
		dispatch(action)
	}, [dispatch])

	return (
		<>
			<TableCell
				onClick={() => {
					if (classFromStore) {
						handleOpen()
					} else {
						enqueueSnackbar('Chọn lớp đề sắp xếp thời khóa biểu', {
							variant: 'error',
							autoHideDuration: 3000,
						})
						return
					}
				}}
				className={classes.tableCell}
				align="center"
			>
				<div>{lesson.subject}</div>
				<div className={classes.titleSmall}>{lesson.teacher}</div>
			</TableCell>
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
								defaultValue=""
							>
								{asd?.map((teacher) => {
									return <MenuItem value={teacher._id}>{teacher.name}</MenuItem>
								})}
							</Select>
						</FormControl>
						<Button variant="contained" onClick={handleConfirm}>
							Xác nhận
						</Button>
					</div>
				</Fade>
			</Modal>
		</>
	)
}

export default Lesson
