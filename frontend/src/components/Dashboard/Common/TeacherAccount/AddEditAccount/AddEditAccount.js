import { yupResolver } from '@hookform/resolvers/yup'
import {
	Button,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
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
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { addTeacher, updateTeacher } from '../teacherAccountSlice'
import useStyles from './styles'

const schema = yup.object().shape({
	name: yup.string().required(),
	address: yup.string().required(),
	dateOfBirth: yup.string().required(),
	gender: yup.string().required(),
	email: yup.string().required(),
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

const AddEditAccount = ({ open, handleClose, thisTeacher }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const typeTeachers = useSelector((state) => state.typeTeacher.typeTeachers)
	const { enqueueSnackbar, closeSnackbar } = useSnackbar()
	const { register, handleSubmit, reset, control } = useForm({
		resolver: yupResolver(schema),
	})
	const [error, setError] = useState(null)

	const [value, setValue] = useState(null)
	const handleChange = (event) => {
		setValue(event.target.value)
	}
	const [phoneInput, setPhoneInput] = useState(null)

	const handleAddAccount = (data) => {
		if (phoneInput?.length !== 11 || !phoneInput) {
			setError('Số điện thoại có dạng: +84 123 123 123')
		} else {
			setError(null)
			const newData = {
				...data,
				phone: `0${phoneInput?.slice(2)}`,
			}
			const action = addTeacher(newData)
			dispatch(action)
				.then(unwrapResult)
				.then((res) => {
					console.log(res)
					handleClose()
					enqueueSnackbar(
						`Tài khoản: ${res?.data.username} mật khẩu: ${res?.data.password}`,
						{
							variant: 'success',
						}
					)
					reset()
					setPhoneInput(null)
				})
				.catch((error) => {
					if (error?.data?.message === 'email have to be unique') {
						setError('Email đã tồn tại')
					}
				})
		}
	}

	const handleUpdateAccount = (data) => {
		const newData = { ...data, _id: thisTeacher._id }
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
				setPhoneInput(null)
			})
			.catch((error) => {
				if (error?.data?.message === 'email have to be unique') {
					setError('Email đã tồn tại')
				}
			})
	}

	useEffect(() => {
		// Reset defaultValue input when editing
		if (thisTeacher) {
			reset({
				name: thisTeacher.name,
				address: thisTeacher.address,
				dateOfBirth: `${thisTeacher.dateOfBirth.slice(0, 10)}`,
				gender: thisTeacher.gender,
				email: thisTeacher.email,
				teacherType: thisTeacher?.teacherType?._id,
			})
			setPhoneInput(`84 ${thisTeacher.phone}`)
		}
	}, [thisTeacher])

	return (
		<Modal
			className={classes.modal}
			open={open}
			onClose={() => {
				handleClose()
				setPhoneInput(null)
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
						thisTeacher
							? handleSubmit(handleUpdateAccount)
							: handleSubmit(handleAddAccount)
					}
				>
					<Typography className={classes.formTitle} variant="h5">
						{thisTeacher ? 'Chỉnh sửa tài khoản' : 'Thêm tài khoản'}
					</Typography>
					{error && <p className={classes.error}>{error}</p>}
					<div className={classes.inputGroup}>
						<TextField
							className={classes.root}
							label="Họ tên"
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
							defaultValue={thisTeacher?.name}
							{...register('name')}
							required
						/>
						<FormControl component="fieldset" className={classes.radioGroup}>
							<Typography variant="label">Giới tính</Typography>
							<Controller
								rules={{ required: true }}
								control={control}
								defaultValue={thisTeacher?.gender || 'Male'}
								{...register('gender')}
								required
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
												value="Male"
												control={<GreenRadio />}
												label="Nam"
												onChange={handleChange}
											/>
											<FormControlLabel
												value="Female"
												control={<GreenRadio />}
												label="Nữ"
												onChange={handleChange}
											/>
										</RadioGroup>
									)
								}}
							/>
						</FormControl>
					</div>

					<div className={classes.inputGroup}>
						<TextField
							label="Ngày sinh"
							type="date"
							className={classes.root}
							variant="outlined"
							placeholder=""
							InputLabelProps={{
								shrink: true,
								classes: {
									root: classes.cssLabel,
								},
							}}
							InputProps={{
								classes: {
									input: classes.resize,
								},
							}}
							{...register('dateOfBirth')}
							required
							defaultValue={`${thisTeacher?.dateOfBirth?.slice(0, 10)}`}
						/>
						<TextField
							className={classes.root}
							label="Địa chỉ"
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
							defaultValue={thisTeacher?.address}
							{...register('address')}
							required
						/>
					</div>

					<div className={classes.inputGroup}>
						<TextField
							className={classes.root}
							label="Email"
							type="email"
							variant="outlined"
							InputLabelProps={{
								style: { color: '#000' },
							}}
							InputProps={{
								classes: {
									input: classes.resize,
								},
							}}
							defaultValue={thisTeacher?.email}
							{...register('email')}
							required
						/>
						<PhoneInput
							country="vn"
							onlyCountries={['vn']}
							value={phoneInput}
							onChange={(phoneInput) => setPhoneInput(phoneInput)}
							containerStyle={{
								width: '48%',
							}}
							containerClass={classes.borderClass}
							inputProps={{
								required: true,
							}}
							enableSearch={true}
							inputStyle={{
								border: '1px solid #dcdbdb',
							}}
							specialLabel="Số điện thoại *"
						/>
					</div>

					<div className={classes.inputGroup}>
						<FormControl variant="outlined" className={classes.select}>
							<InputLabel
								id="demo-simple-select-outlined-label"
								style={{ color: '#000' }}
							>
								Loại giáo viên
							</InputLabel>
							<Controller
								rules={{ required: true }}
								control={control}
								{...register('teacherType')}
								defaultValue={thisTeacher?.teacherType?._id}
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
											{typeTeachers?.map((type) => {
												return (
													<MenuItem key={type._id} value={type._id}>
														{type.nameType}
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

export default AddEditAccount
