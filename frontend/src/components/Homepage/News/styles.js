import { makeStyles } from '@material-ui/styles'
import bgImage from 'assets/images/class-bg.jpg'

const useStyles = makeStyles((theme) => ({
	news: {
		padding: '40px 0',
		backgroundImage: `url(${bgImage})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	},
	newsTitle: {
		width: '100%',
		fontSize: '48px',
		fontWeight: '700',
		textAlign: 'center',
		color: theme.palette.text.secondary,
		marginBottom: '60px',
		position: 'relative',
		'&::before': {
			position: 'absolute',
			content: '""',
			bottom: '-25px',
			left: '50%',
			transform: 'translateX(-50%)',
			width: '60px',
			height: '3px',
			borderRadius: '5px',
			backgroundColor: theme.palette.background.default,
		},
	},
	root: {
		maxWidth: 345,
		height: '100%',
		textDecoration: 'none',
		position: 'relative',
		boxShadow: '0',
		border: '0',
		cursor: 'default',
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
		transition: '0.2s',
		overflow: 'hidden',
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	gridItem: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			marginBottom: '20px',
		},
	},
	content: { padding: '25px 20px' },
	cardTitle: {
		color: theme.palette.text.main,
		fontSize: '22px',
		marginBottom: '10px',
		transition: '0.3s',
		cursor: 'pointer',
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	cardSubtitle: {
		color: theme.palette.text.primary,
		fontSize: '12px',
		marginBottom: '20px',
		display: 'block',
	},
	cardDesc: {
		color: '#353535',
		fontSize: '14px',
	},
}))

export { useStyles }
