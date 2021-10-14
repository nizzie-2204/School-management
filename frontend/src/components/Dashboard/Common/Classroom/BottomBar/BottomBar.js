import { Box, Button, IconButton } from '@material-ui/core'
import React, { useRef } from 'react'
import useStyles from './styles'
import VideocamIcon from '@material-ui/icons/Videocam'
import VideocamOffIcon from '@material-ui/icons/VideocamOff'
import MicIcon from '@material-ui/icons/Mic'
import MicOffIcon from '@material-ui/icons/MicOff'
import TextsmsIcon from '@material-ui/icons/Textsms'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows'

const BottomBar = ({ handleOpenChat }) => {
	const classes = useStyles()
	return (
		<Box className={classes.bar}>
			<Box className={classes.left}>
				{/* <Box className={classes.btn}>
					<IconButton className={classes.iconContainer}>
						<VideocamIcon className={classes.icon} />
					</IconButton>
				</Box> */}
				<Box className={classes.btnDisable}>
					<IconButton className={classes.iconContainer}>
						<VideocamOffIcon className={classes.icon} />
					</IconButton>
				</Box>
				{/* <Box className={classes.btn}>
						<IconButton>
							<MicIcon className={classes.icon} />
						</IconButton>
						
				</Box> */}
				<Box className={classes.btnDisable}>
					<IconButton className={classes.iconContainer}>
						<MicOffIcon className={classes.icon} />
					</IconButton>
				</Box>
			</Box>
			<Box className={classes.center}>
				<Box className={classes.btn}>
					<div>
						<IconButton
							className={classes.iconContainer}
							onClick={handleOpenChat}
						>
							<TextsmsIcon className={classes.icon} />
						</IconButton>
					</div>
				</Box>
				<Box className={classes.btn}>
					<div>
						<IconButton className={classes.iconContainer}>
							<DesktopWindowsIcon className={classes.icon} />
						</IconButton>
					</div>
				</Box>
			</Box>

			<Button className={classes.btnOut}>Rời lớp</Button>
		</Box>
	)
}

export default BottomBar
