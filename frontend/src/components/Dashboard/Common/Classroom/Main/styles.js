import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	main: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		height: '100vh',
		position: 'relative',
		overflowX: 'hidden',
	},
	left: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
	},
	room: {
		width: '100%',
		height: 'calc(100vh - 70px)',
		backgroundColor: '#161d29',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		// padding: 50,
		paddingRight: 380,
	},
	video: {
		position: 'relative',
		zIndex: 0,
		width: 400,
		height: 300,
	},
	videoContainer: {
		position: 'relative',
		width: 400,
		height: 300,
	},
	username: {
		position: 'absolute',
		content: '""',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		fontSize: 28,
		zIndex: 1,
		color: theme.palette.text.secondary,
		textAlign: 'center',
	},
	roomContainer: {
		maxWidth: '100%',
		height: ' 92%',
		display: 'flex',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
		alignItems: 'center',
		// padding: '15px',
		boxSizing: 'border-box',
		gap: '10px',
	},
}))

export default useStyles
