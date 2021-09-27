import { makeStyles } from '@material-ui/styles'
import bgImage from 'assets/images/separator_stripe.png'

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
		// '&:hover': {
		// 	transform: 'translateY(-10px)',
		// },
	},
	teacherImage: {
		width: '350px',
		height: '350px',
		borderRadius: '50%',
		objectFit: 'cover',
		marginBottom: '20px',
		[theme.breakpoints.down('sm')]: {
			height: '50%',
		},
	},
	teacherName: {
		marginBottom: '15px',
		textAlign: 'center',
		fontSize: '24px',
		color: theme.palette.primary.main,
	},
	teacherPosition: {
		fontSize: '16px',
		marginBottom: '15px',
	},
	separator: {
		width: '70px',
		height: '3px',
		backgroundImage: `url(${bgImage})`,
		display: 'block',
		marginBottom: '20px',
	},
	social: {
		width: '40%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	socialIcon: {
		fontSize: '20px',
	},
}))

export { useStyles }
