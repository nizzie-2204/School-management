import { createSlice } from '@reduxjs/toolkit'

const initialState = [
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

const timetableSlice = createSlice({
	name: 'timetable',
	initialState,
	reducers: {},
})

export const {} = timetableSlice.actions
export default timetableSlice.reducer
