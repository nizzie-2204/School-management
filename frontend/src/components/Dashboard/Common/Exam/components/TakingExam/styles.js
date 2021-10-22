import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		width: '90%',
		padding: 20,
		margin: '0 auto',
		borderBottom: '1px solid #eee',
	},
	timer: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#3254ac',
		padding: '30px 60px',
		textAlign: 'center',
		marginRight: 20,
	},
	timerTitle: {
		textTransform: 'uppercase',
		color: theme.palette.text.secondary,
		fontSize: 22,
	},
	timerSubtitle: {
		color: '#ffed00',
		fontWeight: 600,
		fontSize: 38,
		letterSpacing: 5,
	},
	timerIcon: {
		width: 26,
		height: 26,
		objectFit: 'cover',
		marginRight: 10,
	},
	infoTitle: {
		textTransform: 'uppercase',
		color: '#3254ac',
		fontWeight: 800,
	},
	submit: {
		textTransform: 'none',
		backgroundColor: theme.palette.success.main,
		color: theme.palette.text.secondary,
		marginLeft: 'auto',
		padding: '10px 20px',
		fontSize: 18,

		'&:hover': {
			backgroundColor: theme.palette.success.main,
			color: theme.palette.text.secondary,
		},
	},
	main: {
		display: 'flex',
		// alignItems: 'center',
		flexDirection: 'column',
		width: '100%',
		margin: '0 auto',
		backgroundColor: '#f3f7fa',
	},
	examContainer: {
		width: '90%',
		padding: 20,
		margin: '40px auto',
		backgroundColor: theme.palette.background.paper,
	},
	examQuestion: {
		width: '90%',
		height: 500,
		margin: '0 auto',
	},

	examTitle: {
		marginBottom: 20,
		fontSize: 24,
		fontWeight: 600,
		backgroundColor: '#3254ac',
		width: 'fit-content',
		padding: '10px 20px',
		color: theme.palette.text.secondary,
	},

	answer: {
		width: '90%',
		height: 'auto',
		padding: 20,
		margin: '40px auto',
		backgroundColor: theme.palette.background.paper,
	},
	answerQuestion: {
		width: '90%',
		margin: '0 auto',
	},
	thumbContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 16,
	},
	thumb: {
		display: 'inline-flex',
		borderRadius: 2,
		border: '1px solid #eaeaea',
		marginBottom: 20,
		marginRight: 8,
		width: 'auto',
		height: 400,
		padding: 4,
		boxSizing: 'border-box',
	},
	thumbInner: {
		display: 'flex',
		minWidth: 0,
		overflow: 'hidden',
	},
	img: {
		display: 'block',
		width: 'auto',
		height: '100%',
		objectFit: 'cover',
	},
	dropzone: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: 20,
		borderWidth: 2,
		borderRadius: 2,
		borderColor: '#dddddd',
		borderStyle: 'dashed',
		backgroundColor: '#fafafa',
		color: theme.palette.text.primary,
		outline: 'none',
		transition: 'border .24s ease-in-out',
		cursor: 'pointer',
	},
}))

export default useStyles
