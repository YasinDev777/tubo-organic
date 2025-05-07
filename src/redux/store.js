import { configureStore } from '@reduxjs/toolkit'
import CoursesSlice from './slices/coursesSlice'
import popUpReducer from './slices/PopUpSlice'
export const store = configureStore({
  reducer: {
    courses: CoursesSlice,
    popUp: popUpReducer,
  },
})