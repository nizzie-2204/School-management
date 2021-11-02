import { yupResolver } from '@hookform/resolvers/yup'
import {
	Box,
	Button,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	CircularProgress,
	Typography,
} from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import FormControl from '@material-ui/core/FormControl'
import Modal from '@material-ui/core/Modal'
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import vi_VN from '@react-pdf-viewer/locales/lib/vi_VN.json'
import { unwrapResult } from '@reduxjs/toolkit'
import Alert from 'components/Alert/Alert'
import { getSubjects } from 'components/Dashboard/Common/Subject/subjectSlice'
import 'date-fns'
import formatISO from 'date-fns/formatISO'
import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { addExam, updateExam, upload } from '../../examSlice'
import useStyles from './styles'

const schema = yup.object().shape({
	name: yup.string().required(),
})

const AddEditAccount = ({ open, handleClose, thisExam }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const subjects = useSelector((state) => state.subjects.subjects)

	const { register, handleSubmit, reset } = useForm({
		resolver: yupResolver(schema),
	})

	const [error, setError] = useState(null)

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
		accept: 'application/pdf',
		multiple: false,
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

	const removeAllFiles = () => {
		setFiles([])
	}

	const thumbs = files.map((file) => (
		<div key={file.name} className={classes.thumb}>
			<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
				<Viewer
					fileUrl={file.preview}
					plugins={[defaultLayoutPluginInstance]}
					localization={vi_VN}
				/>
			</Worker>
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
		const action = getSubjects()
		dispatch(action)
			.then(unwrapResult)
			.catch((error) => console.error(error))
	}, [dispatch])

	const [subject, setSubject] = useState()
	const handleChangeSubject = (e) => {
		setSubject(e.target.value)
	}

	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleAddExam = async (data) => {
		if (files.length === 0) {
			setError('Chưa chọn đề thi')
			return
		}
		setIsSubmitting(true)
		const action = upload(files)
		dispatch(action)
			.then(unwrapResult)
			.then((res) => {
				const action = addExam({
					...data,
					examFile: res,
					subjectId: subject,
				})
				dispatch(action)
					.then(unwrapResult)
					.then((res) => {
						setIsSubmitting(false)
						handleClose()
						Alert.fire({
							icon: 'success',
							title: 'Thêm môn thi thành công',
						})
						setSubject()
						setFiles([])
						reset()
					})
			})
	}

	const handleUpdateExam = (data) => {
		if (files[0].preview === thisExam.examFile[0].preview) {
			setIsSubmitting(true)
			const action = updateExam({
				...data,
				subjectId: subject,
				id: thisExam._id,
			})
			dispatch(action)
				.then(unwrapResult)
				.then((res) => {
					setIsSubmitting(false)
					Alert.fire({
						icon: 'success',
						title: 'Chỉnh sửa môn thi thành công',
					})
					handleClose()
				})
		} else {
			setIsSubmitting(true)
			const action = upload(files)
			dispatch(action)
				.then(unwrapResult)
				.then((res) => {
					const action = updateExam({
						...data,
						examFile: res,
						subjectId: subject,
						id: thisExam._id,
					})
					dispatch(action)
						.then(unwrapResult)
						.then((res) => {
							setIsSubmitting(false)
							Alert.fire({
								icon: 'success',
								title: 'Chỉnh sửa môn thi thành công',
							})
							handleClose()
						})
				})
		}
	}

	useEffect(() => {
		if (thisExam) {
			reset({
				name: thisExam?.name,
				semester: thisExam?.semester,
				startAt: formatISO(new Date(thisExam?.startAt)).toString().slice(0, -9),
				duration: thisExam?.duration,
				grade: thisExam?.grade,
			})
			setFiles(thisExam.examFile)
			setSubject(thisExam?.subjectId?._id)
		}
	}, [thisExam])

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={open}
			onClose={() => {
				handleClose()
				removeAllFiles()
			}}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 100,
			}}
		>
			<Fade in={open}>
				<form
					className={classes.form}
					autoComplete="off"
					onSubmit={
						thisExam
							? handleSubmit(handleUpdateExam)
							: handleSubmit(handleAddExam)
					}
				>
					<Typography className={classes.formTitle} variant="h5">
						Thêm mới bài thi
					</Typography>

					<div className={classes.inputGroup}>
						<TextField
							className={classes.root}
							label="Tên môn thi"
							type="text"
							variant="outlined"
							InputLabelProps={{
								style: { color: '#000' },
							}}
							InputProps={{
								classes: {
									input: classes.resize,
								},
							}}
							// defaultValue={student?.name}
							{...register('name')}
							required
						/>
						<FormControl variant="outlined" className={classes.select}>
							<InputLabel
								id="demo-simple-select-outlined-label"
								style={{ color: '#000' }}
							>
								Loại kỳ thi
							</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								defaultValue={thisExam?.semester}
								// onChange={handleChangeType}
								// value={type}
								required
								{...register('semester')}
							>
								<MenuItem value="Giữa học kỳ 1">Giữa học kỳ 1</MenuItem>
								<MenuItem value="Cuối học kỳ 1">Cuối học kỳ 1</MenuItem>
								<MenuItem value="Giữa học kỳ 2">Giữa học kỳ 2</MenuItem>
								<MenuItem value="Cuối học kỳ 2">Cuối học kỳ 2</MenuItem>
							</Select>
						</FormControl>
					</div>

					<div className={classes.inputGroup}>
						<TextField
							className={classes.root}
							label="Thời gian bắt đầu"
							type="datetime-local"
							variant="outlined"
							InputLabelProps={{
								style: { color: '#000' },
							}}
							InputProps={{
								classes: {
									input: classes.resize,
								},
							}}
							defaultValue={formatISO(new Date()).toString().slice(0, -9)}
							{...register('startAt')}
							required
						/>
						<TextField
							className={classes.root}
							label="Thời gian làm bài"
							type="number"
							variant="outlined"
							InputLabelProps={{
								style: { color: '#000' },
							}}
							InputProps={{
								classes: {
									input: classes.resize,
								},
							}}
							{...register('duration')}
							required
						/>
					</div>

					<div className={classes.inputGroup}>
						<FormControl variant="outlined" className={classes.select}>
							<InputLabel
								id="demo-simple-select-outlined-label"
								style={{ color: '#000' }}
							>
								Khối
							</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								defaultValue={thisExam?.grade}
								// onChange={handleChangeGrade}
								// value={grade}
								label="Khối"
								required
								{...register('grade')}
							>
								<MenuItem value="1">1</MenuItem>
								<MenuItem value="2">2</MenuItem>
								<MenuItem value="3">3</MenuItem>
								<MenuItem value="4">4</MenuItem>
								<MenuItem value="5">5</MenuItem>
							</Select>
						</FormControl>
						<FormControl variant="outlined" className={classes.select}>
							<InputLabel
								id="demo-simple-select-outlined-label"
								style={{ color: '#000' }}
							>
								Môn học
							</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								value={subject}
								onChange={handleChangeSubject}
								required
							>
								{subjects?.map((subject) => {
									return (
										<MenuItem key={subject._id} value={subject._id}>
											{subject.name}
										</MenuItem>
									)
								})}
							</Select>
						</FormControl>
					</div>

					<div
						className={classes.inputGroup}
						style={{ justifyContent: 'flex-start' }}
					>
						<Typography variant="subtitle1" style={{ marginRight: 20 }}>
							Đề thi
						</Typography>

						<Box className={classes.answerQuestion}>
							<section className="container">
								<div
									{...getRootProps({ className: 'dropzone' })}
									className={classes.dropzone}
								>
									<input {...getInputProps()} />
									<p>Chọn file (PDF)</p>
								</div>
							</section>
						</Box>
					</div>
					<aside className={classes.thumbContainer}>{thumbs}</aside>

					{error && <p className={classes.error}>{error}</p>}

					<div style={{ alignSelf: 'end' }}>
						<Button className={classes.cancel} onClick={handleClose}>
							Hủy bỏ
						</Button>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={`${classes.submit} ${isSubmitting && classes.opacity}`}
						>
							{isSubmitting ? (
								<CircularProgress
									variant="indeterminate"
									disableShrink
									className={classes.top}
									classes={{
										circle: classes.circle,
									}}
									size={24}
									thickness={4}
								/>
							) : (
								'Lưu'
							)}
						</Button>
					</div>
				</form>
			</Fade>
		</Modal>
	)
}

export default AddEditAccount
