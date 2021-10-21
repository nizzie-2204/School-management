import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	'@global': {
		'*::-webkit-scrollbar': {
			// width: '10px',
		},
		'*::-webkit-scrollbar-track': {
			'-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
			backgroundColor: '#5278db',
		},
		'*::-webkit-scrollbar-thumb': {
			height: '8px',
			// borderRadius: '10px',
			backgroundColor: '#85a0e5',
		},
	},
	sidebar: {
		backgroundColor: '#5278db',
		transition: '0.3s',
		width: '310px',
		height: 'calc(100vh - 90px)',
		marginTop: 90,
		position: 'fixed',
		fontFamily: 'sans-serif',
	},
	root: {
		padding: 0,

		'& .simplebar-scrollbar': {
			'&::before': {
				backgroundColor: '#f1f1f1',
			},
		},
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
