import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import studentAPI from 'api/studentApi'

export const getStudents = createAsyncThunk('student/getStudents', async () => {
	const students = await studentAPI.getALlStudents()

	return students.data
})

export const getStudent = createAsyncThunk(
	'student/getStudent',
	async (id, thunkAPI) => {
		try {
			const student = await studentAPI.getStudent(id)

			return student.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)
export const addStudent = createAsyncThunk(
	'student/addStudent',
	async (data, thunkAPI) => {
		try {
			const student = await studentAPI.addStudent(data)

			if (student) {
				thunkAPI.dispatch(getStudents())
			}

			return student.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)
export const updateStudent = createAsyncThunk(
	'student/updateStudent',
	async (data, thunkAPI) => {
		try {
			const student = await studentAPI.updateStudent(data)

			if (student) {
				thunkAPI.dispatch(getStudents())
			}

			return student.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)
export const deleteStudent = createAsyncThunk(
	'student/deleteStudent',
	async (id, thunkAPI) => {
		try {
			const student = await studentAPI.deleteStudent(id)

			if (student) {
				thunkAPI.dispatch(getStudents())
			}

			return student.data
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
	extraReducers: {
		[getStudents.pending]: (state) => {
			state.studentsLoading = true
		},
		[getStudents.fulfilled]: (state, action) => {
			state.students = action.payload.data
			state.studentsLoading = false
		},
		[getStudents.rejected]: (state) => {
			state.studentsError = 'error'
		},
	},
})

export default studentAccountSlice.reducer
