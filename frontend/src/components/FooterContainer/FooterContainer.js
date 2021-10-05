import Footer from 'components/Homepage/Footer/Footer'
import React from 'react'
import { useLocation } from 'react-router-dom'

const FooterContainer = () => {
	const location = useLocation()

	if (
		location.pathname.includes('/login') ||
		location.pathname.includes('/dashboard')
	) {
		// Login page and Dashboard page not using Footer component
		return null
	} else {
		// Dashboard
		return <Footer />
	}
}

export default FooterContainer
