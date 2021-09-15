import About from 'components/Homepage/About/About'
import Activity from 'components/Homepage/Activity/Activity'
import Banner from 'components/Homepage/Banner/Banner'
import Introduction from 'components/Homepage/Introduction/Introduction'
import News from 'components/Homepage/News/News'
import Testimonial from 'components/Homepage/Testimonial/Testimonial'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Helmet>
				<title>Trang chủ - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Banner />
			<Introduction />
			<About />
			<News />
			<Activity />
			<Testimonial />
		</>
	)
}

export default Home
