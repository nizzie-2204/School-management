import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	studyPrograms: {
		backgroundColor: theme.palette.background.paper,
	},
	container: {
		padding: '100px 0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	gridItem: {
		marginBottom: '50px',
	},
	top: {
		marginBottom: '70px',
	},
	topTitle: {
		width: '100%',
		textAlign: 'center',
		padding: '35px 40px',
		fontSize: '17px',
		color: theme.palette.text.secondary,
		backgroundColor: '#013e6a',
	},
	topDesc: {
		fontSize: '15px',
		color: theme.palette.text.primary,
		display: 'inline-block',
		'&:not(:last-of-type)': {
			marginBottom: '20px',
		},
	},
	card: {
		backgroundColor: '#f9f9f9',
		width: '80%',
		margin: '0 auto',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		boxShadow: '0px 3px 9px rgb(0 0 0 / 10%)',
	},
	card2: {
		width: '80%',
		margin: '0 auto',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		boxShadow: '0px 3px 9px rgb(0 0 0 / 10%)',
		padding: '25px 20px',
	},
	cardContent: {
		paddingTop: 0,
		padding: '30px !important',
	},
	cardIcon: {
		fontSize: '40px',
		marginBottom: '20px',
		color: '#013e6a',
	},
	cartTitle: {
		fontSize: '24px',
		fontWeight: '500',
		color: '#000',
		textAlign: 'center',
		marginBottom: '20px',
		transition: '0.3s',
		cursor: 'pointer',
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	cartSubtitle: {
		fontSize: '16px',
		color: '#000',
		textAlign: 'justify',
		padding: 0,
	},
	title: {
		textTransform: 'capitalize',
		width: '100%',
		fontSize: '48px',
		fontWeight: '600',
		textAlign: 'center',
		color: '#000',
		marginBottom: '60px',
	},
}))

export { useStyles }
