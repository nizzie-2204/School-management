import { Box, IconButton, TextField, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'
import React, { useEffect, useRef, useState } from 'react'
import useStyles from './styles'
import socket from 'socket'

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

const Chat = ({ openChat, handleOpenChat, roomId }) => {
	const classes = useStyles()

	const currentUser = sessionStorage.getItem('user')
	const [msg, setMsg] = useState([])
	const messagesEndRef = useRef(null)
	const inputRef = useRef()
	const formRef = useRef()
	useEffect(() => {
		socket.on('FE-receive-message', ({ msg, sender }) => {
			setMsg((msgs) => [...msgs, { sender, msg }])
		})
	}, [])

	// Scroll to Bottom of Message List
	useEffect(() => {
		scrollToBottom()
	}, [msg])

	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	const sendMessage = (e) => {
		if (e.key === 'Enter') {
			const msg = e.target.value

			if (msg) {
				socket.emit('BE-send-message', { roomId, msg, sender: currentUser })
				inputRef.current.value = ''
				console.log(inputRef.current.value)
			}
		}
	}

	const handleChangeText = (e) => {
		inputRef.current.value = e.target.value
	}

	const handleSendMessage = (e) => {
		e.preventDefault()

		if (inputRef.current.value === '') {
			return
		} else {
			const msg = inputRef.current.value
			socket.emit('BE-send-message', { roomId, msg, sender: currentUser })
			formRef.current.reset()
		}
	}

	return (
		<Box className={`${classes.chatContainer} ${openChat && classes.scale}`}>
			<Box className={classes.topHeader}>
				Tin nhắn trong lớp học
				<IconButton onClick={handleOpenChat}>
					<CloseIcon style={{ color: '#fff' }} />
				</IconButton>
			</Box>
			<Box className={classes.chatArea}>
				<Box className={classes.messageList}>
					{msg &&
						msg.map(({ sender, msg }, idx) => {
							if (sender !== currentUser) {
								return (
									<div key={idx} className={classes.message}>
										<strong className={classes.name}>Ai đó</strong>
										<p className={classes.content}>
											{msg}
											<small>{formatDate(new Date())}</small>
										</p>
									</div>
								)
							} else {
								return (
									<div key={idx} className={classes.userMessage}>
										<strong className={classes.name}>Tôi</strong>
										<p className={classes.content}>
											{msg}
											<small>{formatDate(new Date())}</small>
										</p>
									</div>
								)
							}
						})}
					<div style={{ float: 'left', clear: 'both' }} ref={messagesEndRef} />
				</Box>
			</Box>
			<form
				className={classes.inputGroup}
				onSubmit={handleSendMessage}
				ref={formRef}
			>
				<TextField
					variant="standard"
					placeholder="Nhập tin nhắn ở đây..."
					className={classes.input}
					InputProps={{
						disableUnderline: true,
					}}
					ref={inputRef}
					onChange={handleChangeText}
					// onKeyUp={sendMessage}
				/>
				{/* <Button
					className={classes.inputIcon}
					type="submit"
					onClick={handleSendMessage}
				>
					<AddIcon style={{ fontSize: 30, fontWeight: 600 }} />
				</Button> */}
			</form>
		</Box>
	)
}

export default Chat
