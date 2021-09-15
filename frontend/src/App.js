import { ThemeProvider } from '@material-ui/styles'
import HeaderContainer from 'components/HeaderContainer/HeaderContainer'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routes/Routes'
import store from 'store/store'
import theme from 'themes/theme'
import './App.css'

function App() {
	return (
		<HelmetProvider>
			<Provider store={store}>
				<div className="App">
					<ThemeProvider theme={theme}>
						<Router>
							<HeaderContainer />
							<Routes />
						</Router>
					</ThemeProvider>
				</div>
			</Provider>
		</HelmetProvider>
	)
}

export default App
