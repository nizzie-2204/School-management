import React, { Fragment, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/Route/PrivateRoute'
const Home = lazy(() => import('pages/Home/Home'))
const Teacher = lazy(() => import('pages/Teacher/Teacher'))
const Vision = lazy(() => import('pages/Vision/Vision'))
const StudyPrograms = lazy(() => import('pages/StudyPrograms/StudyPrograms'))
const Admission = lazy(() => import('pages/Admission/Admission'))
const Contact = lazy(() => import('pages/Contact/Contact'))
const Login = lazy(() => import('features/Login/Login'))
const Overview = lazy(() =>
	import('components/Dashboard/Common/Overview/Overview')
)
const Class = lazy(() => import('components/Dashboard/Common/Class/Class'))
const StudentAccount = lazy(() =>
	import('components/Dashboard/Common/StudentAccount/StudentAccount')
)
const TeacherAccount = lazy(() =>
	import('components/Dashboard/Common/TeacherAccount/TeacherAccount')
)
const Subject = lazy(() =>
	import('components/Dashboard/Common/Subject/Subject')
)

const routes = [
	{
		exact: true,
		path: '/',
		component: Home,
	},
	{
		exact: true,
		path: '/teacher',
		component: Teacher,
	},
	{
		exact: true,
		path: '/vision',
		component: Vision,
	},
	{
		exact: true,
		path: '/programs',
		component: StudyPrograms,
	},
	{
		exact: true,
		path: '/admission',
		component: Admission,
	},
	{
		exact: true,
		path: '/contact',
		component: Contact,
	},
	{
		exact: true,
		path: '/login',
		component: Login,
	},
	{
		exact: true,
		path: '/dashboard/overview',
		component: Overview,
	},
	{
		exact: true,
		path: '/dashboard/class',
		component: Class,
	},
	{
		exact: true,
		path: '/dashboard/student',
		component: StudentAccount,
	},
	{
		exact: true,
		path: '/dashboard/teacher',
		component: TeacherAccount,
	},
	{
		exact: true,
		path: '/dashboard/subject',
		component: Subject,
	},
]

const Routes = () => {
	return (
		<>
			{routes ? (
				<Suspense fallback={<div />}>
					<Switch>
						{routes.map((route, index) => {
							const Component = route.component
							return route.path.includes('/dashboard') ? (
								<PrivateRoute
									exact={route.exact}
									path={route.path}
									key={index}
									component={Component}
								/>
							) : (
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									render={(props) => <Component {...props} />}
								/>
							)
						})}
						{/* route.path.includes('/login') ||
							 route.path.includes('/dashboard') ? (
							 	<PrivateRoute
							// 		key={index}
							// 		path={route.path}
							// 		exact={route.exact}
							// 	/> */}
					</Switch>
				</Suspense>
			) : null}
		</>
	)
}

export default Routes
