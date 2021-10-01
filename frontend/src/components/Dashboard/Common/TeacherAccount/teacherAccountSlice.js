import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import teacherAPI from 'api/teacherApi'

export const getTeachers = createAsyncThunk('teacher/getTeachers', async () => {
	const teachers = await teacherAPI.getALlTeachers()
	return teachers.data
})

export const getTeacher = createAsyncThunk(
	'teacher/getTeacher',
	async (id, thunkAPI) => {
		try {
			const teacher = await teacherAPI.getTeacher(id)
			return teacher.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const addTeacher = createAsyncThunk(
	'teacher/addTeacher',
	async (data, thunkAPI) => {
		try {
			const teacher = await teacherAPI.addTeacher(data)

			if (teacher) {
				thunkAPI.dispatch(getTeachers())
			}

			return teacher.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const updateTeacher = createAsyncThunk(
	'teacher/updateTeacher',
	async (data, thunkAPI) => {
		try {
			const teacher = await teacherAPI.updateTeacher(data)

			if (teacher) {
				thunkAPI.dispatch(getTeachers())
			}

			return teacher.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const deleteTeacher = createAsyncThunk(
	'teacher/deleteTeacher',
	async (id, thunkAPI) => {
		const teacher = await teacherAPI.deleteTeacher(id)

		if (teacher) {
			thunkAPI.dispatch(getTeachers())
		}
		return teacher.data
	}
)

const teacherAccountSlice = createSlice({
	name: 'teacher',
	initialState: {
		teachers: [],
		teachersLoading: false,
		teachersError: '',
	},
	reducers: {},
	extraReducers: {
		[getTeachers.pending]: (state) => {
			state.teachersLoading = true
		},
		[getTeachers.fulfilled]: (state, action) => {
			state.teachersLoading = false
			state.teachers = action.payload.data
		},
		[getTeachers.rejected]: (state) => {
			state.teachersError = 'error'
		},
	},
})

export const {} = teacherAccountSlice.actions
export default teacherAccountSlice.reducer
