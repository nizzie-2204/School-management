import background from 'assets/images/background.jpg'
const { makeStyles } = require('@material-ui/core')

const useStyles = makeStyles((theme) => ({
	login: {
		backgroundImage: `url(${background})`,
		height: '100vh',
	},
	container: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		width: '50%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '20px',
		backgroundColor: theme.palette.background.paper,
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: '#5278db',
		color: theme.palette.text.secondary,
	},
	title: {
		marginBottom: '15px',
	},
	form: {
		width: '70%', // Fix IE 11 issue.
		marginTop: '10px',
		marginBottom: '20px',
	},
	submit: {
		margin: theme.spacing(5, 0, 2),
		padding: '10px 0',
		backgroundColor: '#5278db',
		'&:hover': {
			backgroundColor: '#5278db',
		},
	},
	input: {
		fontSize: '16px',
		color: '#000',
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
	footerLink: {
		textDecoration: 'none',
		color: '#5c6ac4',
		transition: '0.3s',
		display: 'flex',
		alignItems: 'center',
		fontSize: '14px',
	},
	footerIcon: {
		fontSize: '14px',
		color: '#5c6ac4',
		marginRight: '5px',
	},
	error: {
		width: '70%',
		color: '#c74a47',
		backgroundColor: '#fbe2e2',
		fontSize: '16px',
		textAlign: 'left',
		padding: '10px 15px',
	},
	emptySubmit: {
		width: '70%',
		backgroundColor: '#fff',
		fontSize: '14px',
		textAlign: 'left',
		height: '42px',
	},
	empty: {
		width: '70%',
		backgroundColor: 'transparent',
		fontSize: '16px',
		textAlign: 'left',
		height: '42px',
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

export { useStyles }
