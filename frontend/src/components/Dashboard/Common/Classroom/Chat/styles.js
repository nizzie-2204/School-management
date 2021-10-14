import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	chatContainer: {
		width: 380,
		height: 'calc(100vh - 80px)',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#242f41',
		transition: '0.4s',
		position: 'absolute',
		top: 0,
		right: -380,
	},
	scale: {
		right: 0,
	},
	topHeader: {
		height: 70,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '0 20px',
		color: theme.palette.common.white,
		fontWeight: 600,
	},
	message: {
		height: 'calc(100vh - 140px)',
	},
	inputGroup: {
		height: 70,
		display: 'flex',
		alignItems: 'center',
		padding: '20px 25px',
	},
	input: {
		flex: 1,
		marginRight: 10,
		backgroundColor: theme.palette.background.paper,
		padding: '10px 25px',
		borderRadius: 5,
		border: 'none',
	},
	inputIcon: {
		width: 50,
		height: 50,
		borderRadius: 5,
		backgroundColor: '#2f80ec',
		color: theme.palette.common.white,

		'&:hover': {
			color: theme.palette.common.white,
			backgroundColor: '#2f80ec',
		},
	},
}))

export default useStyles
