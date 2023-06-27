import React from 'react';
import NoticeBoardList from '../components/NoticeBoardList';
import ScrollToTopButton  from '../components/ScrollToTopButton';
import { PostListType } from '../model/Board';


const NoticeBoard:React.FC<PostListType> = ({postList}) => {
    return (
        <>
        <NoticeBoardList postList = {postList}/>
        <ScrollToTopButton/>
        </>
    );
};

export default NoticeBoard;