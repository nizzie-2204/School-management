import { Box, Button, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import vi_VN from '@react-pdf-viewer/locales/lib/vi_VN.json'
import pdfDOC from 'assets/doc/video.pdf'
import { useDropzone } from 'react-dropzone'
import Alert from 'components/Alert/Alert'

const ExamAnswer = (props) => {
	const classes = useStyles()
	const exam = props.location.state.exam
	const result = props.location.state.result

	// PDF
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

	// Dropzone
	const [files, setFiles] = useState([])
	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/*',
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			)
		},
	})

	const thumbs = files.map((file) => (
		<div key={file.name} className={classes.thumb}>
			<div className={classes.thumbInner}>
				<img src={file.preview} alt="thumb" className={classes.img} />
			</div>
		</div>
	))

	useEffect(
		() => () => {
			// Make sure to revoke the data uris to avoid memory leaks
			files.forEach((file) => URL.revokeObjectURL(file.preview))
		},
		[files]
	)

	useEffect(() => {
		if (props.location.state.result) {
			setFiles(props.location.state.result.examResultImages)
		}
	}, [props])

	const handleComment = () => {
		Alert.fire({
			icon: 'success',
			title: 'Nhận xét thành công',
		})
	}

	const handleScoring = () => {
		Alert.fire({
			icon: 'success',
			title: 'Cho điểm thành công',
		})
	}

	return (
		<Box className={classes.container}>
			<Box className={classes.header}>
				<Box className={classes.info}>
					<Typography variant="h5" className={classes.infoTitle}>
						Kiểm tra định kỳ
					</Typography>
					<div>
						<span>
							Môn: <strong>{exam.subjectId.name} - </strong>{' '}
						</span>
						<span>
							Thời gian làm bài: <strong>{`${exam.duration} phút`} </strong>{' '}
						</span>
					</div>
					<div>
						<span>
							Họ và thi thí sinh: <strong> {result.studentId.name} - </strong>
						</span>
						<span>
							Lớp: <strong>{result.studentId.classId.name}</strong>{' '}
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
					<Button
						variant="contained"
						className={classes.action}
						onClick={handleComment}
					>
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
						InputProps={{ inputProps: { min: 0, max: 10 } }}
					/>
					<Button
						variant="contained"
						className={classes.action}
						onClick={handleScoring}
					>
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
								fileUrl={exam.examFile[0].preview}
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

					<Box className={classes.answerQuestion}>
						<section className="container">
							{/* <div
								{...getRootProps({ className: 'dropzone' })}
								className={classes.dropzone}
							>
								<input {...getInputProps()} />
								<p>Kéo và thả một số hình ở đây hoặc nhấp để chọn hình</p>
							</div> */}
							<aside className={classes.thumbContainer}>{thumbs}</aside>
						</section>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default ExamAnswer
