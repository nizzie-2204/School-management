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
		maxHeight: '575px',
		overflowY: 'auto',
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
		marginBottom: '40px',
		paddingBottom: '20px',
		borderBottom: '1px solid #dcdbdb',
	},
	formSubtitle: {
		marginBottom: '20px',
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
	error: {
		color: '#c74a47',
		backgroundColor: '#fbe2e2',
		fontSize: '16px',
		textAlign: 'left',
		padding: '10px 15px',
		marginBottom: '20px',
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
	cancel: {
		border: '1px solid #dcdbdb',
		marginRight: 20,
		padding: '5px 15px',
	},
	resize: {
		fontSize: '14px',
	},
	formControl: {
		display: 'flex',
		alignItems: 'center',
	},
	uploadFile: {
		backgroundColor: 'transparent',
		boxShadow: 'none',
		textTransform: 'none',
		border: '1px dashed #000',
		width: 120,

		'&:hover': {
			boxShadow: 'none',
			backgroundColor: 'transparent',
		},
	},
	answerQuestion: {
		padding: 10,
		border: '2px dashed #ddd',
		backgroundColor: '#fafafa',
		color: theme.palette.text.primary,
		outline: 'none',
		transition: 'border .24s ease-in-out',
		cursor: 'pointer',
	},
	thumb: {
		height: 550,
	},
	thumbContainer: {
		marginBottom: 20,
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
