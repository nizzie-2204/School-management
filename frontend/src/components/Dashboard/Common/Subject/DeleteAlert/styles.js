import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		width: '35%',
		padding: '40px 30px',
		backgroundColor: theme.palette.background.paper,
		[theme.breakpoints.down('sm')]: {
			width: '80%',
			padding: '40px 60px',
		},
		[theme.breakpoints.down('xs')]: {
			padding: '30px 50px',
		},
	},
	formTitle: {
		marginBottom: '50px',
	},

	actions: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	button: {
		width: '48%',
	},
}))

export default useStyles
