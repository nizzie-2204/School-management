import React from 'react'
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min'

const PrivateRoute = ({ component: Component, ...rest }) => {
	const isLoggedIn = Boolean(localStorage.getItem('token'))

	return (
		<Route
			{...rest}
			render={(props) => {
				return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
			}}
		/>
	)
}

export default PrivateRoute
