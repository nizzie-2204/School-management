const { makeStyles } = require('@material-ui/styles')

const useStyles = makeStyles((theme) => ({
	header: {
		backgroundColor: theme.palette.background.paper,
		height: '90px',
		display: 'flex',
		justifyContent: 'center',
		paddingRight: '0 !important',
	},
	logo: {
		width: '250px',
	},
	nav: {
		flex: '1',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '0',
	},
	navItemText: {
		fontSize: '15px',
		fontWeight: '700',
		textTransform: 'uppercase',
		textAlign: 'center',
		color: theme.palette.text.main,
		backgroundColor: 'transparent',
		boxShadow: 'none',
		borderRadius: '0',
		padding: '32px 25px',
		transition: '0.2s',
		position: 'relative',
		'&:hover': {
			boxShadow: 'none',
			backgroundColor: theme.palette.background.default,
			color: theme.palette.text.secondary,
		},
		[theme.breakpoints.down('md')]: {
			padding: '32px 10px',
		},
	},

	listDropdown: {
		marginTop: '65px',
		backgroundColor: theme.palette.background.paper,
		padding: '0',
		borderRadius: '0',
	},

	navItemTextDropdown: {
		fontSize: '14px',
		fontWeight: '700',
		textTransform: 'uppercase',
		color: '#000',
		transition: '0.2s',
		backgroundColor: theme.palette.background.paper,
		padding: '12px 24px',
		'&:hover': {
			backgroundColor: theme.palette.background.default,
			color: theme.palette.text.secondary,
		},
	},
	dropdown: {
		position: 'relative',
		'&::before': {
			display: 'block',
			position: 'absolute',
			content: "''",
			top: '31px',
			left: '50%',
			transform: 'translateX(-50%)',
			backgroundColor: 'transparent',
			width: '120px',
			height: '50px',
		},
	},
	loginText: {
		fontSize: '14px',
		fontWeight: '700',
		textTransform: 'uppercase',
		textDecoration: 'none',
		color: theme.palette.text.secondary,
		transition: '0.2s',
		backgroundColor: theme.palette.background.default,

		padding: '15px 30px',
		borderRadius: '8px',
		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
		},
	},
}))

export { useStyles }
