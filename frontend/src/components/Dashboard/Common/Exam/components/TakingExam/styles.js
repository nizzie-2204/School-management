import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		width: '90%',
		padding: 20,
		margin: '0 auto',
		borderBottom: '1px solid #eee',
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
		backgroundColor: theme.palette.success.main,
		color: theme.palette.text.secondary,
		marginLeft: 'auto',
		padding: '10px 20px',
		fontSize: 18,

		'&:hover': {
			backgroundColor: theme.palette.success.main,
			color: theme.palette.text.secondary,
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
		width: '90%',
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
		width: '90%',
		padding: 10,
		margin: '40px auto',
		backgroundColor: theme.palette.background.paper,
	},
}))

export default useStyles
