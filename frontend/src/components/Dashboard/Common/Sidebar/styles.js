import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	'@global': {
		'*::-webkit-scrollbar': {
			width: '10px',
		},
		'*::-webkit-scrollbar-thumb': {
			height: '10px',
			borderRadius: '10px',
			backgroundColor: 'rgba(0,0,0,0.12)',
			opacity: 0.4,
		},
	},
	sidebar: {
		backgroundColor: '#5278db',
		transition: '0.3s',
		width: '310px',
		height: 'calc(100vh - 90px)',
		overflowY: 'overlay',
		'&:hover': {
			overflowY: 'overlay',
		},
		position: 'fixed',
	},
	root: {
		padding: 0,
	},
	listIcon: {
		color: theme.palette.text.secondary,
	},
	listItem: {
		backgroundColor: '#5278db',
		'&:hover': {
			backgroundColor: '#3254ac',
		},
	},
	activeLink: {
		backgroundColor: '#3254ac',
	},
	listItemText: {
		color: theme.palette.text.secondary,
		textTransform: 'uppercase',
	},
	nested: {
		paddingLeft: theme.spacing(5),
		'&:hover': {
			backgroundColor: '#3254ac',
		},
	},
}))

export default useStyles
