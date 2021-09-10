import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	container: {
		padding: '100px 0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	grid: {},
	gridItem: {
		marginBottom: '50px',
	},
	card: {
		width: '80%',
		margin: '0 auto',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingTop: '20px',
	},
	cardHeader: {
		width: '130px',
		height: '130px',
		borderRadius: '50%',
		background: '#3ab64c',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: '20px',
	},
	cardMedia: {
		maxWidth: '75px',
		maxHeight: '75px',
		objectFit: 'cover',
	},
	cartTitle: {
		fontSize: '24px',
		fontWeight: '700',
		color: '#000',
		textAlign: 'center',
		marginBottom: '20px',
		transition: '0.3s',
		cursor: 'pointer',
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	cartSubtitle: {
		fontSize: '16px',
		color: '#000',
		textAlign: 'center',
	},
	title: {
		textTransform: 'capitalize',
		width: '100%',
		fontSize: '48px',
		fontWeight: '700',
		textAlign: 'center',
		color: '#000',
		marginBottom: '60px',
	},
}))

export { useStyles }
