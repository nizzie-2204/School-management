import { TableCell, TableRow } from '@material-ui/core'
import addDays from 'date-fns/addDays'
import startOfWeek from 'date-fns/startOfWeek'
import React from 'react'
import TableCellCustom from '../TableCell/TableCell'
import useStyles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getClass } from 'components/Dashboard/Common/Class/classSlice'
// Get date in week
const days = []

for (let i = 0; i < 5; i++) {
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
	const dispatch = useDispatch()
	const classFromStore = useSelector((state) => state.classes.class)
	const defaultTimetable = [
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

	// Teacher timetable
	const user = useSelector((state) => state.auth.user)

	// Student timetable (class timetable of student)
	useEffect(() => {
		if (user?.role === 'student') {
			const fetchClass = () => {
				const action = getClass(user.classId)
				dispatch(action)
			}
			fetchClass()
		}
	}, [])

	const timetableFromStore =
		classFromStore?.timetable || user?.timetable || null

	return (
		<>
			{timetableFromStore !== null
				? timetableFromStore?.map((row, index) => (
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
										date={days[index2]}
									/>
								)
							})}
						</TableRow>
				  ))
				: defaultTimetable?.map((row, index) => (
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
