const { makeStyles } = require('@material-ui/core');

const useStyles = makeStyles((theme) => ({
	login: {
		backgroundColor: theme.palette.background.paper,
		height: '100vh',
	},
	container: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		width: '40%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.background.default,
		marginTop: '70px',
		color: theme.palette.text.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: '30px',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		backgroundColor: '#ffb607',
		'&:hover': {
			backgroundColor: '#007bff',
		},
	},
	input: {
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
	footer: {
		width: '60%',
		marginTop: 'auto',
		paddingBottom: '20px',
	},
	footerList: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',

		listStyle: 'none',
	},
	footerLink: {
		textDecoration: 'none',
		color: theme.palette.text.main,
		transition: '0.3s',
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	// border: {
	// 	margin: '0 30px',
	// 	padding: '0 30px',
	// 	borderLeft: '1px solid #000',
	// 	borderRight: '1px solid #000',
	// },
}));

export { useStyles };
