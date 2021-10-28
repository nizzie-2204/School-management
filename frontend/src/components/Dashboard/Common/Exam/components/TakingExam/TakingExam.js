import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Typography } from '@material-ui/core'
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import vi_VN from '@react-pdf-viewer/locales/lib/vi_VN.json'
import pdfDOC from 'assets/doc/de-thi.pdf'
import React, { useEffect, useState, useRef } from 'react'
import useStyles from './styles'
import { useDropzone } from 'react-dropzone'
import timePNG from 'assets/images/time.png'
import Alert from 'components/Alert/Alert'
import { useSelector } from 'react-redux'
import { addExamResult } from '../../examResultSlice'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { useHistory } from 'react-router'
import { updateExam } from '../../examSlice'
import { upload } from '../../examSlice'
import { addMinutes } from 'date-fns'
const TakingExam = (props) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const history = useHistory()
	const user = useSelector((state) => state.auth.user)
	const exam = props.location.state.exam

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

	// Timer

	const [timer, setTimer] = useState(() => {
		const endAt = Math.floor(
			addMinutes(
				new Date(props.location.state.exam.startAt),
				props.location.state.exam.duration
			).getTime() / 60000
		)
		const currTime = Math.floor(new Date().getTime() / 60000)
		const now = (endAt - currTime) * 60
		return localStorage.getItem('timerLS') || now
	})
	const [minute, setMinute] = useState(() => {
		const endAt = Math.floor(
			addMinutes(
				new Date(props.location.state.exam.startAt),
				props.location.state.exam.duration
			).getTime() / 60000
		)
		const currTime = Math.floor(new Date().getTime() / 60000)
		const now = (endAt - currTime) * 60

		let result = Math.floor(localStorage.getItem('timerLS') || now) % 60
		if (result.toString().length === 1) {
			result = `0${result}`
		}
		return result
	})
	const [second, setSecond] = useState(() => {
		const endAt = Math.floor(
			addMinutes(
				new Date(props.location.state.exam.startAt),
				props.location.state.exam.duration
			).getTime() / 60000
		)
		const currTime = Math.floor(new Date().getTime() / 60000)
		const now = (endAt - currTime) * 60
		let result = (localStorage.getItem('timerLS') || now) % 60

		if (result.toString().length === 1) {
			result = `0${result}`
		}
		return result
	})

	useEffect(() => {
		if (timer >= 0) {
			const timerInterval = setInterval(() => {
				if (!localStorage.getItem('timerLS')) {
					localStorage.setItem('timerLS', props.location.state.exam.duration)
					console.log(localStorage.getItem('timerLS'))
				}

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
				localStorage.setItem('timerLS', timer - 1)
			}, 1000)

			return () => {
				clearInterval(timerInterval)
			}
		} else {
			localStorage.removeItem('timerLS')
			handleSubmitExam()
		}
	}, [timer])

	// Dropzone
	const [files, setFiles] = useState([])
	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/*',
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map(
					(file) => (
						console.log(file),
						Object.assign(file, {
							preview: URL.createObjectURL(file),
						})
					)
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

	const handleSubmitExam = () => {
		const action = upload(files)
		dispatch(action)
			.then(unwrapResult)
			.then((res) => {
				const data = {
					studentId: user._id,
					examResultImages: res,
					examId: exam._id,
				}
				const action = addExamResult(data)
				dispatch(action)
					.then(unwrapResult)
					.then((res) => {
						console.log(res)
						const action = updateExam({
							id: exam._id,
							examResultId: res.data._id,
						})
						dispatch(action)
							.then(unwrapResult)
							.then(() => {
								Alert.fire({
									icon: 'success',
									title: 'Nộp bài thi thành công',
								})
							})
							.catch((error) => console.log(error))
					})
					.catch((error) => console.log(error))
			})
			.catch((error) => console.log(error))
	}

	return (
		<Box className={classes.container}>
			<Box className={classes.header}>
				<Box className={classes.timer}>
					<Typography variant="subtitle1" className={classes.timerTitle}>
						Thời gian còn lại
					</Typography>
					<Typography variant="h5" className={classes.timerSubtitle}>
						<img src={timePNG} alt="time" className={classes.timerIcon} />
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
					className={
						timer <= -1
							? `${classes.submit} ${classes.opacity}`
							: `${classes.submit}`
					}
					startIcon={
						<FontAwesomeIcon icon={faFileAlt} style={{ marginRight: 5 }} />
					}
					onClick={handleSubmitExam}
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

					<Box className={classes.answerQuestion}>
						<section className="container">
							{timer >= 0 && (
								<div
									{...getRootProps({ className: 'dropzone' })}
									className={classes.dropzone}
								>
									<input {...getInputProps()} />
									<p>Kéo và thả một số hình ở đây hoặc nhấp để chọn hình</p>
								</div>
							)}
							<aside className={classes.thumbContainer}>{thumbs}</aside>
						</section>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default TakingExam
