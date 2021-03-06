import { yupResolver } from '@hookform/resolvers/yup'
import {
	Button,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	CircularProgress,
	Typography,
} from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import FormControl from '@material-ui/core/FormControl'
import Modal from '@material-ui/core/Modal'
import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import schoolYears from 'utils/schoolYear'
import * as yup from 'yup'
import { addClass, updateClass } from '../classSlice'
import useStyles from './styles'
import Alert from 'components/Alert/Alert'

const schema = yup.object().shape({
	name: yup.string().required(),
})

const AddEditAccount = ({ open, handleClose, currClass }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { register, handleSubmit, reset } = useForm({
		resolver: yupResolver(schema),
	})
	const thisSchoolYears = schoolYears()
	const [error, setError] = useState(null)

	const [thisClass, setThisClass] = useState(null)
	const handleChangeClass = (e) => {
		setThisClass(e.target.value)
	}

	const [year, setYear] = useState(null)
	const handleChangeYear = (e) => {
		setYear(e.target.value)
	}
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleAddClass = (data) => {
		setIsSubmitting(true)
		const newData = {
			...data,
			grade: parseInt(data.grade),
			timetable: [
				{
					time: '07:30 - 08:05',
					content: [
						{
							day: 'Monday',
						},
						{
							day: 'Tuesday',
						},
						{
							day: 'Wednesday',
						},
						{
							day: 'Thursday',
						},
						{
							day: 'Friday',
						},
					],
				},
				{
					time: '08:10 - 08:45',
					content: [
						{
							day: 'Monday',
						},
						{
							day: 'Tuesday',
						},
						{
							day: 'Wednesday',
						},
						{
							day: 'Thursday',
						},
						{
							day: 'Friday',
						},
					],
				},
				{
					time: '09:10 - 09:45',
					content: [
						{
							day: 'Monday',
						},
						{
							day: 'Tuesday',
						},
						{
							day: 'Wednesday',
						},
						{
							day: 'Thursday',
						},
						{
							day: 'Friday',
						},
					],
				},
				{
					time: '09:50 - 10:25',
					content: [
						{
							day: 'Monday',
						},
						{
							day: 'Tuesday',
						},
						{
							day: 'Wednesday',
						},
						{
							day: 'Thursday',
						},
						{
							day: 'Friday',
						},
					],
				},
			],
		}
		const action = addClass(newData)
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				setIsSubmitting(false)
				handleClose()
				Alert.fire({
					icon: 'success',
					title: 'Th??m m???i th??nh c??ng',
				})
				reset()
			})
			.catch((error) => {
				if (error.data.message === 'name have to be unique') {
					setError('T??n l???p h???c ???? t???n t???i')
				}
			})
	}

	const handleUpdateClass = (data) => {
		setIsSubmitting(true)
		const newData = { _id: currClass._id, ...data }
		const action = updateClass(newData)
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				setIsSubmitting(false)
				handleClose()
				Alert.fire({
					icon: 'success',
					title: 'Ch???nh s???a th??nh c??ng',
				})
				reset()
			})
			.catch((error) => {
				if (error?.data?.message === 'name have to be unique') {
					setError('T??n l???p h???c ???? t???n t???i')
				}
			})
	}

	useEffect(() => {
		// Reset defaultValue input when editing
		if (currClass) {
			reset({
				name: currClass.name,
				schoolYear: currClass.schoolYear,
				grade: currClass.grade,
			})
		}
	}, [currClass, reset])

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={open}
			onClose={() => {
				handleClose()
				reset()
			}}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 100,
			}}
		>
			<Fade in={open}>
				<form
					className={classes.form}
					autoComplete="off"
					onSubmit={
						currClass
							? handleSubmit(handleUpdateClass)
							: handleSubmit(handleAddClass)
					}
				>
					<Typography className={classes.formTitle} variant="h5">
						{currClass ? 'Ch???nh s???a l???p h???c' : 'Th??m l???p h???c'}
					</Typography>
					{error && <p className={classes.error}>{error}</p>}
					<div className={classes.inputGroup}>
						<TextField
							className={classes.root}
							label="T??n"
							type="text"
							variant="outlined"
							InputLabelProps={{
								style: { color: '#000' },
							}}
							InputProps={{
								classes: {
									input: classes.resize,
								},
							}}
							required
							{...register('name')}
							defaultValue={currClass?.name}
						/>
						<FormControl variant="outlined" className={classes.select}>
							<InputLabel
								id="demo-simple-select-outlined-label"
								style={{ color: '#000' }}
							>
								N??m h???c
							</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-labela"
								id="demo-simple-select-outlineda"
								defaultValue={currClass?.schoolYear || year}
								onChange={handleChangeYear}
								label="N??m h???c"
								required
								{...register('schoolYear')}
							>
								{thisSchoolYears?.map((year) => {
									return (
										<MenuItem value={year} key={year}>
											{year}
										</MenuItem>
									)
								})}
							</Select>
						</FormControl>
					</div>

					<div className={classes.inputGroup}>
						<FormControl variant="outlined" className={classes.select}>
							<InputLabel
								id="demo-simple-select-outlined-label"
								style={{ color: '#000' }}
							>
								Kh???i
							</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								defaultValue={currClass?.grade || thisClass}
								onChange={handleChangeClass}
								label="Kh???i"
								required
								{...register('grade')}
							>
								<MenuItem value="1">1</MenuItem>
								<MenuItem value="2">2</MenuItem>
								<MenuItem value="3">3</MenuItem>
								<MenuItem value="4">4</MenuItem>
								<MenuItem value="5">5</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div style={{ alignSelf: 'end' }}>
						<Button className={classes.cancel} onClick={handleClose}>
							H???y b???
						</Button>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={`${classes.submit} ${isSubmitting && classes.opacity}`}
						>
							{isSubmitting ? (
								<CircularProgress
									variant="indeterminate"
									disableShrink
									className={classes.top}
									classes={{
										circle: classes.circle,
									}}
									size={24}
									thickness={4}
								/>
							) : (
								'L??u'
							)}
						</Button>
					</div>
				</form>
			</Fade>
		</Modal>
	)
}

export default AddEditAccount
