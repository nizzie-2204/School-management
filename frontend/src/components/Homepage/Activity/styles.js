import { makeStyles } from '@material-ui/styles';
import bgImage from 'assets/images/gallery-bg.jpg';

const useStyles = makeStyles({
	activity: {
		padding: '60px 0',
		backgroundImage: `url(${bgImage})`,
	},
	activityTitle: {
		width: '100%',
		fontSize: '48px',
		fontWeight: '700',
		textAlign: 'center',
		color: '#56225e',
		marginBottom: '60px',
	},
	activityImageContainer: {
		margin: '0 20px',
	},
	activityImage: {
		width: '90%',
		borderRadius: '50%',
	},
	button: {
		color: '#fff',
		fontSize: '15px',
		padding: '10px 30px',
		margin: 'auto',
		marginTop: '40px',
		backgroundColor: '#ffb607',
		borderRadius: '20px',
		'&:hover': {
			background: '#003d69',
		},
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
});

export { useStyles };
