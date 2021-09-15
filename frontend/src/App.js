import { ThemeProvider } from '@material-ui/styles'
import FooterContainer from 'components/FooterContainer/FooterContainer'
import HeaderContainer from 'components/HeaderContainer/HeaderContainer'
import SidebarContainer from 'components/SidebarContainer/SidebarContainer'
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
							<SidebarContainer />
							<Routes />
							<FooterContainer />
						</Router>
					</ThemeProvider>
				</div>
			</Provider>
		</HelmetProvider>
	)
}

export default App
