import { createSlice, current } from '@reduxjs/toolkit'

const initialState = [
	{
		time: '07:30 - 08:05',
		content: [
			{
				day: 'Monday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Tuesday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Wednesday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Thursday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Friday',
				subjectId: '',
				teacherId: '',
			},
		],
	},
	{
		time: '08:10 - 08:45',
		content: [
			{
				day: 'Monday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Tuesday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Wednesday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Thursday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Friday',
				subjectId: '',
				teacherId: '',
			},
		],
	},
	{
		time: '09:10 - 09:45',
		content: [
			{
				day: 'Monday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Tuesday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Wednesday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Thursday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Friday',
				subjectId: '',
				teacherId: '',
			},
		],
	},
	{
		time: '09:50 - 10:25',
		content: [
			{
				day: 'Monday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Tuesday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Wednesday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Thursday',
				subjectId: '',
				teacherId: '',
			},
			{
				day: 'Friday',
				subjectId: '',
				teacherId: '',
			},
		],
	},
]
const timetableSlice = createSlice({
	name: 'timetable',
	initialState,
	reducers: {
		setTimeTable: (state, action) => {
			const currRow = current(state).find((item) => {
				return item.time === action.payload.newRow.time
			})

			const indexCurrRow = current(state).indexOf(currRow)

			console.log(current(state)[indexCurrRow].content[action.payload.index])
			console.log(action.payload.newRow.content[action.payload.index])

			state[indexCurrRow].content[action.payload.index] =
				action.payload.newRow.content[action.payload.index]
		},
	},
})

export const { setTimeTable } = timetableSlice.actions
export default timetableSlice.reducer
