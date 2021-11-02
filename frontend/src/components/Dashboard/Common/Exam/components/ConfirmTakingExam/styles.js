import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containter: {
		backgroundColor: theme.palette.background.paper,
	},
	header: {
		color: theme.palette.text.secondary,
		backgroundColor: '#3254ac',
		display: 'flex',
		alignItems: 'center',
		padding: '20px 30px',
	},
	headerTitle: {
		fontSize: 28,
		fontWeight: 600,
		marginLeft: 10,
		textTransform: 'uppercase',
	},
	content: {
		padding: '20px 30px',

		'& p': {
			marginBottom: 10,
		},
	},
	actions: {
		padding: '20px 30px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	submit: {
		fontSize: '14px',
		color: '#fff',
		backgroundColor: '#3254ac',
		'&:hover': {
			backgroundColor: '#3254ac',
		},
		width: '80px',
	},
	cancel: {
		border: '1px solid #dcdbdb',
		marginRight: 20,
		padding: '5px 15px',
	},
}))

export default useStyles
