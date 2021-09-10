import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	drawer: {
		paddingTop: '20px',
	},
	iconClose: {
		color: '#000',
	},
	nav: {
		// position: "fixed",
		width: '300px',
		// height: "100vh",
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#fff',
	},
	navItemText: {
		fontSize: '18px',
		fontWeight: '700',
		textTransform: 'uppercase',
		color: '#000',
		'&:hover': {
			color: '#fff',
		},
	},
	navItemTextDropdown: {
		fontSize: '14px',
		fontWeight: '700',
		textTransform: 'uppercase',
		color: '#000',
		padding: '0 30px',
		transition: '0.2s',
		'&:hover': {
			color: '#fff',
		},
	},
	navItemDropdown: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: '10px 16px',

		'&:hover': {
			'& $navItemText': {
				color: '#fff',
			},
		},
	},
	borderNone: {
		border: 'none !important',
	},
});

export { useStyles };
