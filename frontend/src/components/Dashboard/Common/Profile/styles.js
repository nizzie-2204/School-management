import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	main: {
		minHeight: '100vh',
		backgroundColor: '#f3f7fa',
		padding: '0 15px 15px 15px',

		// overflow: 'hidden',
		// overflowY: 'overlay',
		marginTop: '90px',
		marginLeft: '310px',
	},
	container: {
		backgroundColor: theme.palette.background.paper,
		padding: '20px',
		paddingTop: '0',
		boxShadow:
			'0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
	},
	appBar: {
		boxShadow: 'none',
	},
	tabs: {
		backgroundColor: theme.palette.background.paper,
		borderBottom: '1px solid #e0e0e0;',
	},
	tab: {
		display: 'flex',
		flexDirection: 'row !important',
		justifyContent: 'space-evenly',
		color: theme.palette.text.main,
		fontWeight: '500',
		fontSize: '14px',
	},
	selected: {
		backgroundColor: '#4d7df2',
	},
	activeTab: {
		fontSize: '14px',
		fontWeight: '500',
		color: '#4d7df2',
		display: 'flex',
		flexDirection: 'row !important',
		justifyContent: 'space-evenly',
	},
}))

export default useStyles
