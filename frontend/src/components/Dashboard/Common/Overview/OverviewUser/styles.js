import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	container: {},
	data: {
		backgroundColor: theme.palette.background.paper,
		padding: '20px',
		display: 'flex',
		alignItems: 'center',
		marginBottom: '30px',
	},
	dataTitle: {
		fontSize: '20px',
		fontWeight: '600',
		marginBottom: '20px',
	},
	main: {
		backgroundColor: '#f3f7fa',
		padding: '0 15px 15px 15px',
		overflowY: 'overlay',
		marginTop: '90px',
		marginLeft: '310px',
	},
	left: {
		flex: 1,
	},
	right: {
		flex: 1,
	},
	row: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 10,
		fontSize: 16,
	},
	infoIcon: {
		marginRight: 20,
		color: '#3254ac',
	},
	banner: {
		width: '100%',
		height: 250,
		objectFit: 'cover',
	},
	classContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		width: '100%',
	},
	class: {
		width: '50%',
		display: 'flex',
		alignItems: 'center',
		marginBottom: 30,
	},
	onlineClassThumb: {
		width: 210,
		height: 120,
		objectFit: 'cover',
		marginRight: 20,
	},
	classInfo: {
		display: 'flex',
		flexDirection: 'column',
	},
	classTitle: {
		fontSize: '18px',
		fontWeight: '500',
	},
	rowClass: {
		display: 'flex',
		alignItems: 'center',
	},
	schedule: {
		backgroundColor: theme.palette.background.paper,
		padding: '20px',
	},
}))

export default useStyles
