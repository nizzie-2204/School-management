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

export const logout = createAsyncThunk(
	'auth/logout',
	async (id, { rejectWithValue }) => {
		try {
			const authLogout = await authAPI.logout(id)
			return authLogout.data
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
		[login.pending]: (state) => {
			state.isLogging = true
		},
		[login.fulfilled]: (state, action) => {
			state.isLogging = false
			state.isLoggedIn = true
			state.user = action.payload.data.user
		},
		[login.rejected]: (state) => {
			state.isLogging = false
		},
		[logout.fulfilled]: (state) => {
			state.isLogging = false
			state.isLoggedIn = false
			state.user = null
		},
	},
})

export default authSlice.reducer
