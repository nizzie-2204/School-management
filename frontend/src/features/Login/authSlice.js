import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authAPI from 'api/authApi'

export const login = createAsyncThunk(
	'auth/login',
	async (user, { rejectWithValue }) => {
		try {
			const authLogin = await authAPI.login(user)
			return authLogin.data
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)

const initialState = {
	user: null,
	isLoggedIn: false,
	isLogging: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		[login.pending]: (state, payload) => {
			state.isLogging = true
		},
		[login.fulfilled]: (state, action) => {
			state.isLogging = false
			state.isLoggedIn = true
			state.user = action.payload.data.user
		},
		[login.rejected]: (state, action) => {
			state.isLogging = false
		},
	},
})

export const {} = authSlice.actions
export default authSlice.reducer
