import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	main: {
		backgroundColor: '#f3f7fa',
		padding: '0 15px 15px 15px',
		marginLeft: 310,
		marginTop: 90,
		position: 'absolute',
		width: 'calc(100vw - 310px)',
		top: 0,
		left: 0,
	},
	top: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: '50px',
	},
	title: {
		fontSize: '20px',
		fontWeight: '600',
		textTransform: 'uppercase',
		marginRight: '20px',
	},
	subTitle: {
		fontSize: '16px',
		fontWeight: '400',
		marginLeft: '20px',
	},
	label: {
		backgroundColor: theme.palette.background.paper,
		padding: '0 8px',
	},
	select: {
		width: '200px',
		fontSize: '14px',
	},
	selectClass: {
		width: 300,
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			border: '1px solid #dcdbdb',
		},
		'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			border: '1px solid #dcdbdb',
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			border: '1px solid #3254ac',
		},
	},
	table: {
		height: 450,
	},
	tableHeadTitle: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: '16px',
		color: theme.palette.text.main,
		backgroundColor: '#d0ecf0',
		// borderBottom: '1px solid rgba(180, 180, 180, 1)',
		'&:not(:last-of-type)': {
			borderRight: '1px solid rgba(180, 180, 180, 1)',
		},
	},
	tableHead: {
		// backgroundColor: '#f86254',
	},

	content: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: theme.palette.background.paper,
		padding: '20px',
	},
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
}))

export default useStyles
