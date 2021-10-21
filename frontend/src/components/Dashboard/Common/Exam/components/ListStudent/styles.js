import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	container: {
		padding: 0,
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 20,
	},
	title: {
		fontWeight: 600,
		marginRight: 10,
	},
	subTitle: {
		fontSize: 14,
	},
	form: {
		marginBottom: 20,
	},
	searchField: {
		width: 300,
		color: theme.palette.text.main,
		marginRight: 20,
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#dcdbdb',
			borderRightColor: '#dcdbdb',
			borderRadius: '0',
		},
		'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#dcdbdb',
			borderRightColor: '#dcdbdb',
			borderRadius: '0',
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: '#dcdbdb',
			borderRightColor: '#dcdbdb',
			borderRadius: '0',
		},
		'&::placeholder': {
			color: theme.palette.text.main,
		},
	},
	button: {
		padding: '10px 20px',
		color: theme.palette.text.secondary,
		backgroundColor: '#3254ac',
		borderRadius: '0',
		boxShadow: 'none !important',
		'&:hover': {
			backgroundColor: '#3254ac',
		},
	},
	tableContainer: {
		boxShadow: 'none',
	},
	tableHead: {
		backgroundColor: '#eff3f6',
	},
}))

export default useStyles
