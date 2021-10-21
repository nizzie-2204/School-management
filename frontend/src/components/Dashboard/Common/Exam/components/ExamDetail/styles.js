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
		borderRadius: 3,
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
	tabContainer: {
		padding: '20px 0',
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
	tab: {
		textTransform: 'none',
	},
	tabPanelContainer: {
		'& .MuiBox-root': {
			padding: 0,
		},
	},
}))

export default useStyles
