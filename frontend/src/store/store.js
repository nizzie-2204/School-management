import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import authSlice from 'features/Login/authSlice'

const rootReducer = combineReducers({
	auth: authSlice,
})

const store = configureStore({
	reducer: rootReducer,
})

export default store
