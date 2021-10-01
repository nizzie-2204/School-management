import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import studentAPI from 'api/studentApi'

export const getStudents = createAsyncThunk(
	'student/getStudents',
	async () => {}
)

export const getStudent = createAsyncThunk(
	'student/getStudent',
	async (id, thunkAPI) => {
		try {
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)
export const addStudent = createAsyncThunk(
	'student/addStudent',
	async (data, thunkAPI) => {
		try {
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)
export const updateStudent = createAsyncThunk(
	'student/updateStudent',
	async (data, thunkAPI) => {
		try {
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)
export const deleteStudent = createAsyncThunk(
	'student/deleteStudent',
	async (id, thunkAPI) => {
		try {
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

const studentAccountSlice = createSlice({
	name: 'student',
	initialState: {
		students: [],
		studentsLoading: false,
		studentsError: null,
	},
	reducers: {},
	extraReducers: {},
})

export default studentAccountSlice.reducer
