import {
	Button,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	TextField,
	Typography,
	FormLabel,
	FormGroup,
	Checkbox,
} from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { unwrapResult } from '@reduxjs/toolkit'
import { withStyles } from '@material-ui/styles'
import { getTypeTeachers } from '../typeTeacherSlice'
const schema = yup.object().shape({
	name: yup.string().required(),
})

const GreenRadio = withStyles({
	root: {
		color: '#dcdbdb',
		'&$checked': {
			color: '#3254ac',
		},
	},
	checked: {},
})((props) => <Radio color="default" {...props} />)

const CustomCheckbox = withStyles({
	root: {
		color: '#dcdbdb',
		'&$checked': {
			color: '#3254ac',
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />)

const AddEditTypeTeacher = ({ open, handleClose, typeTeacher }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const subjects = useSelector((state) => state.subjects.subjects)

	const { enqueueSnackbar, closeSnackbar } = useSnackbar()
	const { register, handleSubmit, reset, control } = useForm({
		resolver: yupResolver(schema),
	})
	const [error, setError] = useState(null)

	const handleAddTypeTeacher = (data) => {
		console.log('Add: ', data)
		console.log('Add: asdasd')
		alert(JSON.stringify(data))
		// const action = addSubject(data)
		// dispatch(action)
		// 	.then(unwrapResult)
		// 	.then(() => {
		// 		handleClose()
		// 		enqueueSnackbar('Thêm mới thành công', {
		// 			variant: 'success',
		// 			autoHideDuration: 3000,
		// 		})
		// 		reset()
		// 	})
		// 	.catch((error) => {
		// 		if (error.data.message === 'name have to be unique') {
		// 			setError('Tên môn học đã tồn tại')
		// 		}
		// 	})
	}

	const handleUpdateSubject = (data) => {
		// const newDate = { ...typeTeacher, name: data.name, desc: data.desc }
		// const action = updateSubject(newDate)
		// dispatch(action)
		// 	.then(unwrapResult)
		// 	.then(() => {
		// 		handleClose()
		// 		enqueueSnackbar('Chỉnh sửa thành công', {
		// 			variant: 'success',
		// 			autoHideDuration: 3000,
		// 		})
		// 		reset()
		// 	})
		// 	.catch((error) => {
		// 		if (error.data.message === 'name have to be unique') {
		// 			setError('Tên môn học đã tồn tại')
		// 		}
		// 	})
	}

	const [value, setValue] = useState()
	const handleChange = (event) => {
		setValue(event.target.value)
	}

	useEffect(() => {
		// Reset defaultValue input when editing
		if (typeTeacher) {
			reset({ name: typeTeacher.name })
		}
	}, [typeTeacher])

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
					onSubmit={
						handleSubmit(handleAddTypeTeacher)

						// typeTeacher

						// 	?
						// 	 handleSubmit(handleUpdateSubject)
						// 	:
						//
					}
				>
					<Typography className={classes.formTitle} variant="h5">
						{typeTeacher ? 'Chỉnh sửa loại giáo viên' : 'Thêm loại giáo viên'}
					</Typography>
					{error && <p className={classes.error}>{error}</p>}
					<div className={classes.inputGroup}>
						<TextField
							className={classes.root}
							label="Tên"
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
							{...register('nameType')}
							// defaultValue={subject?.name}
						/>
						<FormControl component="fieldset" className={classes.radioGroup}>
							<Typography variant="body2">Loại</Typography>
							<Controller
								rules={{ required: true }}
								control={control}
								defaultValue="false"
								name="isClassHeadTeacher"
								render={({ field }) => {
									const { name, onBlur, onChange, value } = field
									return (
										<RadioGroup
											row
											value={value}
											onBlur={onBlur}
											onChange={(e) => {
												onChange(e)
											}}
										>
											<FormControlLabel
												value="false"
												control={<GreenRadio />}
												label="Bộ môn"
												onChange={handleChange}
											/>
											<FormControlLabel
												value="true"
												control={<GreenRadio />}
												label="Chủ nhiệm"
												onChange={handleChange}
											/>
										</RadioGroup>
									)
								}}
							/>
						</FormControl>
					</div>

					<div className={classes.inputGroup}>
						<FormControl component="fieldset">
							<Typography variant="body2">Môn học sẽ dạy</Typography>
							<FormGroup aria-label="position" row>
								{subjects.map((subject) => {
									return (
										<FormControlLabel
											value={subject._id}
											control={<CustomCheckbox />}
											label={subject.name}
											labelPlacement="end"
											{...register('subjects')}
										/>
									)
								})}
							</FormGroup>
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

export default AddEditTypeTeacher
