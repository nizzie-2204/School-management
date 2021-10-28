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
	content: {
		padding: '10px 10px 10px 20px',
		display: 'flex',
		flexDirection: 'column',
		background: theme.palette.background.paper,
		marginBottom: '20px',
	},
	info: {
		marginBottom: 20,
		paddingBottom: 20,
		borderBottom: '1px solid #eee',
	},
	infoTitle: {
		fontWeight: 600,
		fontSize: 20,
	},
	overview: {
		borderBottom: '1px solid #eee',
		paddingBottom: 20,
	},
	overviewTitle: {
		fontWeight: 600,
		fontSize: 20,
		marginBottom: 10,
	},
	dataContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '70%',
		marginBottom: 20,
	},
	dataRow: {
		display: 'flex',
	},
	dataImg: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		border: '1px solid #eee',
		borderRadius: 10,
		// padding: 8,
		marginRight: 15,
		width: 59,
	},
	dataInfo: {
		display: 'flex',
		flexDirection: 'column',

		'& strong': {
			fontSize: 30,
			lineHeight: 1,
		},
	},
	appBar: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: 'none',
		color: '#000',
		marginBottom: 20,
		'& .MuiTab-root': {
			minWidth: 'auto',
			padding: '6px 0',
			marginRight: 30,
		},
	},
	tableContainer: {
		maxHeight: 440,
		boxShadow: 'none',
	},
	table: {
		minWidth: 650,
	},
	limitText: {
		maxWidth: 100,
		overflow: 'hidden',
		whiteSpace: ' nowrap',
		textOverflow: 'ellipsis',
	},
	tableHead: {
		fontWeight: 'bold',
		backgroundColor: '#eff3f6',
		color: '#000',
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
	tab: {
		textTransform: 'none',
	},
	tabPanelContainer: {
		'& .MuiBox-root': {
			padding: 0,
		},
	},
	searchBar: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
	},
	searchField: {
		flex: 1,
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
	inputGroup: {
		display: 'flex',
		alignItems: 'center',
		marginRight: 20,
		width: 250,
	},
	select: {
		width: '100%',
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			border: '1px solid #eee',
		},
		'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			border: '1px solid #eee',
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			border: '1px solid #eee',
		},
		'& .MuiSelect-select.MuiSelect-select': {
			fontSize: 14,
		},
		'& .MuiOutlinedInput-input': {
			padding: '12.5px 14px',
		},
		'& .MuiInputLabel-outlined': {
			transform: 'translate(14px, 16px) scale(1)',
		},
		'& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
			transform: 'translate(14px, -3px) scale(0.75)',
		},
	},
	formContainer: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: theme.palette.background.paper,
		padding: 10,
	},
}))

export default useStyles
