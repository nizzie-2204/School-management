import { yupResolver } from '@hookform/resolvers/yup'
import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import { withStyles } from '@material-ui/styles'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { addTypeTeacher, updateTypeTeacher } from '../typeTeacherSlice'
import useStyles from './styles'

const schema = yup.object().shape({
	nameType: yup.string().required(),
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
		if (!data.subjects || data.subjects.length === 0) {
			setError('Chưa chọn môn học')
			return
		} else {
			setError(null)
			const newData = {
				...data,
				isClassHeadTeacher: data.isClassHeadTeacher === 'true',
			}

			const action = addTypeTeacher(newData)
			dispatch(action)
				.then(unwrapResult)
				.then(() => {
					handleClose()
					enqueueSnackbar('Thêm mới thành công', {
						variant: 'success',
						autoHideDuration: 3000,
					})
					reset()
				})
				.catch((error) => console.log(error))
		}
	}

	const handleUpdateTypeTeacher = (data) => {
		if (!data.subjects || data.subjects.length === 0) {
			setError('Chưa chọn môn học')
			return
		} else {
			setError(null)
			const newData = {
				...data,
				_id: typeTeacher._id,
				isClassHeadTeacher: data.isClassHeadTeacher === 'true',
			}
			const action = updateTypeTeacher(newData)
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
				.catch((error) => console.log(error))
		}
	}

	const [value, setValue] = useState()
	const handleChange = (event) => {
		setValue(event.target.value)
	}

	useEffect(() => {
		// Reset defaultValue input when editing
		if (typeTeacher) {
			reset({ nameType: typeTeacher.name })
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
						typeTeacher
							? handleSubmit(handleUpdateTypeTeacher)
							: handleSubmit(handleAddTypeTeacher)
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
							defaultValue={typeTeacher?.nameType}
						/>
						<FormControl component="fieldset" className={classes.radioGroup}>
							<Typography variant="body2">Loại</Typography>
							<Controller
								rules={{ required: true }}
								control={control}
								defaultValue={
									typeTeacher?.isClassHeadTeacher.toString() || 'false'
								}
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
											control={
												<CustomCheckbox
													defaultChecked={typeTeacher?.subjects.includes(
														subject._id
													)}
												/>
											}
											{...register('subjects')}
											value={subject._id}
											label={subject.name}
											labelPlacement="end"
											// onClick={(e) => {
											// 	setcheckemail(e.target.checked);
											//   }}
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
