import { configureStore } from '@reduxjs/toolkit'
import CoursesSlice from './slices/coursesSlice'
export const store = configureStore({
  reducer: {
    courses: CoursesSlice,
  },
})