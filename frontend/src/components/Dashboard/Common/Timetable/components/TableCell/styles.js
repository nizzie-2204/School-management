import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	tableCell: {
		textTransform: 'capitalize',
		fontWeight: 'bold',
		cursor: 'pointer',
		color: theme.palette.text.main,
		fontSize: '16px',
		position: 'relative',
		'&:not(:last-of-type)': {
			borderRight: '1px solid rgba(180, 180, 180, 1)',
		},
	},
	titleSmall: {
		fontSize: '14px',
		fontWeight: 'normal',
	},
	session: {
		color: theme.palette.text.main,
		fontWeight: 'bold',
		borderRight: '1px solid rgba(180, 180, 180, 1)',
		fontSize: '16px',

		// backgroundColor: '#dce4f7',
	},
	select: { fontSize: '12px' },
	typography: {
		padding: theme.spacing(2),
	},
	popup: {
		// backgroundColor: 'blue',
		'& .MuiPaper-elevation8': {
			boxShadow: 'none',
			border: '1px solid rgba(180, 180, 180, 1)',
		},
		'& .MuiPaper-root': {
			padding: '20px',
			overflow: 'visible',
			// backgroundColor: 'blue',
		},
	},
	selectOption: {
		width: 200,
		fontSize: 12,
		'&:last-of-type': {
			marginTop: '20px',
		},
	},
}))

export default useStyles
