import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import examResultAPI from 'api/examResultApi'

export const getExamResults = createAsyncThunk(
	'examResult/getExamResults',
	async () => {
		const results = await examResultAPI.getAllExamResults()

		return results.data
	}
)

export const getExamResult = createAsyncThunk(
	'examResult/getExamResult',
	async (id, thunkAPI) => {
		try {
			const result = await examResultAPI.getExamResult(id)

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
			const result = await examResultAPI.deleteExamResult(id)

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
			const result = await examResultAPI.addExamResult(data)

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
			const result = await examResultAPI.updateExamResult(data)

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
	extraReducers: {
		[getExamResults.pending]: (state) => {
			state.examResultsLoading = true
		},
		[getExamResults.fulfilled]: (state, action) => {
			state.examResultsLoading = false
			state.examResults = action.payload.data
		},
		[getExamResults.rejected]: (state, action) => {
			state.examResultsLoading = false
			state.examResultsError = action.payload.message
		},
		[getExamResult.pending]: (state) => {
			state.examResultLoading = true
		},
		[getExamResult.fulfilled]: (state, action) => {
			state.examResultLoading = false
			console.log(action.payload)
		},
		[getExamResult.rejected]: (state, action) => {
			state.examResultLoading = false
			console.log(action.payload)
		},
	},
})

export default examResultSlice.reducer
