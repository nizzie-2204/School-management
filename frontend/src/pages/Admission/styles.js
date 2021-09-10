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
		boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
		transition: 'all 0.1s cubic-bezier(.25,.8,.25,1)',
		' &:hover': {
			boxShadow: ' 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
		},
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
