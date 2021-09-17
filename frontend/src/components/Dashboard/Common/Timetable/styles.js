import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	main: {
		backgroundColor: '#f3f7fa',
		padding: '0 15px 15px 15px',

		overflowY: 'overlay',
		marginTop: '90px',
		marginLeft: '310px',
	},
	top: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: '30px',
	},
	title: {
		fontSize: '20px',
		fontWeight: '600',
		textTransform: 'uppercase',
		marginRight: '20px',
	},
	select: {
		width: '200px',
		fontSize: '14px',
	},
	tableCell: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
		cursor: 'pointer',
		'&:not(:last-of-type)': {
			borderRight: '1px solid rgba(224, 224, 224, 1)',
		},
	},
	tableHeadTitle: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
		color: theme.palette.text.main,
		'&:not(:last-of-type)': {
			borderRight: '1px solid rgba(224, 224, 224, 1)',
		},
	},
	tableHead: {
		backgroundColor: '#dce4f7',
	},
	session: {
		color: theme.palette.text.main,
		fontWeight: 'bold',
		borderRight: '1px solid rgba(224, 224, 224, 1)',
		backgroundColor: '#dce4f7',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: theme.palette.background.paper,
		padding: '20px',
	},
}))

export default useStyles
