import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	tableContainer: {
		maxHeight: 440,
		boxShadow: 'none',
	},
	table: {
		minWidth: 650,
		borderRadius: 0,
		'&:nth-of-type(odd)': {
			// backgroundColor: theme.palette.action.hover,
		},
	},
	tableHead: {
		fontWeight: 'bold',
		backgroundColor: '#eff3f6',
		color: '#000',
	},
	limitText: {
		maxWidth: 100,
		overflow: 'hidden',
		whiteSpace: ' nowrap',
		textOverflow: 'ellipsis',
	},
	titleTable: {
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '15px 10px',
	},
	title: {
		fontSize: '18px',
		fontWeight: 'bold',
	},
	isLoggedIn: { color: theme.palette.success.main },
	isLoggedOut: { color: theme.palette.error.main },
	searchBar: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: '30px',
		backgroundColor: theme.palette.background.paper,
		padding: 10,
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
		boxShadow: 'none !important',
		textTransform: 'none',
		'&:hover': {
			backgroundColor: '#3254ac',
		},
		'& .MuiButton-startIcon': {
			paddingBottom: 3,
		},
	},
	searchButton: {
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
	actions: {
		display: 'flex',
		alignItems: 'center',
	},
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
	loading: {
		height: 440,
		textAlign: 'center',
		margin: '50px auto',
	},
	emptyData: {
		padding: '90px 0',
		textAlign: 'center',
		backgroundColor: theme.palette.background.paper,
	},
}))

export default useStyles
