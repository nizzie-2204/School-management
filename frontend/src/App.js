import { ThemeProvider } from '@material-ui/styles'
import MainLayout from 'components/Dashboard/Layout/MainLayout'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from 'routes/Routes'
import theme from 'themes/theme'
import './App.css'
import { HelmetProvider } from 'react-helmet-async'
import store from 'store/store'
import { Provider } from 'react-redux'

function App() {
	return (
		<HelmetProvider>
			<Provider store={store}>
				<div className="App">
					<ThemeProvider theme={theme}>
						<Router>
							<Routes />
						</Router>
					</ThemeProvider>
				</div>
			</Provider>
		</HelmetProvider>
	)
}

export default App
