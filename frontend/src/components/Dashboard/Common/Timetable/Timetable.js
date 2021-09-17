import {
	Box,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@material-ui/core'
import Breadcrumb from 'components/Dashboard/Common/Breadcrumb/Breadcrumb'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Select from 'react-select'
import useStyles from './styles'
import startOfWeek from 'date-fns/startOfWeek'
import addDays from 'date-fns/addDays'

function createData(session, name, calories, time, fat, carbs, protein) {
	return { session, name, calories, time, fat, carbs }
}

const rows = [
	createData('7:30 - 8:05', 'Chào cờ', 'Chào cờ', 'Thể dục', 'Toán', 'Toán'),
	createData('7:30 - 8:05', 'Chào cờ', 'Chào cờ', 'Thể dục', 'Toán', 'Toán'),
	createData('7:30 - 8:05', 'Chào cờ', 'Chào cờ', 'Thể dục', 'Toán', 'Toán'),
	createData('7:30 - 8:05', 'Chào cờ', 'Chào cờ', 'Thể dục', 'Toán', 'Toán'),
	createData('7:30 - 8:05', 'Chào cờ', 'Chào cờ', 'Thể dục', 'Toán', 'Toán'),
]

const links = [
	{
		title: 'Dashboard',
		path: '/dashboard/overview',
	},
	{
		title: 'Thời khóa biểu',
		path: '/dashboard/timetable',
	},
]

// React select
const options = [
	{ value: 'a', label: '1A' },
	{ value: 'b', label: '2C' },
	{ value: 'c', label: '3A' },
	{ value: 'd', label: '3C' },
	{ value: 'e', label: '4A' },
	{ value: 'f', label: '5B' },
]

const Timetable = () => {
	const classes = useStyles()
	const [selectedOption, setselectedOption] = useState()

	const handleChange = (selectedOption) => {
		setselectedOption(selectedOption)
	}

	const days = []

	for (let i = 1; i < 6; i++) {
		const day = addDays(
			startOfWeek(new Date(), {
				weekStartsOn: 1,
			}),
			i
		)
		days.push(day)
	}

	return (
		<>
			<Helmet>
				<title>Thời khóa biểu - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Box className={classes.main}>
				<Breadcrumb links={links} />

				<Box className={classes.content}>
					<Box className={classes.top}>
						<Typography variant="span" className={classes.title}>
							Thời khóa biểu
						</Typography>
						<Box>
							<Select
								value={selectedOption}
								onChange={handleChange}
								className={classes.select}
								options={options}
								placeholder="Chọn lớp"
							/>
						</Box>
					</Box>

					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label="simple table">
							<TableHead className={classes.tableHead}>
								<TableRow>
									<TableCell align="center" className={classes.tableHeadTitle}>
										Buổi
									</TableCell>

									<TableCell align="center" className={classes.tableHeadTitle}>
										Thời gian
									</TableCell>

									{days.map((day, index) => {
										return (
											<TableCell
												align="center"
												className={classes.tableHeadTitle}
											>
												<div>{`Thứ ${index + 2}`}</div>
												<div>
													{day.toLocaleDateString('en-US', { timeZone: 'UTC' })}
												</div>
											</TableCell>
										)
									})}
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow className={classes.tableHead}>
									<TableCell
										align="center"
										scope="row"
										rowSpan={6}
										className={classes.session}
									>
										Sáng
									</TableCell>
								</TableRow>

								{rows.map((row, index) => (
									<TableRow key={index}>
										<TableCell className={classes.session} align="center">
											<div>{row.session}</div>
										</TableCell>
										<TableCell className={classes.tableCell} align="center">
											<div>{row.carbs}</div>
											<div>Cô Hoa</div>
										</TableCell>
										<TableCell className={classes.tableCell} align="center">
											<div>{row.carbs}</div>
											<div>Cô Hoa</div>
										</TableCell>
										<TableCell className={classes.tableCell} align="center">
											<div>{row.carbs}</div>
											<div>Cô Hoa</div>
										</TableCell>
										<TableCell className={classes.tableCell} align="center">
											<div>{row.carbs}</div>
											<div>Cô Hoa</div>
										</TableCell>
										<TableCell className={classes.tableCell} align="center">
											<div>{row.carbs}</div>
											<div>Cô Hoa</div>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Box>
		</>
	)
}

export default Timetable
