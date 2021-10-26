import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField, Typography } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { addSubject, updateSubject } from '../subjectSlice'
import useStyles from './styles'
import Alert from 'components/Alert/Alert'

const schema = yup.object().shape({
	name: yup.string().required(),
	desc: yup.string().required(),
})

const AddEditAccount = ({ open, handleClose, subject }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { enqueueSnackbar } = useSnackbar()
	const { register, handleSubmit, reset } = useForm({
		resolver: yupResolver(schema),
	})
	const [error, setError] = useState(null)

	const handleAddSubject = (data) => {
		const action = addSubject(data)
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				handleClose()
				Alert.fire({
					icon: 'success',
					title: 'Thêm mới thành công',
				})
				reset()
			})
			.catch((error) => {
				if (error.data.message === 'name have to be unique') {
					setError('Tên môn học đã tồn tại')
				}
			})
	}

	const handleUpdateSubject = (data) => {
		const newDate = { ...subject, name: data.name, desc: data.desc }
		const action = updateSubject(newDate)
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				handleClose()
				Alert.fire({
					icon: 'success',
					title: 'Chỉnh sửa thành công',
				})
				reset()
			})
			.catch((error) => {
				if (error.data.message === 'name have to be unique') {
					setError('Tên môn học đã tồn tại')
				}
			})
	}

	useEffect(() => {
		// Reset defaultValue input when editing
		if (subject) {
			reset({ name: subject.name, desc: subject.desc })
		}
	}, [subject])

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
						subject
							? handleSubmit(handleUpdateSubject)
							: handleSubmit(handleAddSubject)
					}
				>
					<Typography className={classes.formTitle} variant="h5">
						{subject ? 'Chỉnh sửa môn học' : 'Thêm môn học'}
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
							// defaultValue={subject?.name}
						/>
						<TextField
							className={classes.root}
							label="Miêu tả"
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
							{...register('desc')}
							// defaultValue={subject?.desc}
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
