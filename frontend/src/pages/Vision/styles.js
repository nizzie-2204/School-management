import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	vision: {
		backgroundColor: theme.palette.background.paper,
		paddingBottom: '100px',
	},
	container: {
		padding: '50px',
		border: '1px solid #ffb607',
	},
	title: {
		fontSize: '50px',
		fontWeight: '700',
		color: '#000',
		marginBottom: '20px',
		textTransform: 'capitalize',
	},
	desc: {
		color: '#52575e',
		fontSize: '16px',
	},
}))

export { useStyles }
