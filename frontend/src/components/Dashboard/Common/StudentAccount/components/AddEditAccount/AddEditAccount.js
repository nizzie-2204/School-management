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
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Modal from '@material-ui/core/Modal'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { withStyles } from '@material-ui/styles'
import { unwrapResult } from '@reduxjs/toolkit'
import Alert from 'components/Alert/Alert'
import {
	getClasses,
	updateStudentClass,
} from 'components/Dashboard/Common/Class/classSlice'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { addStudent, updateStudent } from '../../studentAccountSlice'
import useStyles from './styles'

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
	console.log(student)
	const classes = useStyles()
	const dispatch = useDispatch()
	const classesFromStore = useSelector((state) => state.classes.classes)
	const { register, handleSubmit, reset, control } = useForm({
		resolver: yupResolver(schema),
	})

	const [error, setError] = useState(null)

	const [value, setValue] = useState()
	const handleChange = (e) => {
		setValue(e.target.value)
	}

	const [phoneInput2, setPhoneInput2] = useState(null)
	const [phoneInput3, setPhoneInput3] = useState(null)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleAddAccount = (data) => {
		const newData = {
			name: data.name,
			gender: data.gender,
			address: data.address,
			dateOfBirth: data.dateOfBirth,
			classId: data.classId,
			role: 'student',
			parents: {
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
		if (
			phoneInput2?.length !== 11 ||
			!phoneInput2 ||
			phoneInput3?.length !== 11 ||
			!phoneInput3
		) {
			setError('Số điện thoại có dạng: +84 123 123 123')
		} else {
			setIsSubmitting(true)
			const action = addStudent(newData)
			dispatch(action)
				.then(unwrapResult)
				.then((res) => {
					const newClassId = newData.classId
					const studentId = res.data._id

					const action = updateStudentClass({ newClassId, studentId })
					dispatch(action)
						.then(unwrapResult)
						.then(() => {
							setIsSubmitting(false)
							handleClose()
							reset()
							setPhoneInput2(null)
							setPhoneInput3(null)
							Alert.fire({
								icon: 'success',
								title: `Tài khoản: ${res?.data.username} mật khẩu: ${res?.data.password}`,
							})
						})
				})
				.catch((error) => {
					if (
						error?.data?.message === 'parents.mother.email have to be unique'
					) {
						setError('Email của mẹ đã có người sử dụng')
					}

					if (
						error?.data?.message === 'parents.father.email have to be unique'
					) {
						setError('Email của cha đã có người sử dụng')
					}
				})
		}
	}

	const handleUpdateAccount = (data) => {
		const newData = {
			_id: student._id,
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
		if (
			phoneInput2?.length !== 11 ||
			!phoneInput2 ||
			phoneInput3?.length !== 11 ||
			!phoneInput3
		) {
			setError('Số điện thoại có dạng: +84 123 123 123')
		} else if (student.classId === data.classId) {
			setIsSubmitting(true)
			const action = updateStudent(newData)
			dispatch(action)
				.then(unwrapResult)
				.then(() => {
					setIsSubmitting(false)
					handleClose()
					Alert.fire({
						icon: 'success',
						title: 'Chỉnh sửa tài khoản thành công',
					})
					reset()
					setPhoneInput2(null)
					setPhoneInput3(null)
				})
				.catch((error) => console.log(error))
		} else if (student.classId !== data.classId) {
			const action = updateStudent({
				...newData,
				classId: data.classId,
				_id: student._id,
			})
			dispatch(action)
				.then(unwrapResult)
				.then((res) => {
					const studentId = student._id
					const oldClassId = student.classId
					const newClassId = data.classId

					const action = updateStudentClass({
						studentId,
						oldClassId,
						newClassId,
					})
					dispatch(action)
						.then(unwrapResult)
						.then(() => {
							handleClose()
							Alert.fire({
								icon: 'success',
								title: 'Chỉnh sửa tài khoản thành công',
							})

							reset()
							setPhoneInput2(null)
							setPhoneInput3(null)
						})
						.catch(error)
				})
				.catch((error) => console.log(error))
		}
	}

	useEffect(() => {
		if (student) {
			console.log(student)
			reset({
				name: student?.name,
				address: student?.address,
				dateOfBirth: `${student?.dateOfBirth?.slice(0, 10)}`,
				gender: student?.gender,
				classId: student?.classId?._id,

				dadName: student?.parents.father.name,
				dadAddress: student?.parents.father.address,
				dadDateOfBirth: `${student?.parents.father.dateOfBirth.slice(0, 10)}`,
				dadEmail: student?.parents.father.email,

				momName: student?.parents.mother.name,
				momAddress: student?.parents.mother.address,
				momDateOfBirth: `${student?.parents.mother.dateOfBirth.slice(0, 10)}`,
				momEmail: student?.parents.mother.email,
			})
			setPhoneInput2(`${student?.parents?.father.phone}`)
			setPhoneInput3(`${student?.parents?.mother.phone}`)
		}
	}, [student])

	useEffect(() => {
		const fetchData = () => {
			const action = getClasses()
			dispatch(action)
		}
		fetchData()
	}, [])

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
					style={{ maxHeight: '575px', overflowY: 'auto' }}
					autoComplete="off"
					onSubmit={
						student
							? handleSubmit(handleUpdateAccount)
							: handleSubmit(handleAddAccount)
					}
				>
					<Typography className={classes.formTitle} variant="h5">
						{student ? 'Chỉnh sửa' : 'Thêm'} tài khoản học sinh
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
							defaultValue={student?.name}
							{...register('name')}
						/>
						<FormControl component="fieldset" className={classes.radioGroup}>
							<Typography variant="label">Giới tính</Typography>
							<Controller
								rules={{ required: true }}
								control={control}
								defaultValue={student?.gender || 'Male'}
								{...register('gender')}
								required
								render={({ field }) => {
									const { onBlur, onChange, value } = field
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
							defaultValue={student?.dateOfBirth?.slice(0, 10)}
							required
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
							defaultValue={student?.address}
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
								defaultValue={student?.classId._id}
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
											{classesFromStore?.map((thisClass) => {
												return (
													<MenuItem key={thisClass._id} value={thisClass._id}>
														{thisClass.name}
													</MenuItem>
												)
											})}
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
							defaultValue={student?.parents.father.name}
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
							defaultValue={student?.parents.father.email}
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
							required
							{...register('dadDateOfBirth')}
							defaultValue={student?.parents.father.dateOfBirth.slice(0, 10)}
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
							defaultValue={student?.parents.father.address}
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
							inputStyle={{
								border: '1px solid #dcdbdb',
								width: '100%',
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
							defaultValue={student?.parents.mother.name}
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
							defaultValue={student?.parents.mother.email}
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
							defaultValue={student?.parents.mother.dateOfBirth.slice(0, 10)}
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
							defaultValue={student?.parents.mother.address}
						/>
					</div>
					<div className={classes.inputGroup}>
						<PhoneInput
							country="vn"
							onlyCountries={['vn']}
							value={phoneInput3}
							onChange={(phoneInput3) => setPhoneInput3(phoneInput3)}
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
								width: '100%',
							}}
							specialLabel="Số điện thoại *"
						/>
					</div>

					{error && <p className={classes.error}>{error}</p>}

					<div style={{ alignSelf: 'end' }}>
						<Button className={classes.cancel} onClick={handleClose}>
							Hủy bỏ
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
								'Lưu'
							)}
						</Button>
					</div>
				</form>
			</Fade>
		</Modal>
	)
}

export default AddEditAccount
