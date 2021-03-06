import Sidebar from 'components/Dashboard/Common/Sidebar/Sidebar'
import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const SidebarContainer = () => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
	const location = useLocation()

	if (
		isLoggedIn &&
		location.pathname.includes('/dashboard') &&
		!location.pathname.includes('/classroom') &&
		!location.pathname.includes('/dashboard/taking-exam') &&
		!location.pathname.includes('/dashboard/exam-answer')
	) {
		// Only Dashboard page using Sidebar component
		return <Sidebar />
	} else {
		return null
	}
}

export default SidebarContainer
