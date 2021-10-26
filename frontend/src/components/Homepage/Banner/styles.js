import { makeStyles } from '@material-ui/styles'
import bgImage1 from 'assets/images/slider1.jpg'

const useStyles = makeStyles((theme) => ({
	banner: {
		marginTop: '87px',
		height: '700px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.down('md')]: {
			marginTop: '67px',
		},
	},
	container: {
		height: '100%',
		backgroundImage: `url(${bgImage1})`,
		backgroundPosition: 'cover',
		backgroundSize: '100% 100%',
		backgroundRepeat: 'no-repeat',
	},
	content: {
		width: '70%',
		height: '100%',
		margin: '0 auto',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	title: {
		fontSize: '60px',
		fontWeight: '700',
		textTransform: 'capitalize',
		marginBottom: '40px',
	},
	subtitle: {
		fontSize: '20px',
		marginBottom: '50px',
	},
	button: {
		color: theme.palette.text.secondary,
		fontSize: '20px',
		padding: '10px 30px',
		backgroundColor: '#ffb607',
		borderRadius: '20px',
		transition: 0.3,
		'&:hover': {
			color: theme.palette.primary.main,
			backgroundColor: theme.palette.background.paper,
		},
	},
}))

export { useStyles }
