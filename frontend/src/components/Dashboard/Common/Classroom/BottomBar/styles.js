import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	bar: {
		width: '100%',
		height: 90,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#1d2635',
		padding: '20px 25px',
	},
	left: {
		display: 'flex',
		alignItems: 'center',
	},
	btn: {
		width: 50,
		height: 50,
		borderRadius: 5,
		backgroundColor: '#2f80ec',
		display: 'flex',
		alignItems: 'center',
		'&:nth-of-type(1)': {
			marginRight: 20,
		},
	},
	btnDisable: {
		width: 50,
		height: 50,
		borderRadius: 5,
		backgroundColor: '#f6484a',
		display: 'flex',
		alignItems: 'center',
		'&:nth-of-type(1)': {
			marginRight: 20,
		},
	},
	iconContainer: {
		display: 'flex',
		flexDirection: 'column',
	},
	icon: {
		color: theme.palette.common.white,
		fontSize: 28,
	},
	iconText: {
		fontSize: 14,
	},
	center: {
		display: 'flex',
		alignItems: 'center',
	},
	btnOut: {
		color: '#f6484a',
	},
}))

export default useStyles
