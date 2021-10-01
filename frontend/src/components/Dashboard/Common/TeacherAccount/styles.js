import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	tableContainer: {
		maxHeight: 440,
	},
	table: {
		minWidth: 650,
		'&:nth-of-type(odd)': {
			// backgroundColor: theme.palette.action.hover,
		},
	},
	tableHead: {
		fontWeight: 'bold',
		backgroundColor: '#eff3f6',
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
	},
	searchField: {
		flex: '1',
		color: theme.palette.text.main,
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: 'rgba(0, 0, 0, 0.15)',
			borderRightColor: 'transparent',
			borderRadius: '0',
		},
		'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: 'rgba(0, 0, 0, 0.15)',
			borderRightColor: 'transparent',
			borderRadius: '0',
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: 'rgba(0, 0, 0, 0.15)',
			borderRightColor: 'transparent',
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

	main: {
		backgroundColor: '#f3f7fa',
		padding: '0 15px 15px 15px',

		overflowY: 'overlay',
		marginTop: '90px',
		marginLeft: '310px',
	},
	loading: {
		textAlign: 'center',
		margin: '50px auto',
	},
}))

export default useStyles
