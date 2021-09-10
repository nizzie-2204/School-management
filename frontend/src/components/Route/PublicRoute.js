import React from 'react';
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
	// const user = useSelector((state) => state.user.user);
	return (
		<></>
		// <Route
		// 	{...rest}
		// 	render={(props) => {
		// 		return user && restricted ? (
		// 			<Redirect to="/" />
		// 		) : (
		// 			<Component {...props} />
		// 		);
		// 	}}
		// />
	);
};

export default PublicRoute;
