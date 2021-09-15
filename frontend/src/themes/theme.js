import { createTheme } from '@material-ui/core'

const theme = createTheme({
	palette: {
		common: { white: '#fff' },
		background: { default: '#ffb607', paper: '#fff' },
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
})

export default theme
