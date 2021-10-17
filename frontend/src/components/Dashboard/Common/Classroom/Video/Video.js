import React, { useEffect, useRef } from 'react'
import useStyles from './styles'
import { useSelector } from 'react-redux'

const Video = (props) => {
	const user = useSelector((state) => state.auth.user)
	const ref = useRef({})
	const peer = props.peer

	useEffect(() => {
		peer.on('stream', (stream) => {
			ref.current.srcObject = stream
		})
		peer.on('track', (track, stream) => {})
	}, [peer])
	const classes = useStyles()
	return (
		<video className={classes.video} playsInline autoPlay ref={ref}>
			{user?.name}
		</video>
	)
}

export default Video
