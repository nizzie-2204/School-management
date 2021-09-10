import {
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@material-ui/core';
import image4 from 'assets/images/academy.png';
import image3 from 'assets/images/class.png';
import image2 from 'assets/images/education.png';
import Breadcrumb from 'components/Homepage/Breadcrumb/Breadcrumb';
import Footer from 'components/Homepage/Footer/Footer';
import Header from 'components/Homepage/Header/Header';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useStyles } from './styles';
import Fade from 'react-reveal/Fade';

const StudyPrograms = () => {
	const links = [
		{
			title: 'Trang chủ',
			path: '/',
		},
		{
			title: 'Chương trình',
			path: '/teacher',
		},
		{
			title: 'Tư vấn giáo dục',
			path: '/programs',
		},
	];
	const classes = useStyles();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Helmet>
				<title>Tư vấn giáo dục - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Header />
			<Breadcrumb links={links} />
			<Container maxWidth="xl" className={classes.container}>
				<Fade bottom cascade>
					<Typography className={classes.title} variant="h2">
						Các chương trình học
					</Typography>
					<Grid container className={classes.grid}>
						<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
							<Card classes={{ root: classes.card }}>
								<div className={classes.cardHeader}>
									<CardMedia
										component="img"
										className={classes.cardMedia}
										image={image2}
										title="Teacher"
									/>
								</div>
								<span className={classes.cardDivider}></span>
								<CardContent style={{ paddingTop: '0' }}>
									<Typography
										className={classes.cartTitle}
										variant="h5"
										color="textSecondary"
										component="p"
									>
										Kỹ Năng Học Tập
									</Typography>
									<Typography
										className={classes.cartSubtitle}
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Trái với quan điểm chung của số đông, Lorem Ipsum không phải
										chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
										gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất
										hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng
										hơn 2000 tuổi.
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
							<Card classes={{ root: classes.card }}>
								<div
									className={classes.cardHeader}
									style={{ backgroundColor: '#3db2d5' }}
								>
									<CardMedia
										component="img"
										className={classes.cardMedia}
										image={image3}
										title="Teacher"
									/>
								</div>
								<span className={classes.cardDivider}></span>
								<CardContent style={{ paddingTop: '0' }}>
									<Typography
										className={classes.cartTitle}
										variant="h5"
										color="textSecondary"
										component="p"
									>
										Giáo Dục Kĩ Năng Sống
									</Typography>
									<Typography
										className={classes.cartSubtitle}
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Trái với quan điểm chung của số đông, Lorem Ipsum không phải
										chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
										gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất
										hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng
										hơn 2000 tuổi.
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
							<Card classes={{ root: classes.card }}>
								<div
									className={classes.cardHeader}
									style={{ backgroundColor: '#dd1146' }}
								>
									<CardMedia
										component="img"
										className={classes.cardMedia}
										image={image4}
										title="Teacher"
									/>
								</div>
								<span className={classes.cardDivider}></span>
								<CardContent style={{ paddingTop: '0' }}>
									<Typography
										className={classes.cartTitle}
										variant="h5"
										color="textSecondary"
										component="p"
									>
										Khoa Học
									</Typography>
									<Typography
										className={classes.cartSubtitle}
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Trái với quan điểm chung của số đông, Lorem Ipsum không phải
										chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
										gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất
										hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng
										hơn 2000 tuổi.
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
							<Card classes={{ root: classes.card }}>
								<div className={classes.cardHeader}>
									<CardMedia
										component="img"
										className={classes.cardMedia}
										image={image4}
										title="Teacher"
									/>
								</div>
								<span className={classes.cardDivider}></span>
								<CardContent style={{ paddingTop: '0' }}>
									<Typography
										className={classes.cartTitle}
										variant="h5"
										color="textSecondary"
										component="p"
									>
										Kết Nối Xã Hội
									</Typography>
									<Typography
										className={classes.cartSubtitle}
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Trái với quan điểm chung của số đông, Lorem Ipsum không phải
										chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
										gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất
										hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng
										hơn 2000 tuổi.
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
							<Card classes={{ root: classes.card }}>
								<div
									className={classes.cardHeader}
									style={{ backgroundColor: '#3db2d5' }}
								>
									<CardMedia
										component="img"
										className={classes.cardMedia}
										image={image3}
										title="Teacher"
									/>
								</div>
								<span className={classes.cardDivider}></span>
								<CardContent style={{ paddingTop: '0' }}>
									<Typography
										className={classes.cartTitle}
										variant="h5"
										color="textSecondary"
										component="p"
									>
										Âm Nhạc
									</Typography>
									<Typography
										className={classes.cartSubtitle}
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Trái với quan điểm chung của số đông, Lorem Ipsum không phải
										chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
										gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất
										hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng
										hơn 2000 tuổi.
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
							<Card classes={{ root: classes.card }}>
								<div
									className={classes.cardHeader}
									style={{ backgroundColor: '#dd1146' }}
								>
									<CardMedia
										component="img"
										className={classes.cardMedia}
										image={image2}
										title="Teacher"
									/>
								</div>
								<span className={classes.cardDivider}></span>
								<CardContent style={{ paddingTop: '0' }}>
									<Typography
										className={classes.cartTitle}
										variant="h5"
										color="textSecondary"
										component="p"
									>
										Toán Học
									</Typography>
									<Typography
										className={classes.cartSubtitle}
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Trái với quan điểm chung của số đông, Lorem Ipsum không phải
										chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
										gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất
										hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng
										hơn 2000 tuổi.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Fade>
			</Container>

			<Footer />
		</>
	);
};

export default StudyPrograms;
