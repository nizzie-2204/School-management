import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from 'components/Homepage/Banner/Banner'
import Introduction from 'components/Homepage/Introduction/Introduction'
import About from 'components/Homepage/About/About'
import Testimonial from 'components/Homepage/Testimonial/Testimonial'
import Activity from 'components/Homepage/Activity/Activity'
import News from 'components/Homepage/News/News'
import Footer from 'components/Homepage/Footer/Footer'
import Header from 'components/Homepage/Header/Header'

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
			<Footer />
		</>
	)
}

export default Home
