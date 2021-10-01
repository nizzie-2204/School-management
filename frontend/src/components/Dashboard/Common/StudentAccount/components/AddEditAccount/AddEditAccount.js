import {
	Button,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Modal from '@material-ui/core/Modal'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import PhoneInput from 'react-phone-input-2'

import { withStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import useStyles from './styles'
import { useSnackbar } from 'notistack'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import da from 'date-fns/esm/locale/da/index.js'

const GreenRadio = withStyles({
	root: {
		color: '#dcdbdb',
		'&$checked': {
			color: '#3254ac',
		},
	},
	checked: {},
})((props) => <Radio color="default" {...props} />)

const schema = yup.object().shape({
	name: yup.string().required(),
	address: yup.string().required(),
	dateOfBirth: yup.string().required(),
	gender: yup.string().required(),
	classId: yup.string().required(),

	dadName: yup.string().required(),
	dadAddress: yup.string().required(),
	dadDateOfBirth: yup.string().required(),
	dadEmail: yup.string().required(),

	momName: yup.string().required(),
	momAddress: yup.string().required(),
	momDateOfBirth: yup.string().required(),
	momEmail: yup.string().required(),
})

const AddEditAccount = ({ open, handleClose, student }) => {
	const classes = useStyles()
	const { enqueueSnackbar, closeSnackbar } = useSnackbar()
	const { register, handleSubmit, reset, control } = useForm({
		resolver: yupResolver(schema),
	})
	const [value, setValue] = useState()
	const handleChange = (e) => {
		setValue(e.target.value)
	}

	const [phoneInput, setPhoneInput] = useState(null)
	const [phoneInput2, setPhoneInput2] = useState(null)
	const [phoneInput3, setPhoneInput3] = useState(null)

	const handleAddAccount = (data) => {
		const newData = {
			name: data.name,
			gender: data.gender,
			address: data.address,
			dateOfBirth: data.dateOfBirth,
			classId: data.classId,
			parent: {
				father: {
					name: data.dadName,
					email: data.dadEmail,
					phone: phoneInput2,
					dateOfBirth: data.dadDateOfBirth,
					address: data.dadAddress,
				},
				mother: {
					name: data.momName,
					email: data.momEmail,
					phone: phoneInput3,
					dateOfBirth: data.momDateOfBirth,
					address: data.momAddress,
				},
			},
		}
		console.log(newData)
		// e.preventDefault()
		// handleClose()
		// enqueueSnackbar('Thêm tài khoản thành công', {
		// 	variant: 'success',
		// 	autoHideDuration: 3000,
		// })
	}

	const handleUpdateAccount = (data) => {
		console.log(data)
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
					style={{ maxHeight: '575px', overflowY: 'scroll' }}
					autoComplete="off"
					onSubmit={handleSubmit(handleAddAccount)}
				>
					<Typography className={classes.formTitle} variant="h5">
						Thêm tài khoản học sinh
					</Typography>

					<Typography variant="h6" className={classes.formSubtitle}>
						Học sinh
					</Typography>
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
							{...register('name')}
						/>
						<FormControl component="fieldset" className={classes.radioGroup}>
							<Typography variant="label">Giới tính</Typography>
							<Controller
								rules={{ required: true }}
								control={control}
								// defaultValue={thisTeacher?.gender || 'Male'}
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
							InputLabelProps={{
								shrink: true,
								classes: {
									root: classes.cssLabel,
									// focused: classes.cssFocused,
								},
							}}
							InputProps={{
								classes: {
									input: classes.resize,
								},
							}}
							{...register('dateOfBirth')}
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
							{...register('address')}
						/>
					</div>
					<div className={classes.inputGroup}>
						<FormControl variant="outlined" className={classes.select}>
							<InputLabel
								id="demo-simple-select-outlined-label"
								style={{ color: '#000' }}
							>
								Lớp
							</InputLabel>
							<Controller
								rules={{ required: true }}
								control={control}
								// defaultValue={thisClass?.teacherId?._id}
								{...register('classId')}
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
											{/* {teachers?.map((teacher) => {
												return (
													<MenuItem key={teacher._id} value={teacher._id}>
														{teacher.name}
													</MenuItem>
												)
											})} */}
											<MenuItem value="a">1</MenuItem>
										</Select>
									)
								}}
							/>
						</FormControl>
					</div>
					<Typography variant="h6" className={classes.formSubtitle}>
						Phụ huynh
					</Typography>
					<div className={classes.inputGroup}>
						<TextField
							className={classes.root}
							label="Họ tên cha"
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
							{...register('dadName')}
						/>
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
							{...register('dadEmail')}
						/>
					</div>

					<div className={classes.inputGroup}>
						<TextField
							label="Ngày sinh"
							type="date"
							className={classes.root}
							variant="outlined"
							InputLabelProps={{
								shrink: true,
								classes: {
									root: classes.cssLabel,
									// focused: classes.cssFocused,
								},
							}}
							InputProps={{
								classes: {
									input: classes.resize,
								},
							}}
							{...register('dadDateOfBirth')}
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
							{...register('dadAddress')}
						/>
					</div>
					<div className={classes.inputGroup}>
						<PhoneInput
							country="vn"
							onlyCountries={['vn']}
							value={phoneInput2}
							onChange={(phoneInput2) => setPhoneInput2(phoneInput2)}
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
						<TextField
							className={classes.root}
							label="Họ tên mẹ"
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
							{...register('momName')}
						/>
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
							{...register('momEmail')}
						/>
					</div>

					<div className={classes.inputGroup}>
						<TextField
							label="Ngày sinh"
							type="date"
							className={classes.root}
							variant="outlined"
							InputLabelProps={{
								shrink: true,
								classes: {
									root: classes.cssLabel,
									// focused: classes.cssFocused,
								},
							}}
							InputProps={{
								classes: {
									input: classes.resize,
								},
							}}
							{...register('momDateOfBirth')}
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
							{...register('momAddress')}
						/>
					</div>
					<div className={classes.inputGroup}>
						<PhoneInput
							country="vn"
							onlyCountries={['vn']}
							value={phoneInput3}
							onChange={(phoneInput3) => setPhoneInput(phoneInput3)}
							containerStyle={{
								width: '45%',
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
