import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: '#f3f7fa',
		height: '90px',
		paddingRight: '0 !important',
	},
	grow: {
		flexGrow: 1,
	},
	toolBar: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	right: {
		display: 'flex',
		alignItems: 'center',
	},
	avatar: {
		width: '30px',
		height: '30px',
		borderRadius: '50%',
		objectFit: 'cover',
	},
	schoolYear: {
		color: theme.palette.text.main,
		fontSize: '20px',
		fontWeight: '600',
		textTransform: 'uppercase',
	},
	info: {
		display: 'flex',
		alignItems: 'center',
	},
	user: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: '30px',
		cursor: 'pointer',
	},
	username: {
		color: '#000',
		display: 'flex',
		alignItems: 'center',
		textTransform: 'capitalize',
		backgroundColor: 'transparent',
		boxShadow: '0',
		maxWidth: '200px',
		fontWeight: '600',
		'&:hover': {
			background: 'transparent',
		},
		iconSizeSmall: {
			'& > *:first-child': {
				fontSize: 30,
			},
		},
	},
	badge: {
		backgroundColor: theme.palette.error.main,
		color: theme.palette.primary.contrastText,
	},
	popupUser: {
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		color: '#fff',
	},
}))

export default useStyles
