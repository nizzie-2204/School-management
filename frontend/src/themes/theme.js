import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core'
import { viVN } from '@material-ui/core/locale'

const theme = createMuiTheme(
	{
		palette: {
			common: { white: '#fff' },
			background: { default: '#fff', paper: '#fff' },
			primary: {
				main: '#ffb607',
				light: '#f0aa00',
				contrastText: '#fff',
			},
			secondary: {
				main: '#007aaa',
				contrastText: '#000',
			},
			text: {
				main: '#000',
				primary: '#52575e',
				secondary: '#fff',
			},
		},
		typography: {
			// fontFamily: "'Baloo Thambi 2', cursive",
			fontFamily: "'Baloo Paaji 2', cursive",
		},
	},
	viVN
)

export default theme
