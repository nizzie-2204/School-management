const { makeStyles } = require('@material-ui/styles')

const useStyles = makeStyles((theme) => ({
	introduction: {
		backgroundColor: theme.palette.background.paper,
		[theme.breakpoints.down('sm')]: {
			paddingTop: theme.spacing(15),
		},
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	grid: {
		position: 'relative',
		top: '-40px',
		left: '0',
	},
	gridItem: {
		marginBottom: '50px',
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#ffb607',
		overflow: 'visible',
		height: '100%',
	},
	cardHeader: {
		width: '130px',
		height: '130px',
		borderRadius: '50%',
		background: '#fff',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		transform: 'translateY(-70px)',
		marginBottom: '-40px',
	},
	cardMedia: {
		maxWidth: '75px',
		maxHeight: '75px',
		objectFit: 'cover',
	},
	cartTitle: {
		fontSize: '24px',
		fontWeight: '700',
		color: '#fff',
		textAlign: 'center',
		position: 'relative',
		marginBottom: '20px',
		'&::before': {
			position: 'absolute',
			content: "''",
			bottom: '-10px',
			left: '50%',
			transform: 'translate(-50%)',
			width: '50px',
			height: '2px',
			backgroundColor: '#fff',
		},
	},
	cartSubtitle: {
		fontSize: '16px',
		color: '#fff',
		textAlign: 'center',
	},
}))

export { useStyles }
