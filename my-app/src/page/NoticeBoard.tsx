import React,{useState} from 'react';
import NoticeBoardList from '../components/NoticeBoardList';
import ScrollToTopButton  from '../components/ScrollToTopButton';
import PostData from '../BoardData';
import { PostListType } from '../model/Board';


const NoticeBoard:React.FC = () => {
    const [postList] = useState<PostListType>(PostData);
    return (
        <>
        <NoticeBoardList postList={postList.postList}/>
        <ScrollToTopButton/>
        </>
    );
};

export default NoticeBoard;