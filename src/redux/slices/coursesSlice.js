import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebase'

export const fetchCourses = createAsyncThunk(
    'courses/fetchCourse',
    async (_, { getState }) => {
        const { courses } = getState();
        if (courses.data.length > 0) {
            return courses.data;
        }
        const querySnapshot = await getDocs(collection(db, 'courses'))
        return querySnapshot.docs.map(doc => doc.data())
    }
)

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.status = 'success'
                state.data = action.payload
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.error.message
            })
    }
})

export default coursesSlice.reducer