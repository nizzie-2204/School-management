const { makeStyles } = require('@material-ui/styles')

const useStyles = makeStyles((theme) => ({
	about: {
		backgroundColor: theme.palette.background.paper,
		padding: '40px 0',
	},
	title: {
		fontSize: '50px',
		fontWeight: '700',
		color: theme.palette.text.main,

		marginBottom: '20px',
	},
	content: {
		fontSize: '16px',
		color: theme.palette.text.primary,

		marginBottom: '20px',
	},
	learning: {
		display: 'flex',
		flexDirection: 'column',
	},
	item: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: '10px',
	},
	itemImage: {
		width: '85px',
		height: '85px',
		borderRadius: '100%',
		backgroundColor: '#3ab64c',
		marginRight: '20px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	itemInfoSubtitle: {
		color: theme.palette.text.primary,
	},
	aboutDesc: {
		[theme.breakpoints.down('sm')]: {
			marginBottom: theme.spacing(5),
		},
	},
}))

export { useStyles }
