import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import classAPI from 'api/classApi'

export const getClasses = createAsyncThunk('class/getClasses', async () => {
	const classes = await classAPI.getALlClasses()

	return classes.data
})

export const getClass = createAsyncThunk(
	'class/getClass',
	async (id, thunkAPI) => {
		try {
			const thisClass = await classAPI.getClass(id)

			return thisClass.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const addClass = createAsyncThunk(
	'class/addClass',
	async (data, thunkAPI) => {
		try {
			const thisClass = await classAPI.addClass(data)

			if (thisClass) {
				thunkAPI.dispatch(getClasses())
			}

			return thisClass.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const updateClass = createAsyncThunk(
	'class/updateClass',
	async (data, thunkAPI) => {
		try {
			const thisClass = await classAPI.updateClass(data)

			if (thisClass) {
				thunkAPI.dispatch(getClasses())
			}

			return thisClass.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const deleteClass = createAsyncThunk(
	'class/deleteClass',
	async (id, thunkAPI) => {
		try {
			const thisClass = await classAPI.deleteClass(id)

			if (thisClass) {
				thunkAPI.dispatch(getClasses())
			}

			return thisClass.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

export const updateStudentClass = createAsyncThunk(
	'class/updateStudentClass',
	async (data, thunkAPI) => {
		try {
			const thisClass = await classAPI.updateStudentClass(data)

			if (thisClass) {
				thunkAPI.dispatch(getClasses())
			}

			return thisClass.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response)
		}
	}
)

const classSlice = createSlice({
	name: 'class',
	initialState: {
		classes: [],
		classesLoading: false,
		classesError: '',
		class: null,
		classLoading: false,
		classError: '',
	},
	reducers: {
		emptyClass: (state) => {
			state.class = null
		},
	},
	extraReducers: {
		[getClasses.pending]: (state) => {
			state.classesLoading = true
		},
		[getClasses.fulfilled]: (state, action) => {
			state.classesLoading = false
			state.classes = action.payload.data
		},
		[getClasses.rejected]: (state) => {
			state.classesError = 'error'
		},
		[getClass.pending]: (state) => {
			state.classLoading = true
		},
		[getClass.fulfilled]: (state, action) => {
			state.classLoading = false
			state.class = action.payload.data
		},
		[getClass.rejected]: (state) => {
			state.classError = 'error'
		},
	},
})

export const { emptyClass } = classSlice.actions

export default classSlice.reducer
