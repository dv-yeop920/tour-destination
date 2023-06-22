import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import posts from './boardSlice';

const Store = configureStore({
    reducer: { 
        posts: posts.reducer
    }
});


export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>();


export default Store;