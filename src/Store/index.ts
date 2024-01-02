import { configureStore } from "@reduxjs/toolkit";
import userReducer from '@/Store/slices/user';
import sortReducer from '@/Store/slices/sort';

export const store = configureStore({
    reducer: {
        user: userReducer,
        sort: sortReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;