import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
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
		paddingTop: '90px',
	},
	main: {
		gridArea: 'main',
		backgroundColor: '#f8f8f8',
		padding: theme.spacing(2, 3),
		paddingTop: '110px',
		overflowY: 'overlay',
	},
}))

export default useStyles
