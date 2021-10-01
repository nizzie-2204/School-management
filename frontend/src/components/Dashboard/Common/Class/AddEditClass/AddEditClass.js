import { yupResolver } from '@hookform/resolvers/yup'
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
import Modal from '@material-ui/core/Modal'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import schoolYears from 'utils/schoolYear'
import * as yup from 'yup'
import { addClass, updateClass } from '../classSlice'
import useStyles from './styles'

const schema = yup.object().shape({
	name: yup.string().required(),
})

const AddEditAccount = ({ open, handleClose, currClass }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { enqueueSnackbar, closeSnackbar } = useSnackbar()
	const { register, handleSubmit, reset } = useForm({
		resolver: yupResolver(schema),
	})
	const thisSchoolYears = schoolYears()
	const [error, setError] = useState(null)

	const [thisClass, setThisClass] = useState(null)
	const handleChangeClass = (e) => {
		setThisClass(e.target.value)
	}

	const [year, setyear] = useState(null)
	const handleChangeYear = (e) => {
		setyear(e.target.value)
	}

	const handleAddClass = (data) => {
		const newData = { ...data, grade: parseInt(data.grade) }
		const action = addClass(newData)
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
			.catch((error) => {
				if (error.data.message === 'name have to be unique') {
					setError('Tên lớp học đã tồn tại')
				}
			})
	}

	const handleUpdateClass = (data) => {
		const newData = { _id: currClass._id, ...data }
		const action = updateClass(newData)
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
				if (error?.data?.message === 'name have to be unique') {
					setError('Tên môn học đã tồn tại')
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
	}, [currClass])

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
						currClass
							? handleSubmit(handleUpdateClass)
							: handleSubmit(handleAddClass)
					}
				>
					<Typography className={classes.formTitle} variant="h5">
						{currClass ? 'Chỉnh sửa lớp học' : 'Thêm lớp học'}
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
							{...register('name')}
							defaultValue={currClass?.name}
						/>
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
								defaultValue={currClass?.schoolYear || year}
								onChange={handleChangeYear}
								label="Năm học"
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
								Khối
							</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								defaultValue={currClass?.grade || thisClass}
								onChange={handleChangeClass}
								label="Khối"
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
