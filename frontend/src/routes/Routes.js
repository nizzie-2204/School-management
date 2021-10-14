import PrivateRoute from 'components/Route/PrivateRoute'
import { nanoid } from 'nanoid'
import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// Components
const Home = lazy(() => import('pages/Home/Home'))
const Teacher = lazy(() => import('pages/Teacher/Teacher'))
const Vision = lazy(() => import('pages/Vision/Vision'))
const StudyPrograms = lazy(() => import('pages/StudyPrograms/StudyPrograms'))
const Admission = lazy(() => import('pages/Admission/Admission'))
const Contact = lazy(() => import('pages/Contact/Contact'))
const Login = lazy(() => import('features/Login/Login'))
const Class = lazy(() => import('components/Dashboard/Common/Class/Class'))
const Timetable = lazy(() =>
	import('components/Dashboard/Common/Timetable/Timetable')
)
const Profile = lazy(() =>
	import('components/Dashboard/Common/Profile/Profile')
)
const Overview = lazy(() =>
	import('components/Dashboard/Common/Overview/Overview')
)
const StudentAccount = lazy(() =>
	import('components/Dashboard/Common/StudentAccount/StudentAccount')
)
const TeacherAccount = lazy(() =>
	import('components/Dashboard/Common/TeacherAccount/TeacherAccount')
)
const Subject = lazy(() =>
	import('components/Dashboard/Common/Subject/Subject')
)
const TypeTeacher = lazy(() =>
	import('components/Dashboard/Common/TypeTeacher/TypeTeacher')
)
const HeadClassTeacher = lazy(() =>
	import('components/Dashboard/Common/HeadClassTeacher/HeadClassTeacher')
)

const Classroom = lazy(() =>
	import('components/Dashboard/Common/Classroom/Main/Main')
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
	{
		exact: true,
		path: '/dashboard/profile',
		component: Profile,
	},
	{
		exact: true,
		path: '/dashboard/timetable',
		component: Timetable,
	},
	{
		exact: true,
		path: '/dashboard/teacher-type',
		component: TypeTeacher,
	},
	{
		exact: true,
		path: '/dashboard/head-class-teacher',
		component: HeadClassTeacher,
	},
	{
		exact: true,
		path: '/dashboard/classroom',
		component: Classroom,
	},
]

const Routes = () => {
	const location = useLocation()
	return (
		<>
			<TransitionGroup component={null}>
				<CSSTransition timeout={300} classNames="page" key={location.key}>
					{routes ? (
						<Suspense fallback={<div />}>
							<Switch location={location}>
								{routes.map((route, index) => {
									const Component = route.component
									return route.path.includes('/dashboard') ? (
										<PrivateRoute
											exact={route.exact}
											path={route.path}
											key={nanoid()}
											component={Component}
										/>
									) : (
										<Route
											key={nanoid()}
											path={route.path}
											exact={route.exact}
											render={(props) => <Component {...props} />}
										/>
									)
								})}
							</Switch>
						</Suspense>
					) : null}
				</CSSTransition>
			</TransitionGroup>
		</>
	)
}

export default Routes
