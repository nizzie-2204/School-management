import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authAPI from 'api/authApi'

export const login = createAsyncThunk('auth/login', async (user) => {
	const authLogin = await authAPI.login(user)

	return authLogin.data
})

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
		[login.fulfilled]: (state, payload) => {
			console.log(payload.payload.data.user)
			state.isLogging = false
			state.isLoggedIn = true
			state.user = payload.payload.data.user
		},
	},
})

export const {} = authSlice.actions
export default authSlice.reducer
