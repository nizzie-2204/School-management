import {
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
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Modal from '@material-ui/core/Modal'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { withStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import useStyles from './styles'
import { useSnackbar } from 'notistack'

const GreenRadio = withStyles({
	root: {
		color: '#dcdbdb',
		'&$checked': {
			color: '#3254ac',
		},
	},
	checked: {},
})((props) => <Radio color="default" {...props} />)

const AddEditAccount = ({ open, handleClose }) => {
	const classes = useStyles()
	const { enqueueSnackbar, closeSnackbar } = useSnackbar()

	const [selectedDate, setSelectedDate] = useState(new Date())
	const handleDateChange = (date) => {
		setSelectedDate(date)
	}

	const [value, setValue] = useState()
	const handleChange = (e) => {
		setValue(e.target.value)
	}

	const [age, setAge] = useState('')
	const handleChangeAge = (e) => {
		setAge(e.target.value)
	}

	const handleAddAccount = (e) => {
		e.preventDefault()
		handleClose()
		enqueueSnackbar('Thêm tài khoản thành công', {
			variant: 'success',
			autoHideDuration: 3000,
		})
	}

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 100,
			}}
		>
			<Fade in={open}>
				<form
					className={classes.form}
					noValidate
					autoComplete="off"
					onSubmit={handleAddAccount}
				>
					<Typography className={classes.formTitle} variant="h5">
						Thêm tài khoản học sinh
					</Typography>
					<div className={classes.inputGroup}>
						<TextField
							className={classes.root}
							label="Họ tên"
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
						/>
						<TextField
							className={classes.root}
							label="Địa chỉ"
							type="email"
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
						<TextField
							label="Ngày sinh"
							type="date"
							className={classes.root}
							variant="outlined"
							InputLabelProps={{
								shrink: true,
								classes: {
									root: classes.cssLabel,
									// focused: classes.cssFocused,
								},
							}}
							InputProps={{
								classes: {
									input: classes.resize,
								},
							}}
						/>
						<FormControl component="fieldset" className={classes.radioGroup}>
							<Typography variant="label">Giới tính</Typography>
							<RadioGroup row aria-label="position" name="position">
								<FormControlLabel
									value="Nam"
									control={<GreenRadio />}
									label="Nam"
									onChange={handleChange}
								/>
								<FormControlLabel
									value="Nữ"
									control={<GreenRadio />}
									label="Nữ"
									onChange={handleChange}
								/>
							</RadioGroup>
						</FormControl>
					</div>
					<div className={classes.inputGroup}>
						<FormControl variant="outlined" className={classes.select}>
							<InputLabel
								id="demo-simple-select-outlined-label"
								style={{ color: '#000' }}
							>
								Lớp
							</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								value={age}
								onChange={handleChangeAge}
								label="Lớp"
							>
								<MenuItem value={10}>1A</MenuItem>
								<MenuItem value={20}>2B</MenuItem>
								<MenuItem value={30}>3A</MenuItem>
							</Select>
						</FormControl>
					</div>
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
