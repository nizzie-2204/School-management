import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { updateTeacher } from '../../TeacherAccount/teacherAccountSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import schoolYears from 'utils/schoolYear'
import { updateClass } from '../../Class/classSlice'

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
		return teacher.teacherType.isClassHeadTeacher
	})
	const { enqueueSnackbar, closeSnackbar } = useSnackbar()
	const { register, handleSubmit, reset, control } = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			teacherId: thisClass?.teacherId?._id,
		},
	})
	const [error, setError] = useState(null)

	const handleUpdateTeacher = (data) => {
		const newData = { _id: thisClass._id, teacherId: data.teacherId }
		const thisTeacher = teachers.find((teacher) => {
			return teacher._id === data.teacherId
		})
		if (thisTeacher.classId) {
			setError('Giáo viên này đã chủ nhiệm lớp khác')
		} else {
			const action = updateClass(newData)
			dispatch(action)
				.then(unwrapResult)
				.then(() => {
					const newData = { classId: thisClass._id, _id: data.teacherId }
					const action = updateTeacher(newData)
					dispatch(action)
						.then(unwrapResult)
						.then(() => {
							handleClose()
							enqueueSnackbar('Chỉnh sửa thành công', {
								variant: 'success',
								autoHideDuration: 3000,
							})
							reset()
						})
						.catch((error) => {
							if (error.data.message === 'name have to be unique') {
								setError('Tên môn học đã tồn tại')
							}
						})
				})
				.catch((error) => {
					if (error.data.message === 'name have to be unique') {
						setError('Tên môn học đã tồn tại')
					}
				})
		}
	}

	useEffect(() => {
		console.log(classHeadTeachers)
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
						Chỉnh sửa giáo viên chủ nhiệm
					</Typography>
					{error && <p className={classes.error}>{error}</p>}
					<div className={classes.inputGroup} style={{ width: '100%' }}>
						<TextField
							className={classes.root}
							label="Tên lớp"
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
								Năm học
							</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-labela"
								id="demo-simple-select-outlineda"
								defaultValue={thisClass?.schoolYear || year}
								onChange={handleChangeYear}
								label="Năm học"
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
								Khối
							</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								defaultValue={thisClass?.grade || currClass}
								onChange={handleChangeClass}
								label="Khối"
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
								Giáo viên chủ nhiệm
							</InputLabel>
							<Controller
								rules={{ required: true }}
								control={control}
								defaultValue={thisClass?.teacherId?._id}
								{...register('teacherId')}
								required
								render={({ field }) => {
									const { name, onBlur, onChange, value } = field
									return (
										<Select
											value={value}
											onBlur={onBlur}
											onChange={(e) => {
												onChange(e)
											}}
										>
											{teachers?.map((teacher) => {
												return (
													<MenuItem key={teacher._id} value={teacher._id}>
														{teacher.name}
													</MenuItem>
												)
											})}
										</Select>
									)
								}}
							/>
						</FormControl>
					</div>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Lưu
					</Button>
				</form>
			</Fade>
		</Modal>
	)
}

export default AddEditPage
