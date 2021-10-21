import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: '#f3f7fa',
		marginTop: 90,
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		width: '90%',
		padding: 20,
		margin: '0 auto',
		borderBottom: '1px solid #eee',
		backgroundColor: theme.palette.background.paper,
	},
	timer: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#3254ac',
		padding: '30px 60px',
		textAlign: 'center',
		marginRight: 20,
	},
	timerTitle: {
		textTransform: 'uppercase',
		color: theme.palette.text.secondary,
		fontSize: 22,
	},
	timerSubtitle: {
		color: '#ffed00',
		fontWeight: 600,
		fontSize: 38,
	},
	infoTitle: {
		textTransform: 'uppercase',
		color: '#3254ac',
		fontWeight: 800,
	},
	submit: {
		textTransform: 'none',
		backgroundColor: 'transparent',
		color: '#3254ac',
		marginLeft: 'auto',
		boxShadow: 'none',
		display: 'flex',
		alignItems: 'center',

		'&:hover': {
			backgroundColor: 'transparent',
			boxShadow: 'none',
			color: '#3254ac',
		},
	},
	main: {
		display: 'flex',
		// alignItems: 'center',
		flexDirection: 'column',
		width: '100%',
		margin: '0 auto',
		backgroundColor: '#f3f7fa',
	},
	examContainer: {
		width: '85%',
		padding: 20,
		margin: '40px auto',
		backgroundColor: theme.palette.background.paper,
	},
	examQuestion: {
		width: '70%',
		height: 500,
		margin: '0 auto',
	},

	examTitle: {
		marginBottom: 20,
		fontSize: 24,
		fontWeight: 600,
		backgroundColor: '#3254ac',
		width: 'fit-content',
		padding: '10px 20px',
		color: theme.palette.text.secondary,
	},
	answer: {
		width: '85%',
		padding: 10,
		margin: '40px auto',
		backgroundColor: theme.palette.background.paper,
	},
	teacher: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '85%',
		padding: '30px 50px',
		margin: '20px auto',
		borderBottom: '1px solid #eee',
		backgroundColor: theme.palette.background.paper,
	},
	scoreContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',

		'& span': {
			fontSize: 24,
			color: '#f44336',
			lineHeight: 1,

			'& strong': {
				fontSize: 38,
			},
		},
	},
	score2Container: {},
	scoreTitle: {
		marginBottom: 10,
		fontSize: 24,
		fontWeight: 600,
		backgroundColorcolor: '#3254ac',
		textTransform: 'uppercase',
	},
	comment: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		flex: 1,
	},
	commentTitle: {
		marginBottom: 10,
		fontSize: 24,
		fontWeight: 600,
		backgroundColorcolor: '#3254ac',
		textTransform: 'uppercase',
	},
	textField: {
		marginBottom: 10,
		width: '100%',
	},
	action: {
		color: theme.palette.text.secondary,
		backgroundColor: '#3254ac',
	},
}))

export default useStyles
