import React, { useState } from 'react'
import useStyles from './styles'
import { Button, TableCell, Popover } from '@material-ui/core'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { setTimeTable } from '../../timetableSlice'
const options = [
	{ value: 'a', label: 'Toán' },
	{ value: 'b', label: 'Tiếng Việt' },
	{ value: 'c', label: 'Âm Nhạc' },
]

const options2 = [
	{ value: '1', label: 'A' },
	{ value: '2', label: 'B' },
	{ value: '3', label: 'C' },
]

const Modal = ({ row, index, cell }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const timetable = useSelector((state) => state.timetable)

	// React select
	const [selectedOption, setselectedOption] = useState(null)

	const handleChange = (selectedOption) => {
		setselectedOption(selectedOption)
	}

	const [selectedOption2, setselectedOption2] = useState(null)

	const handleChange2 = (selectedOption2) => {
		setselectedOption2(selectedOption2)
	}

	const [anchorEl, setAnchorEl] = useState(null)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined
	let newRow = {
		time: row.session,
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

	const [subject, setSubject] = useState(null)
	const [teacher, setTeacher] = useState(null)

	const handleConfirm = () => {
		setAnchorEl(null)

		setSubject(selectedOption)
		setTeacher(selectedOption2)

		newRow.content[index] = {
			...newRow.content[index],
			subjectId: selectedOption.value,
			teacherId: selectedOption2.value,
		}
		const action = setTimeTable({ newRow, index })
		dispatch(action)
	}
	return (
		<>
			<TableCell
				onClick={handleClick}
				className={classes.tableCell}
				align="center"
			>
				<div>{subject?.label}</div>
				<div className={classes.titleSmall}>{teacher?.label}</div>
			</TableCell>
			<Popover
				className={classes.popup}
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<Select
					value={selectedOption}
					onChange={handleChange}
					className={classes.selectOption}
					options={options}
					placeholder="Môn"
				/>
				<Select
					value={selectedOption2}
					onChange={handleChange2}
					className={classes.selectOption}
					options={options2}
					placeholder="Giáo viên"
				/>
				<Button variant="contained" onClick={handleConfirm}>
					Xác nhận
				</Button>
			</Popover>
		</>
	)
}

export default Modal
