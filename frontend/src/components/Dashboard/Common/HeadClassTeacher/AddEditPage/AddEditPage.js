import { yupResolver } from '@hookform/resolvers/yup'
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	CircularProgress,
	TextField,
	Typography,
} from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import { unwrapResult } from '@reduxjs/toolkit'
import Alert from 'components/Alert/Alert'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import schoolYears from 'utils/schoolYear'
import * as yup from 'yup'
import { updateClass } from '../../Class/classSlice'
import {
	updateClassTeacher,
	updateTeacher,
} from '../../TeacherAccount/teacherAccountSlice'
import useStyles from './styles'

const schema = yup.object().shape({
	name: yup.string().required(),
	schoolYear: yup.string().required(),
	grade: yup.string().required(),
	teacherId: yup.string().required(),
})

const AddEditPage = ({ open, handleClose, thisClass }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const thisSchoolYears = schoolYears()
	const teachers = useSelector((state) => state.teacher.teachers)
	const classHeadTeachers = teachers.filter((teacher) => {
		if (thisClass && thisClass?.teacherId?._id === teacher._id) {
			return thisClass.teacherId
		} else {
			return teacher.teacherType.isClassHeadTeacher && !teacher.classId
		}
	})

	const { register, handleSubmit, reset, control } = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			teacherId: thisClass?.teacherId?._id,
		},
	})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleUpdateTeacher = (data) => {
		if (!thisClass?.teacherId?._id && data.teacherId) {
			setIsSubmitting(true)
			const newData = { _id: thisClass?._id, teacherId: data.teacherId }
			const action = updateClass(newData)
			dispatch(action)
				.then(unwrapResult)
				.then(() => {
					const newData = { classId: thisClass._id, _id: data.teacherId }
					const action = updateTeacher(newData)
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
							console.log(error)
						})
				})
				.catch((error) => {
					console.log(error)
				})
		} else if (thisClass.teacherId._id === data.teacherId) {
			handleClose()
			reset()
		} else if (thisClass.teacherId._id !== data.teacherId) {
			setIsSubmitting(true)

			// Update new teacher for this class
			const newData = { _id: thisClass?._id, teacherId: data.teacherId }
			const action = updateClass(newData)
			dispatch(action).catch((error) => console.log(error))

			// Update  class for new teacher
			const newData2 = { classId: thisClass._id, _id: data.teacherId }
			const action2 = updateTeacher(newData2)
			dispatch(action2)
				.then(unwrapResult)
				.then(() => {
					// Remove class for old teacher
					const action3 = updateClassTeacher(thisClass.teacherId._id)
					dispatch(action3).catch((error) => console.log(error))
					setIsSubmitting(false)

					Alert.fire({
						icon: 'success',
						title: 'Ch???nh s???a th??nh c??ng',
					})
				})
				.catch((error) => console.log(error))

			handleClose()
			reset()
		}
	}

	useEffect(() => {
		// Reset defaultValue input when editing
		if (thisClass) {
			reset({
				name: thisClass.name,
				schoolYear: thisClass.schoolYear,
				grade: thisClass.grade,
				teacherId: thisClass?.teacherId?._id,
			})
		}
	}, [thisClass])

	const [year, setyear] = useState(null)
	const handleChangeYear = (e) => {
		setyear(e.target.value)
	}

	const [currClass, setCurrClass] = useState(null)
	const handleChangeClass = (e) => {
		setCurrClass(e.target.value)
	}

	return (
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
				<form
					className={classes.form}
					autoComplete="off"
					onSubmit={handleSubmit(handleUpdateTeacher)}
				>
					<Typography className={classes.formTitle} variant="h5">
						Ch???nh s???a gi??o vi??n ch??? nhi???m
					</Typography>

					<div className={classes.inputGroup} style={{ width: '100%' }}>
						<TextField
							className={classes.root}
							label="T??n l???p"
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
							defaultValue={thisClass?.name}
							disabled
						/>
					</div>
					<div className={classes.inputGroup}>
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
								defaultValue={thisClass?.schoolYear || year}
								onChange={handleChangeYear}
								label="N??m h???c"
								required
								{...register('schoolYear')}
								disabled
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
								defaultValue={thisClass?.grade || currClass}
								onChange={handleChangeClass}
								label="Kh???i"
								required
								{...register('grade')}
								disabled
							>
								<MenuItem value="1">1</MenuItem>
								<MenuItem value="2">2</MenuItem>
								<MenuItem value="3">3</MenuItem>
								<MenuItem value="4">4</MenuItem>
								<MenuItem value="5">5</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className={classes.inputGroup}>
						<FormControl variant="outlined" className={classes.select}>
							<InputLabel
								id="demo-simple-select-outlined-label"
								style={{ color: '#000' }}
							>
								Gi??o vi??n ch??? nhi???m
							</InputLabel>
							<Controller
								rules={{ required: true }}
								control={control}
								defaultValue={thisClass?.teacherId}
								{...register('teacherId')}
								required
								render={({ field }) => {
									const { onBlur, onChange, value } = field
									return (
										<Select
											displayEmpty={false}
											value={value}
											onBlur={onBlur}
											onChange={(e) => {
												onChange(e)
											}}
										>
											{classHeadTeachers?.map((teacher) => {
												return (
													<MenuItem key={teacher?._id} value={teacher?._id}>
														{teacher?.name}
													</MenuItem>
												)
											})}
										</Select>
									)
								}}
							/>
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

export default AddEditPage
