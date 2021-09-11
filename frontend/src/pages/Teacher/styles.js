import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	teacherContainer: {
		backgroundColor: theme.palette.background.paper,
		// marginBottom: '100px',
	},
	container: {
		padding: '50px',
	},
	title: {
		fontSize: '50px',
		fontWeight: '700',
		color: '#000',
		marginBottom: '70px',
		textTransform: 'capitalize',
		textAlign: 'center',
	},
	desc: {
		color: '#52575e',
		fontSize: '16px',
	},
	teacher: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		transition: '0.3s',
		'&:hover': {
			transform: 'translateY(-10px)',
		},
	},
	teacherImage: {
		width: '100%',
		height: '450px',
		objectFit: 'cover',
		[theme.breakpoints.down('sm')]: {
			height: '50%',
		},
	},
	teacherName: {
		padding: '15px 15px 20px',
		textAlign: 'center',
		fontSize: '20px',
	},
}))

export { useStyles }
