import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		width: '50%',
		padding: '40px 30px',
		backgroundColor: theme.palette.background.paper,
		[theme.breakpoints.down('sm')]: {
			width: '80%',
			padding: '40px 60px',
		},
		[theme.breakpoints.down('xs')]: {
			padding: '30px 50px',
		},
	},
	formTitle: {
		marginBottom: '70px',
		paddingBottom: '20px',
		borderBottom: '1px solid #dcdbdb',
	},
	inputGroup: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: '30px',
	},
	root: {
		width: '48%',
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
		'& .MuiFormLabel-root': {
			color: '#000',
		},
		'&.MuiSelect-select ': {
			fontSize: '14px',
		},
	},
	borderClass: {
		'&.react-tel-input .form-control:focus': {
			border: '1px solid #3254ac !important',
			boxShadow: 'none',
		},
		'&.react-tel-input .selected-flag .arrow': {
			display: 'none',
		},
		'&.react-tel-input .selected-flag .flag': {
			marginLeft: '4px',
		},
		'&.react-tel-input .selected-flag': {
			cursor: 'default',
		},
		'&.react-tel-input .form-control': {
			fontSize: '14px',
			fontFamily: "'Baloo Paaji 2', cursive",
			borderRadius: '4px',
			padding: '13px 14px 13.5px 58px',
			border: '1px solid #dcdbdb',
			color: 'currentColor',
		},
		'&.react-tel-input .special-label': {
			fontFamily: "'Baloo Paaji 2', cursive",
			top: '-12px',
		},
	},
	radioGroup: {
		width: '48%',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: '15px',
	},
	select: {
		width: '48%',
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
	cssLabel: {
		'&.Mui-focused': {
			color: theme.palette.text.main,
		},
	},
	submit: {
		fontSize: '14px',
		color: '#fff',
		backgroundColor: '#3254ac',
		'&:hover': {
			backgroundColor: '#3254ac',
		},
		width: '80px',
		marginLeft: 'auto',
	},
	resize: {
		fontSize: '14px',
	},
	formControl: {
		display: 'flex',
		alignItems: 'center',
	},
	error: {
		color: '#c74a47',
		backgroundColor: '#fbe2e2',
		fontSize: '16px',
		textAlign: 'left',
		padding: '10px 15px',
		marginTop: '-30px',
		marginBottom: '20px',
	},
	field: {
		margin: '10px 0',
	},
	countryList: {
		...theme.typography.body1,
	},
}))

export default useStyles
