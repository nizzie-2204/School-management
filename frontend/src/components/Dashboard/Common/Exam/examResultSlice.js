import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import examResultAPI from 'api/examResultApi'

export const getExamResults = createAsyncThunk(
	'examResult/getExamResults',
	async () => {
		const results = examResultAPI.getAllExamResults()

		return (await results).data
	}
)

export const getExamResult = createAsyncThunk(
	'examResult/getExamResult',
	async (id, thunkAPI) => {
		try {
			const result = examResultAPI.getExamResult(id)

			return result.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const deleteExamResult = createAsyncThunk(
	'examResult/deleteExamResult',
	async (id, thunkAPI) => {
		try {
			const result = examResultAPI.deleteExam(id)

			return result.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const addExamResult = createAsyncThunk(
	'examResult/addExamResult',
	async (data, thunkAPI) => {
		try {
			const result = examResultAPI.addExam(data)

			return result.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)
export const updateExamResult = createAsyncThunk(
	'examResult/updateExamResult',
	async (data, thunkAPI) => {
		try {
			const result = examResultAPI.updateExam(data)

			return result.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

const examResultSlice = createSlice({
	name: 'examResult',
	initialState: {
		examResults: [],
		examResultsLoading: false,
		examResultsError: null,
		examResult: {},
		examResultLoading: false,
		examResultError: null,
	},
	reducers: {},
	extraReducers: {},
})

export default examResultSlice.reducer
