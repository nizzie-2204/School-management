import { Container, Typography } from '@material-ui/core'
import About from 'components/Homepage/About/About'
import Breadcrumb from 'components/Homepage/Breadcrumb/Breadcrumb'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Fade from 'react-reveal/Fade'
import { useStyles } from './styles'

const Vision = () => {
	const links = [
		{
			title: 'Trang chủ',
			path: '/',
		},
		{
			title: 'Giới thiệu',
			path: '/teacher',
		},
		{
			title: 'Tầm nhìn và sứ mệnh',
			path: '/vision',
		},
	]

	const classes = useStyles()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Helmet>
				<title>Tầm nhìn và sứ mệnh - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Breadcrumb links={links} />
			<About />
			<div className={classes.vision}>
				<Fade bottom cascade>
					<Container maxWidth="lg" className={classes.container}>
						<Typography
							variant="body2"
							component="h3"
							className={classes.title}
						>
							Tầm nhìn
						</Typography>
						<Typography
							className={classes.desc}
							variant="body2"
							component="p"
							style={{ marginBottom: '80px' }}
						>
							Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ
							nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình
							bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ
							gồm nội dung kiểu “Nội dung, nội dung, nội dung” là nó khiến văn
							bản giống thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao
							diện web và dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn
							bản giả, và nếu bạn thử tìm các đoạn “Lorem ipsum” trên mạng thì
							sẽ khám phá ra nhiều trang web hiện vẫn đang trong quá trình xây
							dựng. Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô
							tình, nhiều khi do cố ý (xen thêm vào những câu hài hước hay thông
							tục).
						</Typography>
						<Typography
							variant="body2"
							component="h3"
							className={classes.title}
						>
							Sứ mệnh
						</Typography>
						<Typography className={classes.desc} variant="body2" component="p">
							Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ
							nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình
							bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ
							gồm nội dung kiểu “Nội dung, nội dung, nội dung” là nó khiến văn
							bản giống thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao
							diện web và dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn
							bản giả, và nếu bạn thử tìm các đoạn “Lorem ipsum” trên mạng thì
							sẽ khám phá ra nhiều trang web hiện vẫn đang trong quá trình xây
							dựng. Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô
							tình, nhiều khi do cố ý (xen thêm vào những câu hài hước hay thông
							tục).
						</Typography>
					</Container>
				</Fade>
			</div>
		</>
	)
}

export default Vision
