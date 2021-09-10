import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	testimonial: {
		backgroundColor: '#f8f8f8',
		padding: '70px 0',
	},
	testimonialTitle: {
		width: '100%',
		fontSize: '48px',
		fontWeight: '700',
		textAlign: 'center',
		color: '#000',
		marginBottom: '100px',
	},

	root: {
		overflow: 'unset',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#424761',
		padding: '0 20px',
		position: 'relative',
	},
	quote: {
		position: 'absolute',
		content: '""',
		bottom: '-30px',
		right: '30px',
		width: '70px',
		height: '70px',
		backgroundColor: theme.palette.background.paper,
		borderRadius: '50%',
		border: '1px solid #ddd',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	quoteIcon: {
		fontSize: '35px',
		color: '#e20c0c',
	},
	media: {
		width: '100px',
		height: '100px',
		objectFit: 'cover',
		margin: '0 auto',
		marginBottom: '-30px',
		transform: 'translateY(-50px)',
		borderRadius: '50%',
		[theme.breakpoints.down('xs')]: {
			width: '450px',
			height: '450px',
		},
	},
	star: { color: theme.palette.background.default, fontSize: '28px' },

	desc: {
		fontSize: '14px',
		textAlign: 'center',
		marginBottom: '20px',
	},
	title: {
		fontSize: '18px',
		color: '#fff',
		marginTop: '12px',
		display: 'inline-block',
		fontWeight: 'bold',
		textTransform: ' uppercase',
		textAlign: 'center',
		width: '100%',
	},
}))

export { useStyles }
