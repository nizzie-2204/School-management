import {
	Backdrop,
	Box,
	Button,
	Fade,
	Modal,
	Typography,
} from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import AcUnitIcon from '@material-ui/icons/AcUnit'
import { useHistory } from 'react-router'
const ConfirmTakingExam = ({ open, handleClose, thisExam }) => {
	const classes = useStyles()
	const history = useHistory()

	const handleTakingExam = (exam) => {
		// if (user.role !== 'student') return
		history.push({
			pathname: `/dashboard/taking-exam/${thisExam._id}`,
			state: { exam: thisExam },
		})
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
				<Box className={classes.containter}>
					<Box className={classes.header}>
						<AcUnitIcon />
						<Typography className={classes.headerTitle} variant="h2">
							Hướng dẫn làm bài thi trực tuyến
						</Typography>
					</Box>
					<Box className={classes.content}>
						<p>Trước khi làm bài, thí sinh lưu ý các điểm sau:</p>
						<p>
							<strong>1.</strong> Bài làm sẽ bắt đầu sau khi thí sinh nhấn
							<strong> Đồng ý</strong>
						</p>
						<p>
							<strong>2.</strong> Thời gian làm bài sẽ được đếm ngược cho đến
							khi hết giờ
						</p>
						<p>
							<strong>3.</strong>Bài thi sẽ kết thúc khi hết thời gian làm bài
							hoặc thí sinh nhấn nút
							<strong> Nộp bài</strong>
						</p>
					</Box>
					<Box className={classes.actions} style={{ alignSelf: 'end' }}>
						<Button className={classes.cancel} onClick={handleClose}>
							Hủy bỏ
						</Button>
						<Button className={classes.submit} onClick={handleTakingExam}>
							Đồng ý
						</Button>
					</Box>
				</Box>
			</Fade>
		</Modal>
	)
}

export default ConfirmTakingExam
