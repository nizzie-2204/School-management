import React from 'react'
import useStyles from './styles'

const Video = () => {
	const classes = useStyles()
	return <video className={classes.video}></video>
}

export default Video
