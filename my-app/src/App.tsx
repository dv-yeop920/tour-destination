import React ,{useState}from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import PostData from './BoardData';
import NoticeBoard from './page/NoticeBoard';
import Header from './components/Header';
import WritingPage from './page/WritingPage';
import Main from './page/Main';
import DestinationSearch from './page/DestinationSearch';
import NoticeBoardDetail from './page/NoticeBoardDetail';
import {PostListType} from './model/Board';


const App:React.FC = () => {
  const [postList] = useState<PostListType>(PostData);
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' 
      element = {<Main/>} />

      <Route path='/search' 
      element = {<DestinationSearch/>} />

      <Route path='/noticeBoard' 
      element = {
      <NoticeBoard postList={postList.postList}/>}/>

      <Route path='/writingPage' 
      element = {<WritingPage />} />

      <Route path='/detail/:id' 
      element = {<NoticeBoardDetail postList = {postList.postList}/>} />
    </Routes>
    </>
  );
  
}

export default App;
