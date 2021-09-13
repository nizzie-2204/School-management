import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	container: {
		padding: '10px 10px 10px 20px',
		display: 'flex',
		alignItems: 'center',
		background: theme.palette.background.paper,
		marginBottom: '40px',
	},
	link: {
		fontSize: '16px',
		color: theme.palette.text.main,
		textDecoration: 'none',
	},
}))

export { useStyles }
