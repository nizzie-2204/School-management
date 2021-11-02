import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
	},
	chartContainer: {
		marginRight: 30,
		marginBottom: 30,
	},
	detail: {
		border: '1px solid #eee',
	},
	detailHeader: {
		backgroundColor: '#eee',
		padding: '10px !important',
	},
	tableContainer: {
		padding: '10px !important',
	},
	table: {
		border: '1px solid #eee',
	},
	tableTitle: {
		fontWeight: 600,
		textAlign: 'center',
	},
	tableData: {
		textAlign: 'center',
	},
}))

export default useStyles
