import { Box } from '@material-ui/core'
import React from 'react'
import Video from '../Video/Video'
import useStyles from './styles'

const Room = () => {
	const classes = useStyles()
	return (
		<Box className={classes.room}>
			<Video />
		</Box>
	)
}

export default Room
