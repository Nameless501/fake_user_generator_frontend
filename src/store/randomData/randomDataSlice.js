import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RANDOM_DATA_API_URL } from '../../utils/constants';

export const getRandomData = createAsyncThunk(
    'randomData/getRandomData',
    async (payload, { rejectWithValue, getState }) => {
        try {
            const { page } = getState().randomData;
            const response = await axios.get(RANDOM_DATA_API_URL, {
                params: { ...payload, page },
            });
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.status);
        }
    }
);

export const randomDataSlice = createSlice({
    name: 'randomData',
    initialState: {
        data: [],
        status: 'idle',
        error: '',
        page: 1,
    },
    reducers: {
        resetPageCounter: (state) => {
            state.page = 1;
            state.data = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRandomData.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getRandomData.fulfilled, (state, { payload }) => {
                state.data = [...state.data, ...payload];
                state.page += 1;
                state.error = '';
                state.status = 'fulfilled';
            })
            .addCase(getRandomData.rejected, (state, { payload }) => {
                state.status = 'rejected';
            });
    },
});

export const { resetPageCounter } = randomDataSlice.actions;
export default randomDataSlice.reducer;
