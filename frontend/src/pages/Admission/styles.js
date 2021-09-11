import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	admission: {
		backgroundColor: theme.palette.background.paper,
	},
	container: {
		padding: '100px 0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		width: '100%',
		fontSize: '48px',
		fontWeight: '700',
		textAlign: 'center',
		color: '#000',
		marginBottom: '60px',
		textTransform: 'capitalize',
	},
	root: {
		maxWidth: 345,
		textAlign: 'center',
		textDecoration: 'none',
		cursor: 'default',
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
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
	cardTitle: {
		color: '#000',
		fontSize: '20px',
		marginBottom: '10px',
		cursor: 'pointer',
		transition: '0.3s',
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	cardSubtitle: {
		color: '#52575e',
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
