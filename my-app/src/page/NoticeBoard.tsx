import React from 'react';
import NoticeBoardInput from '../components/NoticeBoardInput';
import NoticeBoardList from '../components/NoticeBoardList';
import ScrollToTopButton  from '../components/ScrollToTopButton';
import { PostType } from '../model/Board';


const NoticeBoard = ({post}:{post:PostType[]}) => {
    return (
        <>
        <NoticeBoardInput post = {post} />
        <NoticeBoardList post = {post} />
        <ScrollToTopButton/>
        </>
    );
};

export default NoticeBoard;