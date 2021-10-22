import { yupResolver } from '@hookform/resolvers/yup'
import {
	Box,
	Button,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import FormControl from '@material-ui/core/FormControl'
import Modal from '@material-ui/core/Modal'
import 'date-fns'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import useStyles from './styles'
import formatISO from 'date-fns/formatISO'
import { useDropzone } from 'react-dropzone'
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import vi_VN from '@react-pdf-viewer/locales/lib/vi_VN.json'
import pdfDOC from 'assets/doc/de-thi.pdf'

const schema = yup.object().shape({
	name: yup.string().required(),
})

const AddEditAccount = ({ open, handleClose, student }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { enqueueSnackbar } = useSnackbar()
	const subjects = useSelector((state) => state.subjects.subjects)

	const { register, handleSubmit, reset, control } = useForm({
		resolver: yupResolver(schema),
	})

	const [error, setError] = useState(null)

	useEffect(() => {
		console.log(formatISO(new Date()).toString().slice(0, -9))
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
					style={{ maxHeight: '575px', overflowY: 'scroll' }}
					autoComplete="off"
					// onSubmit={}
				>
					<Typography className={classes.formTitle} variant="h5">
						Thêm mới kỳ thi
					</Typography>

					<div className={classes.inputGroup}>
						<TextField
							className={classes.root}
							label="Tên kỳ thi"
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
							defaultValue={student?.name}
							{...register('name')}
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
								// defaultValue={currClass?.grade || thisClass}
								// onChange={handleChangeClass}
								required
							>
								<MenuItem value="1">Giữa học kỳ 1</MenuItem>
								<MenuItem value="2">Cuối học kỳ 1</MenuItem>
								<MenuItem value="1">Giữa học kỳ 2</MenuItem>
								<MenuItem value="2">Cuối học kỳ 2</MenuItem>
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
								// defaultValue={currClass?.grade || thisClass}
								// onChange={handleChangeClass}
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
								// value={subject}
								// onChange={handleChangeSubject}
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

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Lưu
					</Button>
				</form>
			</Fade>
		</Modal>
	)
}

export default AddEditAccount
