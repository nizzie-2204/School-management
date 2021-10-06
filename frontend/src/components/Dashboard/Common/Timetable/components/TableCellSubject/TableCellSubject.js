import { TableCell, TableRow } from '@material-ui/core'
import addDays from 'date-fns/addDays'
import startOfWeek from 'date-fns/startOfWeek'
import React from 'react'
import TableCellCustom from '../TableCell/TableCell'
import useStyles from './styles'
import { useSelector } from 'react-redux'
// function createData(time, subject1, subject2, subject3, subject4, subject5) {
// 	return { time, subject1, subject2, subject3, subject4, subject5 }
// }

// const rows = [
// 	createData('07:30 - 08:05', {}, {}, {}, {}, {}),
// 	createData('08:10 - 08:45', {}, {}, {}, {}, {}),
// 	createData('09:10 - 09:45', {}, {}, {}, {}, {}),
// 	createData('09:50 - 10:25', {}, {}, {}, {}, {}),
// ]

// Get date in week
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

const TableCellSubject = () => {
	const classes = useStyles()
	const timetable = useSelector((state) => state.timetable)
	return (
		<>
			{timetable.map((row, index) => (
				<TableRow key={index}>
					<TableCell className={classes.session} align="center">
						<div>{`Tiết ${index + 1}`}</div>
						<div className={classes.titleSmall}>{row.session}</div>
					</TableCell>

					{row.content.map((cell, index2) => {
						return (
							<TableCellCustom
								key={index2}
								row={row}
								index={index2}
								prevIndex={index}
								cell={cell}
							/>
						)
					})}
				</TableRow>
			))}
		</>
	)
}

export default TableCellSubject
