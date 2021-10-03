import React from 'react'
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'

const PrivateRoute = ({ component: Component, ...rest }) => {
	let isLoggedIn =
		localStorage.getItem('token') ||
		localStorage.getItem('teacherToken') ||
		localStorage.getItem('studentToken')

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
