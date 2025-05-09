import { configureStore } from '@reduxjs/toolkit'
import CoursesSlice from './slices/coursesSlice'
import popUpReducer from './slices/PopUpSlice'
import TarifsReducer from './slices/TarifsSlice'

export const store = configureStore({
  reducer: {
    courses: CoursesSlice,
    popUp: popUpReducer,
    tarifs: TarifsReducer
  },
})