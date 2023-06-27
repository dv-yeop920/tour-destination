import React from 'react';
import NoticeBoardList from '../components/NoticeBoardList';
import ScrollToTopButton  from '../components/ScrollToTopButton';
import { PostListType } from '../model/Board';


const NoticeBoard:React.FC<PostListType> = ({postList},{userFindPost}) => {
    return (
        <>
        <NoticeBoardList postList = {postList} userFindPost = {userFindPost}/>
        <ScrollToTopButton/>
        </>
    );
};

export default NoticeBoard;