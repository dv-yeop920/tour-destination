import React from 'react';
import NoticeBoardInput from '../components/NoticeBoardInput';
import NoticeBoardList from '../components/NoticeBoardList';
import ScrollToTopButton  from '../components/ScrollToTopButton';



const NoticeBoard  = () => {
    return (
        <>
        <NoticeBoardInput />
        <NoticeBoardList />
        <ScrollToTopButton/>
        </>
    );
};

export default NoticeBoard;