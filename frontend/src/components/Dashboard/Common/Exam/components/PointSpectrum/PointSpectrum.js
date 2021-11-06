import {
	Box,
	Typography,
	Paper,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from '@material-ui/core'
import React, { useEffect, memo } from 'react'
import useStyles from './styles'
import { Bar } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { getExam } from '../../examSlice'

const PointSpectrum = (props) => {
	const classes = useStyles()
	const exam = useSelector((state) => state.exam.exam)
	const dispatch = useDispatch()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		const fetchData = () => {
			const action = getExam(props.exam?._id)
			dispatch(action)
		}
		fetchData()
	}, [])

	// Calculate scores to fill in chart and table
	const handleScore = (array) => {
		console.log('handleScore')

		const newArray = [...array]
		const sortedArray = newArray.sort((a, b) => {
			return a.score - b.score
		})

		let result = []
		sortedArray.forEach((item, index) => {
			if (index === 0) {
				result.push({
					score: item.score,
					time: 1,
				})
			} else {
				result.forEach((item2, index2) => {
					if (item2.score === item.score) {
						const newResult = result.filter((x) => {
							return x.score !== item.score
						})
						result = [...newResult, { score: item.score, time: item2.time + 1 }]
					} else {
						result.push({
							score: item.score,
							time: 1,
						})
					}
				})
			}
		})

		return result
	}

	const result2 = handleScore(exam?.examResult)
	const handleCalculateTime = (array) => {
		for (let i = 0; i < array.length; i++) {
			if (array[i]?.score === array[i + 1]?.score) {
				array.splice(i + 1, 1)
				i--
			}
		}

		return array
	}

	const newResult = handleCalculateTime(result2)

	const handleCalculatePercent = (array) => {
		const totalTime = array.reduce((total, score) => {
			return total + score.time
		}, 0)

		const result = array.map((item) => {
			return {
				...item,
				percent: ((item.time / totalTime) * 100).toFixed(2),
			}
		})

		return result
	}

	const lastResult = handleCalculatePercent(newResult)
	let result = []
	result.length = 11
	lastResult.forEach((item, index) => {
		result[item.score] = item.time
	})

	const data = {
		labels: [
			0,
			'>=1',
			'>=2',
			'>=3',
			'>=4',
			'>=5',
			'>6',
			'>=7',
			'>=8',
			'>=9',
			10,
		],
		datasets: [
			{
				label: 'Số bài thi',
				data: result,
				backgroundColor: ['#97aee9'],
				borderColor: ['#97aee9'],
				borderWidth: 1,
			},
		],
	}

	const options = {
		scales: {
			x: {
				grid: {
					display: false,
				},
			},
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	}
	return (
		<Box className={classes.container}>
			<Box className={classes.chartContainer}>
				<Bar data={data} options={options} />
			</Box>
			<Box className={classes.detail}>
				<Box className={classes.detailHeader}>
					<Typography variant="subtitle1">Chi tiết</Typography>
				</Box>
				<TableContainer
					component={Paper}
					className={classes.tableContainer}
					elevation="0"
				>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell className={classes.tableTitle}>STT</TableCell>
								<TableCell className={classes.tableTitle} align="right">
									Điểm số
								</TableCell>
								<TableCell className={classes.tableTitle} align="right">
									Số bài thi
								</TableCell>
								<TableCell className={classes.tableTitle} align="right">
									Chiếm tỉ lệ
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{lastResult.map((row, index) => (
								<TableRow key={row.name}>
									<TableCell
										className={classes.tableData}
										component="th"
										scope="row"
									>
										{index + 1}
									</TableCell>
									<TableCell className={classes.tableData} align="right">
										{row.score}
									</TableCell>
									<TableCell className={classes.tableData} align="right">
										{row.time}
									</TableCell>
									<TableCell className={classes.tableData} align="right">
										{row.percent}%
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Box>
	)
}

export default memo(PointSpectrum)
