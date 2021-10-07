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

	const [displaySubject, setDisplaySubject] = useState(null)
	const [displayTeacher, setDisplayTeacher] = useState(null)

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
		console.log(timetableTeachers)
		setAsd(timetableTeachers)
	}

	const [teacher, setTeacher] = useState([])
	const handleChangeTeacher = (e) => {
		setTeacher(e.target.value)
	}

	const handleConfirm = () => {
		if (subject === '' || teacher === '') {
			return
		}
	}

	useEffect(() => {
		const action = emptyClass()
		dispatch(action)
	}, [])

	useEffect(() => {
		if (cell) {
			setSubject(cell?.subjectId)
			setTeacher(cell?.teacherId)

			setDisplayTeacher(() => {
				return teachersFromStore.find((teacher) => {
					return teacher._id === cell?.teacherId
				})
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
			setAsd(timetableTeachers)
		}
	}, [classFromStore])

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
				<div>{displaySubject?.name}</div>
				<div className={classes.titleSmall}>{displayTeacher?.name}</div>
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
