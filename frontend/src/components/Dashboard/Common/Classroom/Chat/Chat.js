import { Box, IconButton, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'
import useStyles from './styles'

const formatDate = (timeStamp) => {
	const thisDate = new Date(timeStamp)
	let hour = thisDate.getHours()
	let minute = thisDate.getMinutes()
	let currDate = thisDate.toLocaleDateString('vi-VN', {
		timeZone: 'UTC',
	})

	if (minute < 10) {
		minute = '0' + minute
	}

	return `${currDate} ${hour}:${minute}`
}

const Chat = ({ openChat, handleOpenChat }) => {
	const classes = useStyles()

	return (
		<Box className={`${classes.chatContainer} ${openChat && classes.scale}`}>
			<Box className={classes.topHeader}>
				Tin nhắn trong lớp học
				<IconButton onClick={handleOpenChat}>
					<CloseIcon style={{ color: '#fff' }} />
				</IconButton>
			</Box>
			<Box className={classes.message}></Box>
			<Box className={classes.inputGroup}>
				<TextField
					variant="standard"
					placeholder="Nhập tin nhắn ở đây..."
					className={classes.input}
					InputProps={{
						disableUnderline: true,
					}}
				/>
				<IconButton className={classes.inputIcon}>
					<AddIcon style={{ fontSize: 30, fontWeight: 600 }} />
				</IconButton>
			</Box>
		</Box>
	)
}

export default Chat
