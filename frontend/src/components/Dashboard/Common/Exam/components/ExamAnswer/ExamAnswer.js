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
import { useForm } from 'react-hook-form'
import { updateExamResult } from '../../examResultSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const ExamAnswer = (props) => {
	const classes = useStyles()
	const user = useSelector((state) => state.auth.user)
	const exam = props.location.state.exam
	const result = props.location.state.result
	const dispatch = useDispatch()
	const { register, handleSubmit, reset } = useForm()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

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

		if (props.location.state.exam.examResultImages) {
			setFiles(props.location.state.exam.examResultImages)
		}
	}, [props])

	const handleComment = (data) => {
		const action = updateExamResult({ id: result._id, comment: data.comment })
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Alert.fire({
					icon: 'success',
					title: 'Nhận xét thành công',
				})
			})
			.catch((error) => console.log(error))
	}

	const handleScoring = (data) => {
		const action = updateExamResult({ id: result._id, score: data.score })
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Alert.fire({
					icon: 'success',
					title: 'Cho điểm thành công',
				})
			})
			.catch((error) => console.log(error))
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
							Môn:
							<strong>
								{` ${exam?.subjectId?.name || exam?.examId?.subjectId?.name}`} -
							</strong>
						</span>
						<span>
							Thời gian làm bài:
							<strong>{` ${
								exam?.duration || exam.examId.duration
							} phút`}</strong>
						</span>
					</div>
					<div>
						<span>
							Họ và thi thí sinh:
							<strong>
								{` ${result?.studentId?.name || exam.studentId.name} - `}
							</strong>
						</span>
						<span>
							Lớp:
							<strong>{` ${
								exam?.studentId?.classId?.name ||
								result?.studentId?.classId?.name
							}`}</strong>
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
						<strong>{result?.score || exam?.score || 0}</strong>/10
					</span>
				</Box>
				<form
					className={classes.comment}
					style={{ margin: '0 70px' }}
					onSubmit={handleSubmit(handleComment)}
				>
					<Typography variant="h5" className={classes.commentTitle}>
						Nhận xét của giáo viên
					</Typography>
					<TextField
						variant="outlined"
						type="textarea"
						className={classes.textField}
						{...register('comment')}
						defaultValue={result?.comment || exam.comment}
						disabled={user.role === 'student'}
					/>
					{user.role === 'teacher' && (
						<Button
							variant="contained"
							className={classes.action}
							type="submit"
						>
							Nhận xét
						</Button>
					)}
				</form>
				<form
					className={classes.score2Container}
					onSubmit={handleSubmit(handleScoring)}
				>
					<Typography variant="h5" className={classes.commentTitle}>
						Điểm số
					</Typography>
					<TextField
						variant="outlined"
						type="number"
						className={classes.textField}
						InputProps={{ inputProps: { min: 0, max: 10 } }}
						{...register('score')}
						defaultValue={result?.score || exam.score}
						disabled={user.role === 'student'}
					/>
					{user.role === 'teacher' && (
						<Button
							variant="contained"
							className={classes.action}
							type="submit"
						>
							Cho điểm
						</Button>
					)}
				</form>
			</Box>
			<Box className={classes.main}>
				<Box className={classes.examContainer}>
					<Typography variant="h5" className={classes.examTitle}>
						Đề thi
					</Typography>

					<Box className={classes.examQuestion}>
						<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
							<Viewer
								fileUrl={
									exam?.examFile?.[0]?.preview ||
									exam?.examId?.examFile?.[0]?.preview
								}
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
