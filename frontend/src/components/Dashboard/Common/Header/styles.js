import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	appBar: {
		borderBottom: '1px solid #dee4ec',
		backgroundColor: theme.palette.background.paper,
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
	select: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	selectItem: {
		margin: '0 10px',
		border: '1px solid #f0f3fb',
	},
	info: {
		display: 'flex',
		alignItems: 'center',
	},
	user: {
		display: 'flex',
		alignItems: 'center',
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
}))

export default useStyles
