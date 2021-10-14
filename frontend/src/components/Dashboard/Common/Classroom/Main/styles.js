import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	main: {
		display: 'flex',
		alignItems: 'center',
		height: '100vh',
		position: 'relative',
		// overflow: 'hidden',
	},
	left: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
	},
}))

export default useStyles
