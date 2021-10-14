import PrivateHeader from 'components/Dashboard/Common/Header/Header'
import PublicHeader from 'components/Homepage/Header/Header'
import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const HeaderContainer = () => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
	const location = useLocation()

	if (
		location.pathname.includes('/login') ||
		location.pathname.includes('/classroom')
	) {
		// Login page not using Header component
		return null
	} else if (isLoggedIn && location.pathname.includes('/dashboard')) {
		// Dashboard
		return <PrivateHeader />
	} else {
		return <PublicHeader />
	}
}

export default HeaderContainer
