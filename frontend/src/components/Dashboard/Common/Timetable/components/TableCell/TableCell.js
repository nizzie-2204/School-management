import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import {
	Button,
	TableCell,
	Popover,
	Typography,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { setTimeTable } from '../../timetableSlice'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import { emptyClass } from 'components/Dashboard/Common/Class/classSlice'
import { setTeacher } from 'components/Dashboard/Common/TeacherAccount/teacherAccountSlice'

const Lession = ({ row, index, cell }) => {
	const classes = useStyles()
	const dispatch = useDispatch()

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

		const a = teachersOfThisClass.filter((teacher) => {
			return teacher.teacherType.subjects.includes(e.target.value)
		})
		console.log(a)

		setAsd(a)
	}

	const [teacher, setTeacher] = useState([])
	const handleChangeTeacher = (e) => {
		setTeacher(e.target.value)

		// const selectedTeacher = teachersFromStore.find((teacher) => {
		// 	return teacher._id === e.target.value
		// })

		// console.log(selectedTeacher)
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

		setLesson({ ...lesson, subject: subject, teacher: teacher })

		newRow.content[index] = {
			...newRow.content[index],
			subjectId: subject,
			teacherId: teacher,
		}

		console.log(subject)
		console.log(teacherFromStore.teacherType.subjects.includes(subject))
		// const action = setTimeTable({ newRow, index })
		// dispatch(action)

		// handleClose()
	}

	useEffect(() => {
		const action = emptyClass()
		dispatch(action)
	}, [])

	return (
		<>
			<TableCell
				onClick={() => {
					if (classFromStore) {
						handleOpen()
					} else {
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
									return <MenuItem value={subject._id}>{subject.name}</MenuItem>
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

export default Lession
