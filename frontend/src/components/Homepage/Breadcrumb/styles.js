import { makeStyles } from '@material-ui/styles';
import bgImage from 'assets/images/inner_title_bg.jpg';

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: '89px',
		padding: '40px 0',
		backgroundImage: `url(${bgImage})`,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	title: {
		fontSize: '28px',
		fontWeight: '700',
		color: '#fff',
		marginBottom: '20px',
		textTransform: 'capitalize',
	},
	link: {
		fontSize: '16px',
		color: '#fff',
		textDecoration: 'none',
		textTransform: 'uppercase',
	},
}));

export { useStyles };
