import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Typography } from '@material-ui/core'
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import vi_VN from '@react-pdf-viewer/locales/lib/vi_VN.json'
import pdfDOC from 'assets/doc/video.pdf'
import React, { useEffect, useState } from 'react'
import useStyles from './styles'
const TakingExam = () => {
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

	// Timer
	const [timer, setTimer] = useState(10)
	const [minute, setMinute] = useState(() => {
		let result = Math.floor(timer / 60)
		if (result.toString().length === 1) {
			result = `0${result}`
		}
		return result
	})
	const [second, setSecond] = useState(timer % 60)

	const handleSubmitExam = () => {
		alert('Nộp bài thành công!')
	}

	useEffect(() => {
		if (Number(minute) >= 0 && Number(second) >= 1) {
			const timerInterval = setInterval(() => {
				let computedSecond
				if (Number(computedSecond) < 1) {
					computedSecond = 60
				} else computedSecond = timer % 60

				const computedMinute = Math.floor(timer / 60)

				const secondString =
					computedSecond.toString().length === 1
						? `0${computedSecond}`
						: computedSecond
				const minuteString =
					computedMinute.toString().length === 1
						? `0${computedMinute}`
						: computedMinute

				setSecond(secondString)
				setMinute(minuteString)

				setTimer(timer - 1)
			}, 1000)

			return () => {
				clearInterval(timerInterval)
			}
		} else handleSubmitExam()
	}, [timer])

	return (
		<Box className={classes.container}>
			<Box className={classes.header}>
				<Box className={classes.timer}>
					<Typography variant="subtitle1" className={classes.timerTitle}>
						Thời gian còn lại
					</Typography>
					<Typography variant="h5" className={classes.timerSubtitle}>
						{minute}:{second}
					</Typography>
				</Box>
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
						<FontAwesomeIcon icon={faFileAlt} style={{ marginRight: 5 }} />
					}
				>
					Nộp bài
				</Button>
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

export default TakingExam
