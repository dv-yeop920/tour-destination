import React, { useState } from 'react';
import NoticeBoardInput from '../components/NoticeBoardInput';
import NoticeBoardList from '../components/NoticeBoardList';
import ScrollToTopButton  from '../components/ScrollToTopButton';
import BoardData from '../BoardData';

const NoticeBoard:React.FC = () => {
    const [post , setPost] = useState(BoardData);
    return (
        <>
        <NoticeBoardInput />
        <NoticeBoardList post={post}/>
        <ScrollToTopButton/>
        </>
    );
};

export default NoticeBoard;