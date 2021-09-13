import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: theme.palette.background.paper,
		height: '90px',
		paddingRight: '0 !important',
		boxShadow:
			'0 0.46875rem 2.1875rem rgb(4 9 20 / 3%), 0 0.9375rem 1.40625rem rgb(4 9 20 / 3%), 0 0.25rem 0.53125rem rgb(4 9 20 / 5%), 0 0.125rem 0.1875rem rgb(4 9 20 / 3%)',
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
		fontWeight: '700',
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
		backgroundColor: 'transparent',
		boxShadow: '0',
		maxWidth: '200px',
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
		'.MuiListItemText-root': {
			fonSize: '14px',
		},
	},
}))

export default useStyles
