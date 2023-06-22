import { createSlice } from "@reduxjs/toolkit";
//import boardData from '../data';

const posts = createSlice({
    name:'posts',
    initialState: [{
        id: 1,
        title: '자유 게시판 첫 번째 글',
        author: '작성자1',
    },
    {
        id: 2,
        title: '자유 게시판 두 번째 글',
        author: '작성자2',
    },
    {
        id:3,
        title:'자유 게시판 N 번째 글',
        author: '작성자',
    }],
    reducers:{
        addPost(state , action) {

        }
    }
});

export const { addPost } = posts.actions;


export default posts;