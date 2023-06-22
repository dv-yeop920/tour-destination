import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostType }from "../model/Board";


const initialState:PostType[] = [{
    id:0,
    title:'제목',
    author:'작성자'
}];

const posts = createSlice({
    name:'posts',
    initialState,
    reducers:{
        addPost(state , action:PayloadAction<PostType>) {
        }
    }
});

export const { addPost } = posts.actions;


export default posts;