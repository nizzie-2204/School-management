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
							style={{ marginBottom: '50px' }}
						>
							Trở thành một hệ thống trường học xuất sắc và không ngừng phát
							triển – nơi trang bị cho học sinh nền tảng vững vàng thông qua sự
							kết hợp hài hòa giữa Chương trình Giáo dục Quốc gia và Chương
							trình Giáo dục Quốc tế, giúp các em thành công ở các bậc học cao
							hơn và trong cuộc sống, đồng thời vẫn gìn giữ những giá trị truyền
							thống của Việt Nam.
						</Typography>
						<Typography
							variant="body2"
							component="h3"
							className={classes.title}
						>
							Sứ mệnh
						</Typography>
						<Typography
							className={classes.desc}
							variant="body2"
							component="p"
							style={{ display: 'inline-block' }}
						>
							VAS sẽ xác định một cách rõ ràng các giá trị cốt lõi và tạo điều
							kiện tốt nhất cho tất cả các bên liên quan cống hiến nhằm đạt được
							tiêu chuẩn cao nhất của mỗi giá trị trên tinh thần cải tiến liên
							tục.
						</Typography>
						<Typography
							className={classes.desc}
							variant="body2"
							component="p"
							style={{ display: 'inline-block' }}
						>
							VAS sẽ kết hợp giảng dạy hài hòa Chương trình Giáo dục Quốc gia và
							Chương trình Giáo dục Quốc tế, giúp học sinh thông thạo cả tiếng
							Việt và tiếng Anh.
						</Typography>
						<Typography
							className={classes.desc}
							variant="body2"
							component="p"
							style={{ display: 'inline-block' }}
						>
							VAS sẽ xây dựng một tập thể xuất sắc các nhà quản lý, giáo viên và
							nhân viên trong nước và quốc tế - những người thực hiện một cách
							nhiệt huyết và hiệu quả những chương trình giáo dục của VAS.
						</Typography>
						<Typography
							className={classes.desc}
							variant="body2"
							component="p"
							style={{ display: 'inline-block' }}
						>
							VAS sẽ liên tục xây dựng mối giao tiếp thường xuyên và quan hệ gắn
							kết với phụ huynh mà ở đó phụ huynh đóng vai trò hỗ trợ đắc lực,
							giúp giáo viên phát triển tối đa tiềm năng của học sinh.
						</Typography>
						<Typography
							className={classes.desc}
							variant="body2"
							component="p"
							style={{ display: 'inline-block' }}
						>
							VAS sẽ thu hút ngày càng nhiều học sinh cũng như mở rộng số lượng
							cơ sở giáo dục trên nền tảng của trách nhiệm và phát triển bền
							vững.
						</Typography>
					</Container>
				</Fade>
			</div>
		</>
	)
}

export default Vision
