import { Box, Button, TextField, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import vi_VN from '@react-pdf-viewer/locales/lib/vi_VN.json'
import pdfDOC from 'assets/doc/video.pdf'
const ExamAnswer = () => {
	const classes = useStyles()
	const defaultLayoutPluginInstance = defaultLayoutPlugin({
		toolbarPlugin: {
			fullScreenPlugin: {
				// Zoom to fit the screen after entering and exiting the full screen mode
				onEnterFullScreen: (zoom) => {
					zoom(SpecialZoomLevel.PageFit)
				},
				onExitFullScreen: (zoom) => {
					zoom(SpecialZoomLevel.PageFit)
				},
			},
		},
	})
	return (
		<Box className={classes.container}>
			<Box className={classes.header}>
				<Box className={classes.info}>
					<Typography variant="h5" className={classes.infoTitle}>
						Kiểm tra định kỳ
					</Typography>
					<div>
						<span>
							Môn: <strong>Tin học - </strong>{' '}
						</span>
						<span>
							Thời gian làm bài: <strong>15 phút</strong>{' '}
						</span>
					</div>
					<div>
						<span>
							Họ và thi thí sinh: <strong> Nguyễn Văn A - </strong>
						</span>
						<span>
							Lớp: <strong>1A1</strong>{' '}
						</span>
					</div>
				</Box>
				<Button
					variant="contained"
					className={classes.submit}
					startIcon={
						<FontAwesomeIcon
							icon={faHome}
							style={{
								marginRight: 5,

								marginBottom: 5,
							}}
						/>
					}
				>
					Trang chủ
				</Button>
			</Box>
			<Box className={classes.teacher}>
				<Box className={classes.scoreContainer}>
					<Typography variant="h5" className={classes.scoreTitle}>
						Điểm
					</Typography>
					<span>
						<strong>0</strong>/10
					</span>
				</Box>
				<Box className={classes.comment} style={{ margin: '0 70px' }}>
					<Typography variant="h5" className={classes.commentTitle}>
						Nhận xét của giáo viên
					</Typography>
					<TextField
						variant="outlined"
						type="textarea"
						className={classes.textField}
					/>
					<Button variant="contained" className={classes.action}>
						Nhận xét
					</Button>
				</Box>
				<Box className={classes.score2Container}>
					<Typography variant="h5" className={classes.commentTitle}>
						Điểm số
					</Typography>
					<TextField
						variant="outlined"
						type="number"
						className={classes.textField}
					/>
					<Button variant="contained" className={classes.action}>
						Cho điểm
					</Button>
				</Box>
			</Box>
			<Box className={classes.main}>
				<Box className={classes.examContainer}>
					<Typography variant="h5" className={classes.examTitle}>
						Đề thi
					</Typography>

					<Box className={classes.examQuestion}>
						<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
							<Viewer
								fileUrl={pdfDOC}
								plugins={[defaultLayoutPluginInstance]}
								localization={vi_VN}
							/>
						</Worker>
					</Box>
				</Box>
				<Box className={classes.answer}>
					<Typography variant="h5" className={classes.examTitle}>
						Đáp án
					</Typography>

					<Box className={classes.examQuestion}></Box>
				</Box>
			</Box>
		</Box>
	)
}

export default ExamAnswer
