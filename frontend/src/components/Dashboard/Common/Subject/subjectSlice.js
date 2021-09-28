import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import subjectAPI from 'api/subjectApi'

export const getSubjects = createAsyncThunk(
	'subjects/getSubjects',
	async () => {
		const subjects = await subjectAPI.getALlSubjects()
		return subjects.data
	}
)

export const getSubject = createAsyncThunk(
	'subjects/getSubject',
	async (id) => {
		const subject = await subjectAPI.getSubject(id)
		return subject.data
	}
)

export const addSubject = createAsyncThunk(
	'subjects/addSubject',
	async (data, thunkAPI) => {
		try {
			const subject = await subjectAPI.addSubject(data)

			if (subject) {
				thunkAPI.dispatch(getSubjects())
			}

			return subject.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const updateSubject = createAsyncThunk(
	'subjects/updateSubject',
	async (data, thunkAPI) => {
		try {
			const subject = await subjectAPI.updateSubject(data)

			if (subject) {
				thunkAPI.dispatch(getSubjects())
			}

			return subject.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const deleteSubject = createAsyncThunk(
	'subjects/deleteSubject',
	async (id, thunkAPI) => {
		const subject = await subjectAPI.deleteSubject(id)

		if (subject) {
			thunkAPI.dispatch(getSubjects())
		}
		return subject.data
	}
)

const subjectSlice = createSlice({
	name: 'subject',
	initialState: {
		subjects: [],
		subjectsLoading: false,
		subjectsError: '',
		subject: {},
		subjectLoading: false,
		subjectError: '',
	},
	reducers: {},
	extraReducers: {
		[getSubjects.pending]: (state) => {
			state.subjectsLoading = true
		},
		[getSubjects.fulfilled]: (state, action) => {
			state.subjectsLoading = false
			state.subjects = action.payload.data
		},
		[getSubjects.rejected]: (state) => {
			state.subjectsError = 'error'
		},
		[getSubject.pending]: (state) => {
			state.subjectLoading = true
		},
		[getSubject.fulfilled]: (state, action) => {
			state.subjectLoading = false
			state.subject = action.payload.data
		},
		[getSubject.rejected]: (state) => {
			state.subjectError = 'error'
		},
	},
})
export default subjectSlice.reducer
