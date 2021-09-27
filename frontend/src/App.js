import { ThemeProvider } from '@material-ui/styles'
import FooterContainer from 'components/FooterContainer/FooterContainer'
import HeaderContainer from 'components/HeaderContainer/HeaderContainer'
import SidebarContainer from 'components/SidebarContainer/SidebarContainer'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routes/Routes'
import { store, persistor } from 'store/store'
import theme from 'themes/theme'
import { PersistGate } from 'redux-persist/integration/react'
import './App.css'
import { SnackbarProvider } from 'notistack'
import Slide from '@material-ui/core/Slide'

function App() {
	return (
		<HelmetProvider>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<div className="App">
						<ThemeProvider theme={theme}>
							<SnackbarProvider
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								TransitionComponent={Slide}
							>
								<Router>
									<HeaderContainer />
									<SidebarContainer />
									<Routes />
									<FooterContainer />
								</Router>
							</SnackbarProvider>
						</ThemeProvider>
					</div>
				</PersistGate>
			</Provider>
		</HelmetProvider>
	)
}

export default App
