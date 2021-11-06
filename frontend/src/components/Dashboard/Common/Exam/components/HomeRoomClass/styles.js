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
		display: 'flex',
		alignItems: 'center',
		marginBottom: '30px',
		backgroundColor: theme.palette.background.paper,
	},
	searchField: {
		flex: '1',
		color: theme.palette.text.main,
		// border: '1px solid #eee',
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#eee',
			borderRightColor: 'transparent',
			borderTopLeftRadius: 4,
			borderBottomLeftRadius: 4,
			borderRadius: '0',
		},
		'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#eee',
			borderRightColor: 'transparent',
			borderTopLeftRadius: 4,
			borderBottomLeftRadius: 4,
			borderRadius: '0',
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: '#eee',
			borderRightColor: 'transparent',
			borderTopLeftRadius: 4,
			borderBottomLeftRadius: 4,
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
		borderRadius: 4,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		boxShadow: 'none !important',
		textTransform: 'none',
		'&:hover': {
			backgroundColor: '#3254ac',
		},
		'& .MuiButton-startIcon': {
			paddingBottom: 3,
		},
	},
	tableContainer: {
		boxShadow: 'none',
	},
	table: {
		boxShadow: 'none',
	},
	tableHead: {
		backgroundColor: '#eff3f6',
	},
	limitText: {
		maxWidth: 100,
		overflow: 'hidden',
		whiteSpace: ' nowrap',
		textOverflow: 'ellipsis',
	},
}))

export default useStyles
