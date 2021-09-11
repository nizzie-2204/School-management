import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	'@global': {
		'*::-webkit-scrollbar': {
			width: '10px',
		},
		'*::-webkit-scrollbar-thumb': {
			height: '10px',
			borderRadius: '10px',
			backgroundColor: '#aaa',
			opacity: 0.4,
		},
	},
	sidebar: {
		backgroundColor: theme.palette.background.paper,
		transition: '0.3s',
		width: '310px',
		// height: 'calc(100vh - 90px)',
		overflowY: 'overlay',
		'&:hover': {
			overflowY: 'overlay',
		},
	},
	root: {
		padding: 0,
	},
	listIcon: {
		color: theme.palette.text.main,
	},
	listItem: {
		backgroundColor: theme.palette.background.paper,
		'&:hover': {
			backgroundColor: '#eff3f6',
		},
	},
	activeLink: {
		backgroundColor: '#eff3f6',
	},
	listItemText: {
		color: theme.palette.text.main,
		textTransform: 'uppercase',
	},
	nested: {
		paddingLeft: theme.spacing(5),
		color: theme.palette.text.main,
	},
}))

export default useStyles
