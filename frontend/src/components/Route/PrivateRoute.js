import React from 'react'
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'

const PrivateRoute = ({ component: Component, ...rest }) => {
	let isLoggedIn = Boolean(localStorage.getItem('token'))

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
