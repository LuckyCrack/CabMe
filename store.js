import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navsSlice';

export const store = configureStore({
    reducer: {
        nav: navReducer,
    }
});
