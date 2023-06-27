import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const posts = createSlice({
    name:'posts',
    initialState:[],
    reducers:{
        addPost(state , action) {
        }
    }
});

export const { addPost } = posts.actions;


export default posts;