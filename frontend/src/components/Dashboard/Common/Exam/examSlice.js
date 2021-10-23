import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import examAPI from 'api/examApi'

export const getExams = createAsyncThunk('exam/getExams', async () => {
	const exams = examAPI.getAllExams()

	return exams.data
})

export const getExam = createAsyncThunk(
	'exam/getExam',
	async (id, thunkAPI) => {
		try {
			const exam = examAPI.getExam(id)

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
			const exam = examAPI.updateExam(data)

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
			const exam = examAPI.deleteExam(id)

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
			const exam = examAPI.addExam(data)

			return exam.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

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
	extraReducers: {},
})

export default examSlice.reducer
