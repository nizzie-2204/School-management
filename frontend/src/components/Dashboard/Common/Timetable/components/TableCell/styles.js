import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		width: '30%',
		padding: '40px 30px',
		backgroundColor: theme.palette.background.paper,
		border: 'none',
		boxShadow: 'none',
		outline: 'none',
	},
	formTitle: {
		marginBottom: '40px',
		paddingBottom: '20px',
		borderBottom: '1px solid #dcdbdb',
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
		width: '100%',
		fontSize: 12,
		'&:last-of-type': {
			marginTop: '20px',
			marginBottom: '20px',
		},
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
	submit: {
		fontSize: '14px',
		color: '#fff',
		backgroundColor: '#3254ac',
		'&:hover': {
			backgroundColor: '#3254ac',
		},
	},
	infoClass: {
		width: '250px !important',
		padding: '20px !important',
		fontSize: 14,
	},
	row: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 7,
		color: '#3254ac',

		'&:last-of-type': {
			color: theme.palette.text.main,
			marginBottom: 15,
		},
	},
	rowIcon: {
		fontSize: 18,
		marginRight: 10,
		color: '#3254ac',
	},
	button: {
		backgroundColor: '#3254ac',
		color: theme.palette.text.secondary,

		'&:hover': {
			backgroundColor: '#3254ac',
			color: theme.palette.text.secondary,
		},
	},
	opacity: {
		opacity: '0.5',
		cursor: 'not-allowed',
		backgroundColor: '#3254ac',
		color: theme.palette.text.secondary,

		'&:hover': {
			backgroundColor: '#3254ac',
			color: theme.palette.text.secondary,
		},
	},
}))

export default useStyles
