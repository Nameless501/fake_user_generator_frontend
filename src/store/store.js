import { configureStore } from '@reduxjs/toolkit';
import randomDataReducer from './randomData/randomDataSlice';

export default configureStore({
    reducer: {
        randomData: randomDataReducer,
    },
});
