import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebase'

export const fetchTarifs = createAsyncThunk(
    'courses/fetchTarifs',
    async (_, { getState }) => {
        const { tarifs } = getState();
        if (tarifs.data.length > 0) {
            return tarifs.data;
        }
        const querySnapshot = await getDocs(collection(db, 'tarifs'))
        return querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    }
)

const tarifs = createSlice({
    name: 'tarifs',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTarifs.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTarifs.fulfilled, (state, action) => {
                state.status = 'success'
                state.data = action.payload
            })
            .addCase(fetchTarifs.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.error.message
            })
    }
})

export default tarifs.reducer