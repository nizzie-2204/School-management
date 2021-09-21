import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import authSlice from 'features/Login/authSlice'
import timetableSlice from 'components/Dashboard/Common/Timetable/timetableSlice'
const persistConfig = {
	key: 'root',
	storage,
}

const rootReducer = combineReducers({
	auth: authSlice,
	timetable: timetableSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
})
const persistor = persistStore(store)

export { store, persistor }
