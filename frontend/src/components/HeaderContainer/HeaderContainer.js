import React from 'react'
import { useSelector } from 'react-redux'

import PublicHeader from 'components/Homepage/Header/Header'
import PrivateHeader from 'components/Dashboard/Common/Header/Header'

const HeaderContainer = () => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
	if (isLoggedIn) {
		return <PrivateHeader />
	} else {
		return <PublicHeader />
	}
}

export default HeaderContainer
