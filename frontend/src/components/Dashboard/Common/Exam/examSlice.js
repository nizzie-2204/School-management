import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import examAPI from 'api/examApi'
import uploadAPI from 'api/uploadApi'

export const getExams = createAsyncThunk('exam/getExams', async () => {
	const exams = await examAPI.getAllExams()

	return exams.data
})

export const getExam = createAsyncThunk(
	'exam/getExam',
	async (id, thunkAPI) => {
		try {
			const exam = await examAPI.getExam(id)

			return exam.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const updateExam = createAsyncThunk(
	'exam/updateExam',
	async (data, thunkAPI) => {
		try {
			const exam = await examAPI.updateExam(data)

			return exam.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const deleteExam = createAsyncThunk(
	'exam/deleteExam',
	async (id, thunkAPI) => {
		try {
			const exam = await examAPI.deleteExam(id)

			return exam.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const addExam = createAsyncThunk(
	'exam/addExam',
	async (data, thunkAPI) => {
		try {
			const exam = await examAPI.addExam(data)

			return exam.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const upload = createAsyncThunk('exam/upload', async (files) => {
	const exam = await uploadAPI.upload(files)

	return exam.data
})

const examSlice = createSlice({
	name: 'exam',
	initialState: {
		exams: [],
		examsLoading: false,
		examsError: null,
		exam: {},
		examLoading: false,
		examError: null,
	},
	reducers: {},
	extraReducers: {
		[getExams.pending]: (state) => {
			state.examsLoading = true
		},
		[getExams.fulfilled]: (state, action) => {
			state.examsLoading = false
			state.exams = action.payload.data
		},
		[getExams.rejected]: (state, action) => {
			state.examsLoading = false
			state.examsError = action.payload.message
		},
		[getExam.pending]: (state) => {
			state.examLoading = true
		},
		[getExam.fulfilled]: (state, action) => {
			state.examLoading = false
			console.log(action.payload)
		},
		[getExam.rejected]: (state, action) => {
			state.examLoading = false
			state.examError = 'error'
		},
	},
})

export default examSlice.reducer
