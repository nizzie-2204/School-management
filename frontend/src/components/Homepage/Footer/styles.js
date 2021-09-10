import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: '#232936',
		padding: '40px 0',
	},
	footerLogo: {
		marginBottom: '25px',
	},
	footerLogoDesc: {
		fontSize: '16px',
		color: '#bcc5d0',
	},
	footerListTitle: {
		fontSize: '20px',
		fontWeight: '700',
		color: '#fff',
		padding: '0 16px',
	},
	footerListText: {
		fontSize: '16px',
		color: '#bcc5d0',
	},
	footerForm: {
		display: 'flex',
		flexDirection: 'column',
	},
	footerInput: {
		border: '1px solid #bcc5d0',
		color: '#000',
		background: '#fff',
		padding: '10px',
		'&:focus': {
			outline: 'none',
			border: 'none',
		},
	},
	between: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

export { useStyles };
