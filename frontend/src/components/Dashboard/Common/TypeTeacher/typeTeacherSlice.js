import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import typeTeacherAPI from 'api/typeTeacherApi'

export const getTypeTeachers = createAsyncThunk(
	'type-teacher/getTypeTeachers',
	async () => {
		const typeTeachers = await typeTeacherAPI.getAllTypeTeacher()
		return typeTeachers.data
	}
)

export const getTypeTeacher = createAsyncThunk(
	'type-teacher/getTypeTeacher',
	async (id) => {
		const typeTeacher = await typeTeacherAPI.getTypeTeacher(id)
		return typeTeacher.data
	}
)

export const addTypeTeacher = createAsyncThunk(
	'type-teacher/addTypeTeacher',
	async (data, thunkAPI) => {
		try {
			const typeTeacher = await typeTeacherAPI.addTypeTeacher(data)

			if (typeTeacher) {
				thunkAPI.dispatch(getTypeTeachers())
			}

			return typeTeacher.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const updateTypeTeacher = createAsyncThunk(
	'type-teacher/updateTypeTeacher',
	async (data, thunkAPI) => {
		try {
			const typeTeacher = await typeTeacherAPI.updateTypeTeacher(data)

			if (typeTeacher) {
				thunkAPI.dispatch(getTypeTeachers())
			}

			return typeTeacher.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const deleteTypeTeacher = createAsyncThunk(
	'type-teacher/deleteTypeTeacher',
	async (id, thunkAPI) => {
		const typeTeacher = await typeTeacherAPI.deleteTypeTeacher(id)

		if (typeTeacher) {
			thunkAPI.dispatch(getTypeTeachers())
		}
		return typeTeacher.data
	}
)

const typeTeacherSlice = createSlice({
	name: 'type-teacher',
	initialState: {
		typeTeachers: [],
		typeTeachersLoading: false,
		typeTeachersError: '',
	},
	reducers: {},
	extraReducers: {
		[getTypeTeachers.pending]: (state) => {
			state.typeTeachersLoading = true
		},
		[getTypeTeachers.fulfilled]: (state, action) => {
			state.typeTeachersLoading = false
			state.typeTeachers = action.payload.data
		},
		[getTypeTeachers.rejected]: (state) => {
			state.typeTeachersError = 'error'
		},
	},
})

export default typeTeacherSlice.reducer
