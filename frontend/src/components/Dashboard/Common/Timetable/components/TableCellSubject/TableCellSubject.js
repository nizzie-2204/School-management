import { TableCell, TableRow } from '@material-ui/core'
import addDays from 'date-fns/addDays'
import startOfWeek from 'date-fns/startOfWeek'
import React from 'react'
import TableCellCustom from '../TableCell/TableCell'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
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
	const classFromStore = useSelector((state) => state.classes.class)
	const timetable = [
		{
			time: '07:30 - 08:05',
			content: [
				{
					day: 'Monday',
				},
				{
					day: 'Tuesday',
				},
				{
					day: 'Wednesday',
				},
				{
					day: 'Thursday',
				},
				{
					day: 'Friday',
				},
			],
		},
		{
			time: '08:10 - 08:45',
			content: [
				{
					day: 'Monday',
				},
				{
					day: 'Tuesday',
				},
				{
					day: 'Wednesday',
				},
				{
					day: 'Thursday',
				},
				{
					day: 'Friday',
				},
			],
		},
		{
			time: '09:10 - 09:45',
			content: [
				{
					day: 'Monday',
				},
				{
					day: 'Tuesday',
				},
				{
					day: 'Wednesday',
				},
				{
					day: 'Thursday',
				},
				{
					day: 'Friday',
				},
			],
		},
		{
			time: '09:50 - 10:25',
			content: [
				{
					day: 'Monday',
				},
				{
					day: 'Tuesday',
				},
				{
					day: 'Wednesday',
				},
				{
					day: 'Thursday',
				},
				{
					day: 'Friday',
				},
			],
		},
	]

	return (
		<>
			{classFromStore !== null
				? classFromStore?.timetable.map((row, index) => (
						<TableRow key={index}>
							<TableCell className={classes.session} align="center">
								<div>{`Tiết ${index + 1}`}</div>
								<div className={classes.titleSmall}>{row.time}</div>
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
				  ))
				: timetable?.map((row, index) => (
						<TableRow key={index}>
							<TableCell className={classes.session} align="center">
								<div>{`Tiết ${index + 1}`}</div>
								<div className={classes.titleSmall}>{row.time}</div>
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
