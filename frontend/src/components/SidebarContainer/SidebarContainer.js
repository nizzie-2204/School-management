import Sidebar from 'components/Dashboard/Common/Sidebar/Sidebar'
import React from 'react'
import { useSelector } from 'react-redux'

const SidebarContainer = () => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

	if (isLoggedIn) {
		// Only Dashboard page using Sidebar component
		return <Sidebar />
	} else {
		return null
	}
}

export default SidebarContainer
