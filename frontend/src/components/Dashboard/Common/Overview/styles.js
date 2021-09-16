import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	container: {},
	data: {
		backgroundColor: theme.palette.background.paper,
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '30px',
	},
	dataTitle: {
		fontSize: '20px',
		fontWeight: '600',
		marginBottom: '20px',
	},
	numberContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	numberItem: {
		width: '24%',
		display: 'flex',
		flexDirection: 'column',
	},
	numberItemTitle: {
		fontSize: '30px',
		fontWeight: '600',
	},
	numberItemDesc: {
		fontWeight: '600',
		fontSize: '16px',
	},
	chart: {
		display: 'flex',
		alignItems: 'stretch',
		justifyContent: 'space-between',
	},
	chartItem: {
		width: '48%',
		backgroundColor: theme.palette.background.paper,
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
	},

	main: {
		backgroundColor: '#f3f7fa',
		padding: '0 15px 15px 15px',
		overflowY: 'overlay',
		marginTop: '90px',
		marginLeft: '310px',
	},
}))

export default useStyles
