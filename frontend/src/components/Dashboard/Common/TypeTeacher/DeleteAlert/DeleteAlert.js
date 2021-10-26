import { Button, Typography } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import { unwrapResult } from '@reduxjs/toolkit'
import Alert from 'components/Alert/Alert'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTypeTeacher } from '../typeTeacherSlice'
import useStyles from './styles'

const DeleteAlert = ({ open, handleClose, typeTeacher }) => {
	const classes = useStyles()
	const dispatch = useDispatch()

	const handleDeleteAccount = () => {
		const action = deleteTypeTeacher(typeTeacher._id)
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				handleClose()
				Alert.fire({
					icon: 'success',
					title: 'Xóa thành công',
				})
			})
			.catch((error) => console.log(error))
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
				<form className={classes.form} noValidate autoComplete="off">
					<Typography className={classes.formTitle} variant="h5">
						Bạn chắc chắn muốn xóa loại giáo viên này?
					</Typography>

					<div className={classes.actions}>
						<Button
							style={{ backgroundColor: '#3254ac', color: '#fff' }}
							className={classes.button}
							onClick={handleDeleteAccount}
						>
							Có
						</Button>
						<Button
							style={{
								border: '1px solid #dcdbdb',
							}}
							className={classes.button}
							onClick={handleClose}
						>
							Không
						</Button>
					</div>
				</form>
			</Fade>
		</Modal>
	)
}

export default DeleteAlert
