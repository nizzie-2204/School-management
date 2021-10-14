import { Box } from '@material-ui/core'
import React, { useState } from 'react'
import BottomBar from '../BottomBar/BottomBar'
import Chat from '../Chat/Chat'
import Room from '../Room/Room'
import useStyles from './styles'
import { Helmet } from 'react-helmet-async'

const Main = () => {
	const classes = useStyles()
	const [openChat, setOpenChat] = useState(false)

	const handleOpenChat = () => {
		setOpenChat(!openChat)
	}

	return (
		<>
			<Helmet>
				<title>Lớp học trực tuyến - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Box className={classes.main}>
				<Box className={classes.left}>
					<Room />
					<BottomBar handleOpenChat={handleOpenChat} />
				</Box>
				<Chat openChat={openChat} handleOpenChat={handleOpenChat} />
			</Box>
		</>
	)
}

export default Main
