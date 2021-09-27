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

const Lession = ({ row, index, cell }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const timetable = useSelector((state) => state.timetable)

	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const [subject, setSubject] = useState('')
	const handleChangeSubject = (event) => {
		setSubject(event.target.value)
	}

	const [teacher, setTeacher] = useState('')
	const handleChangeTeacher = (event) => {
		setTeacher(event.target.value)
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
		const action = setTimeTable({ newRow, index })
		dispatch(action)

		handleClose()
	}

	useEffect(() => {
		console.log(subject)
		console.log(teacher)
	}, [subject, teacher])
	return (
		<>
			<TableCell
				onClick={handleOpen}
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
								<MenuItem value="Toán">Toán</MenuItem>
								<MenuItem value="Tiếng Việt">Tiếng Việt</MenuItem>
								<MenuItem value="Âm Nhạc">Âm Nhạc</MenuItem>
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
								<MenuItem value="A">A</MenuItem>
								<MenuItem value="B">B</MenuItem>
								<MenuItem value="C">C</MenuItem>
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
