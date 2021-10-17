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
		right: 0,
	},
	scale: {
		right: -380,
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
	chatArea: {
		height: 'calc(100vh - 140px)',
		maxHeight: 'calc(100vh - 140px)',
		overflowY: 'hidden',
	},
	messageList: {
		display: 'flex',
		width: '100%',
		flexDirection: 'column',
		padding: 15,
		color: '#454552',
	},
	message: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		fontSize: 16,
		marginTop: 15,
		textAlign: 'left',

		'& strong': {
			color: theme.palette.text.secondary,
			marginLeft: 3,
		},

		'& p': {
			maxWidth: '65%',
			width: 'auto',
			padding: 9,
			marginTop: 3,
			marginRight: 30,
			border: '1px solid rgb(78, 161, 211, 0.3)',
			borderRadius: 15,
			backgroundColor: '#4ea1d3',
			color: theme.palette.text.secondary,
			fontSize: 16,
			textAlign: 'left',
			display: 'flex',
			flexDirection: 'column',

			'& small': {
				fontSize: 12,
			},
		},
	},
	userMessage: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		fontSize: 16,
		marginTop: 15,
		textAlign: 'right',

		'& strong': {
			color: theme.palette.text.secondary,
			marginRight: 35,
		},

		'& p': {
			maxWidth: '65%',
			width: 'auto',
			padding: 9,
			marginTop: 3,
			marginRight: 30,
			border: '1px solid rgb(78, 161, 211, 0.3)',
			borderRadius: 15,
			backgroundColor: '#4ea1d3',
			color: theme.palette.text.secondary,
			fontSize: 14,
			textAlign: 'left',
			display: 'flex',
			flexDirection: 'column',

			'& small': {
				fontSize: 12,
			},
		},
	},
	inputGroup: {
		height: 70,
		display: 'flex',
		alignItems: 'center',
		padding: '20px 25px',
	},
	input: {
		flex: 1,
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
