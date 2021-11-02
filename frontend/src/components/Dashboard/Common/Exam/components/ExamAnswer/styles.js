import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: '#f3f7fa',
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		width: '90%',
		padding: 20,
		margin: '0 auto',
		borderBottom: '1px solid #eee',
		backgroundColor: theme.palette.background.paper,
		boxShadow:
			'0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);',
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
	},
	infoTitle: {
		textTransform: 'uppercase',
		color: '#3254ac',
		fontWeight: 800,
	},
	submit: {
		textTransform: 'none',
		backgroundColor: 'transparent',
		color: '#3254ac',
		marginLeft: 'auto',
		boxShadow: 'none',
		display: 'flex',
		alignItems: 'center',

		'&:hover': {
			backgroundColor: 'transparent',
			boxShadow: 'none',
			color: '#3254ac',
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
		width: '85%',
		padding: 20,
		margin: '40px auto',
		backgroundColor: theme.palette.background.paper,
	},
	examQuestion: {
		width: '70%',
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
		width: '85%',
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
		borderColor: '#eeeeee',
		borderStyle: 'dashed',
		backgroundColor: '#fafafa',
		color: '#bdbdbd',
		outline: 'none',
		transition: 'border .24s ease-in-out',
		cursor: 'pointer',
	},
	teacher: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '85%',
		padding: '30px 50px',
		margin: '20px auto',
		borderBottom: '1px solid #eee',
		backgroundColor: theme.palette.background.paper,
		boxShadow:
			'0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);',
	},
	scoreContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',

		'& span': {
			fontSize: 24,
			color: '#f44336',
			lineHeight: 1,

			'& strong': {
				fontSize: 38,
			},
		},
	},
	score2Container: {},
	scoreTitle: {
		marginBottom: 10,
		fontSize: 24,
		fontWeight: 600,
		backgroundColorcolor: '#3254ac',
		textTransform: 'uppercase',
	},
	comment: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		flex: 1,
	},
	commentTitle: {
		marginBottom: 10,
		fontSize: 24,
		fontWeight: 600,
		backgroundColorcolor: '#3254ac',
		textTransform: 'uppercase',
	},
	textField: {
		marginBottom: 10,
		width: '100%',

		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			border: '1px solid #dcdbdb',
		},
		'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			border: '1px solid #dcdbdb',
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			border: '1px solid #3254ac',
		},
	},
	action: {
		color: theme.palette.text.secondary,
		backgroundColor: '#3254ac',

		'&:hover': {
			color: theme.palette.text.secondary,
			backgroundColor: '#3254ac',
		},
	},
	top: {
		color: '#fff',
		animationDuration: '750ms',
	},
	circle: {
		strokeLinecap: 'round',
	},
	opacity: {
		opacity: '0.5',
		cursor: 'not-allowed',
	},
}))

export default useStyles
