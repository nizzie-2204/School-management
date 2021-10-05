import {
	Card,
	CardContent,
	Container,
	Grid,
	Typography,
} from '@material-ui/core'
import ClassIcon from '@material-ui/icons/Class'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import PanToolIcon from '@material-ui/icons/PanTool'
import RecentActorsIcon from '@material-ui/icons/RecentActors'
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball'
import Breadcrumb from 'components/Homepage/Breadcrumb/Breadcrumb'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Fade from 'react-reveal/Fade'
import { useStyles } from './styles'

const links = [
	{
		title: 'Trang chủ',
		path: '/',
	},
	{
		title: 'Chương trình',
		path: '/teacher',
	},
]

const StudyPrograms = () => {
	const classes = useStyles()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Helmet>
				<title>Tư vấn giáo dục - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Breadcrumb links={links} />
			<div className={classes.studyPrograms}>
				<Container maxWidth="xl" className={classes.container}>
					<Fade bottom cascade>
						<div className={classes.top}>
							<Typography className={classes.title} variant="h2">
								Chương trình học
							</Typography>
							<Grid container className={classes.grid}>
								<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
									<Card classes={{ root: classes.card }}>
										<h5 className={classes.topTitle}>
											Tiểu học Quốc gia (MOET)
										</h5>

										<CardContent className={classes.cardContent}>
											<Typography
												className={classes.topDesc}
												variant="body2"
												color="textSecondary"
												component="p"
											>
												Chương trình đào tạo bậc Tiểu học do Bộ Giáo dục và Đào
												tạo Việt Nam quy định. Chương trình được nhà trường xây
												dựng theo hướng "tối ưu hóa" nhằm giúp học sinh nắm vững
												kiến thức trọng tâm của từng cấp lớp, đủ khả năng đạt
												thành tích cao và lấy các bằng cấp do Bộ Giáo dục và Đào
												tạo Việt Nam quy định, đồng thời tiếp thu kiến thức một
												cách nhẹ nhàng, hiệu quả phù hợp với thể chất, lứa tuổi.
											</Typography>
											<Typography
												className={classes.topDesc}
												variant="body2"
												color="textSecondary"
												component="p"
											>
												Kết quả học tập và bằng cấp được Bộ GD &ĐT công nhận và
												cấp phát, có giá trị ngang bằng với bằng cấp của các
												trường công lập hàng đầu trong hệ thống giáo dục quốc
												gia.
											</Typography>
										</CardContent>
									</Card>
								</Grid>

								<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
									<Card classes={{ root: classes.card }}>
										<h5 className={classes.topTitle}>
											Tiểu học Quốc tế Cambridge (CAP)
										</h5>

										<CardContent className={classes.cardContent}>
											<Typography
												className={classes.topDesc}
												variant="body2"
												color="textSecondary"
												component="p"
											>
												Chương trình được áp dụng giảng dạy hoàn toàn bằng tiếng
												Anh, bao gồm 4 bộ môn: Toán, Tiếng Anh, Khoa học, Công
												nghệ thông tin và truyền thông (ICT).
											</Typography>
											<Typography
												className={classes.topDesc}
												variant="body2"
												color="textSecondary"
												component="p"
											>
												Chương trình tập trung thiết lập các kỹ năng ngôn ngữ,
												khoa học và tính toán tương đương với học sinh ở các
												quốc gia có nền giáo dục tiên tiến.
											</Typography>
											<Typography
												className={classes.topDesc}
												variant="body2"
												color="textSecondary"
												component="p"
											>
												Kết thúc lớp 5, học sinh dự thi lấy chứng chỉ Cambridge
												International Primary Checkpoint của Cơ quan Đánh giá
												Giáo dục Quốc tế thuộc Đại học Cambridge (CAIE), có giá
												trị vĩnh viễn và giúp học sinh dễ dàng chuyển sang các
												trường Trung học sử dụng tiếng Anh trên thế giới.
											</Typography>
										</CardContent>
									</Card>
								</Grid>

								<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
									<Card classes={{ root: classes.card }}>
										<h5 className={classes.topTitle}>Chương trình Tiếng Anh</h5>

										<CardContent className={classes.cardContent}>
											<Typography
												className={classes.topDesc}
												variant="body2"
												color="textSecondary"
												component="p"
											>
												Thuộc lộ trình 2 của chương trình giảng dạy tại hệ thống
												trường Quốc Tế Việt Úc (VAS) Chương trình tập trung
												thiết lập các kỹ năng ngôn ngữ, khoa học và tính toán
												tương đương với học sinh ở các quốc gia có nền giáo dục
												tiên tiến.
											</Typography>
											<Typography
												className={classes.topDesc}
												variant="body2"
												color="textSecondary"
												component="p"
											>
												Kết thúc lớp 5, học sinh dự thi lấy chứng chỉ Tiếng Anh
												Cambridge YLE (Young Learners English), tương đương với
												cấp độ A2 của Khung Tham Chiếu Ngôn Ngữ Cộng Đồng Chung
												Châu Âu (CEFR) được công nhận rộng rãi trên thế giới.
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</div>
						<div className={classes.bottom}>
							<Typography className={classes.title} variant="h2">
								Chăm sóc học sinh
							</Typography>
							<Grid container className={classes.grid}>
								<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
									<Card classes={{ root: classes.card2 }}>
										<ClassIcon className={classes.cardIcon} />
										<CardContent style={{ paddingTop: '0' }}>
											<Typography
												className={classes.cartTitle}
												variant="h5"
												color="textSecondary"
												component="p"
											>
												Sĩ số lớp thấp
											</Typography>
											<Typography
												className={classes.cartSubtitle}
												variant="body2"
												color="textSecondary"
												component="p"
											>
												Trung bình mỗi lớp 20-25 học sinh, giáo viên có thể quan
												tâm tới từng em, hướng dẫn các em ôn và làm bài tập ngay
												tại lớp. Nhờ đó các em tiếp thu bài học tốt hơn không bị
												căng thẳng với việc học thêm. Mỗi lớp có 1 giáo viên chủ
												nhiệm và các bảo mẫu, bảo vệ.
											</Typography>
										</CardContent>
									</Card>
								</Grid>

								<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
									<Card classes={{ root: classes.card2 }}>
										<PanToolIcon className={classes.cardIcon} />

										<CardContent style={{ paddingTop: '0' }}>
											<Typography
												className={classes.cartTitle}
												variant="h5"
												color="textSecondary"
												component="p"
											>
												Đảm bảo vệ sinh
											</Typography>
											<Typography
												className={classes.cartSubtitle}
												variant="body2"
												color="textSecondary"
												component="p"
											>
												Nhằm tạo điều kiện cho các em học sinh được sinh hoạt
												trong một môi trường sạch sẽ, hợp vệ sinh, đảm bảo an
												toàn cho sức khoẻ, các phòng học, nhà ăn, sân chơi, hồ
												bơi, nhà vệ sinh tại VAS luôn được giữ sạch và tẩy trùng
												theo quy trình chuẩn quốc tế.
											</Typography>
										</CardContent>
									</Card>
								</Grid>

								<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
									<Card classes={{ root: classes.card2 }}>
										<DirectionsBusIcon className={classes.cardIcon} />

										<CardContent style={{ paddingTop: '0' }}>
											<Typography
												className={classes.cartTitle}
												variant="h5"
												color="textSecondary"
												component="p"
											>
												Dịch vụ đưa đón
											</Typography>
											<Typography
												className={classes.cartSubtitle}
												variant="body2"
												color="textSecondary"
												component="p"
											>
												Nhà trường có dịch vụ đưa rước học sinh ở tất cả các cấp
												học trên địa bàn thành phố với tiêu chí an toàn và thân
												thiện. Học sinh được quan tâm, chăm sóc trong suốt quá
												trình di chuyển với đội ngũ tài xế và bảo mẫu hòa nhã,
												chuyên nghiệp của VAS.
											</Typography>
										</CardContent>
									</Card>
								</Grid>

								<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
									<Card classes={{ root: classes.card2 }}>
										<SportsBasketballIcon className={classes.cardIcon} />

										<CardContent style={{ paddingTop: '0' }}>
											<Typography
												className={classes.cartTitle}
												variant="h5"
												color="textSecondary"
												component="p"
											>
												Chăm sóc thể chất
											</Typography>
											<Typography
												className={classes.cartSubtitle}
												variant="body2"
												color="textSecondary"
												component="p"
											>
												VAS đáp ứng đầy đủ các tiện nghi, an toàn cho các hoạt
												động nghỉ ngủ, vệ sinh, vui chơi học tập để các em đảm
												bảo sức khỏe và phát triển thể chất lành mạnh nhất. Các
												bữa ăn có hàm lượng dinh dưỡng cao, đảm bảo tiêu chuẩn
												vệ sinh an toàn thực phẩm.
											</Typography>
										</CardContent>
									</Card>
								</Grid>

								<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
									<Card classes={{ root: classes.card2 }}>
										<LocalHospitalIcon className={classes.cardIcon} />

										<CardContent style={{ paddingTop: '0' }}>
											<Typography
												className={classes.cartTitle}
												variant="h5"
												color="textSecondary"
												component="p"
											>
												Chăm sóc y tế
											</Typography>
											<Typography
												className={classes.cartSubtitle}
												variant="body2"
												color="textSecondary"
												component="p"
											>
												Ngoài các chương trình khám sức khỏe định kỳ gồm khám
												tổng quát, khám nha, khám mắt, tầm soát béo phì… tất cả
												các cơ sở của VAS đều có đội ngũ nhân viên y tế thường
												trực để chăm sóc sức khỏe hằng ngày cho học sinh. Đội
												ngũ chuyên gia tư vấn tâm lý để cung cấp những tư vấn cơ
												bản nhất cho học sinh khi cần thiết
											</Typography>
										</CardContent>
									</Card>
								</Grid>

								<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
									<Card classes={{ root: classes.card2 }}>
										<RecentActorsIcon className={classes.cardIcon} />

										<CardContent style={{ paddingTop: '0' }}>
											<Typography
												className={classes.cartTitle}
												variant="h5"
												color="textSecondary"
												component="p"
											>
												Liên lạc phụ huynh
											</Typography>
											<Typography
												className={classes.cartSubtitle}
												variant="body2"
												color="textSecondary"
												component="p"
											>
												Mối liên lạc chặt chẽ với phụ huynh trong việc chăm sóc
												và giáo dục các em được đặc biệt coi trọng. Ngoài sổ báo
												bài hàng ngày, các cuộc gặp gỡ với phụ huynh ở mỗi học
												kỳ, giáo viên Việt Nam và nước ngoài sẽ liên tục cập
												nhật thông tin mới nhất về tình trạng sức khỏe, học lực
												và tâm sinh lý của học sinh.
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</div>
					</Fade>
				</Container>
			</div>
		</>
	)
}

export default StudyPrograms
