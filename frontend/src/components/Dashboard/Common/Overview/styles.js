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
	root: {
		display: 'grid',
		gridTemplateRows: 'auto 1fr',
		gridTemplateColumns: '310px 1fr',
		gridTemplateAreas: `"header header" "sidebar main"`,

		minHeight: '100vh',
	},

	header: {
		gridArea: 'header',
		zIndex: 999,
	},
	sidebar: {
		gridArea: 'sidebar',
		borderRight: `1px solid ${theme.palette.divider}`,
		backgroundColor: theme.palette.background.paper,
		position: 'fixed',
	},
	main: {
		gridArea: 'main',
		backgroundColor: '#f9fafb',
		padding: theme.spacing(2, 3),
		overflowY: 'overlay',
	},
}))

export default useStyles
