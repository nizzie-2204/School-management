import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	row: {
		display: 'flex',
		alignItems: 'center',
	},
	label: {
		fontWeight: '600',
	},
	input: {
		width: '70%',
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
		'& .MuiOutlinedInput-input': {
			padding: '14px',
		},
	},
	btnSave: {
		marginTop: '20px',
		backgroundColor: '#edf2fe',
		color: '#4d7df2',
		'&:hover': {
			backgroundColor: '#4d7df2',
			color: '#fff',
		},
	},
}))

export default useStyles
