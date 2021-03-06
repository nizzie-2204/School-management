import { Box, Button, IconButton } from '@material-ui/core'
import React, { useCallback, useRef } from 'react'
import useStyles from './styles'
import VideocamIcon from '@material-ui/icons/Videocam'
import VideocamOffIcon from '@material-ui/icons/VideocamOff'
import MicIcon from '@material-ui/icons/Mic'
import MicOffIcon from '@material-ui/icons/MicOff'
import TextsmsIcon from '@material-ui/icons/Textsms'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows'
import GroupIcon from '@material-ui/icons/Group'
const BottomBar = ({
	handleOpenChat,
	goToBack,
	toggleCameraAudio,
	userVideoAudio,
	clickScreenSharing,
	screenShare,
	videoDevices,
	showVideoDevices,
	setShowVideoDevices,
	users,
}) => {
	const classes = useStyles()

	const handleToggle = useCallback(
		(e) => {
			setShowVideoDevices((state) => !state)
		},
		[setShowVideoDevices]
	)

	return (
		<Box className={classes.bar}>
			<Box className={classes.left}>
				<Box
					className={userVideoAudio.video ? classes.btn : classes.btnDisable}
					onClick={toggleCameraAudio}
					data-switch="video"
				>
					{userVideoAudio.video ? (
						<IconButton className={classes.iconContainer}>
							<VideocamIcon className={classes.icon} />
						</IconButton>
					) : (
						<IconButton className={classes.iconContainer}>
							<VideocamOffIcon className={classes.icon} />
						</IconButton>
					)}
				</Box>
				<Box
					className={userVideoAudio.audio ? classes.btn : classes.btnDisable}
					onClick={toggleCameraAudio}
					data-switch="audio"
				>
					{userVideoAudio.audio ? (
						<IconButton>
							<MicIcon className={classes.icon} />
						</IconButton>
					) : (
						<IconButton className={classes.iconContainer}>
							<MicOffIcon className={classes.icon} />
						</IconButton>
					)}
				</Box>
			</Box>
			<Box className={classes.center}>
				<Box className={classes.btn} onClick={handleOpenChat}>
					<div>
						<IconButton className={classes.iconContainer}>
							<TextsmsIcon className={classes.icon} />
						</IconButton>
					</div>
				</Box>
				<Box
					className={classes.btn}
					onClick={clickScreenSharing}
					style={{ marginRight: 20 }}
				>
					<div>
						<IconButton className={classes.iconContainer}>
							<DesktopWindowsIcon className={classes.icon} />
						</IconButton>
					</div>
				</Box>
				<Box className={classes.btn} style={{ cursor: 'default' }}>
					<div className={classes.participant}>
						<IconButton className={classes.iconContainer}>
							<GroupIcon className={classes.icon} />
						</IconButton>
						<span className={classes.quantity}>{users}</span>
					</div>
				</Box>
			</Box>

			<Button onClick={goToBack} className={classes.btnOut}>
				R???i l???p
			</Button>
		</Box>
	)
}

export default BottomBar
