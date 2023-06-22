import { configureStore } from '@reduxjs/toolkit'
import posts from './boardSlice.js';

export default configureStore({
    reducer: { 
        posts: posts.reducer
    }
})
