import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import authSlice from 'features/Login/authSlice'
import timetableSlice from 'components/Dashboard/Common/Timetable/timetableSlice'
import subjectSlice from 'components/Dashboard/Common/Subject/subjectSlice'
import classSlice from 'components/Dashboard/Common/Class/classSlice'
import typeTeacherSlice from 'components/Dashboard/Common/TypeTeacher/typeTeacherSlice'
import teacherSlice from 'components/Dashboard/Common/TeacherAccount/teacherAccountSlice'

const persistConfig = {
	key: 'root',
	storage,
}

const rootReducer = combineReducers({
	auth: authSlice,
	timetable: timetableSlice,
	subjects: subjectSlice,
	typeTeacher: typeTeacherSlice,
	classes: classSlice,
	teacher: teacherSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
})
const persistor = persistStore(store)

export { store, persistor }
