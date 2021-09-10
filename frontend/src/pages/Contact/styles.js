import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	contact: {
		backgroundColor: theme.palette.background.paper,
	},
	container: {
		padding: '100px 0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		width: '100%',
		fontSize: '48px',
		fontWeight: '700',
		textAlign: 'center',
		color: '#000',
		marginBottom: '60px',
		textTransform: 'capitalize',
	},
	form: {
		width: '80%',
		padding: '50px 70px',
		border: '1px solid #ffb607',
		[theme.breakpoints.down('sm')]: {
			width: '80%',
			padding: '40px 60px',
		},
		[theme.breakpoints.down('xs')]: {
			padding: '30px 50px',
		},
	},
	inputGroup: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: '30px',
	},
	root: {
		width: '48%',
		fontSize: '16px',
		color: '#000',
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#ffb607',
		},
		'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#ffb607',
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: '#ffb607',
		},
	},
	submit: {
		fontSize: '16px',
		color: '#fff',
		textTransform: 'uppercase',
		padding: '10px 0',
		backgroundColor: '#ffb607',
		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
		},
	},
	textArea: {
		width: '100%',
		fontSize: '16px',
		color: '#000',
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#ffb607',
		},
		'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#ffb607',
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: '#ffb607',
		},
	},
}))

export { useStyles }
