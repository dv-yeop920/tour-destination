import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import NoticeBoard from './page/NoticeBoard';
import Header from './components/Header';
import WritingPage from './page/WritingPage';
import BoardDetail from './components/BoardDetail';
import Main from './page/Main';
import DestinationSearch from './page/DestinationSearch';
import BoardData from './BoardData';

const App:React.FC = () => {
  const [post , setPost] = useState(BoardData);
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element = {<Main/>} />
      <Route path='/search' element = {<DestinationSearch/>} />
      <Route path='/noticeBoard' element = {<NoticeBoard post = {post}/>} />
      <Route path='/writingPage' element = {<WritingPage />} />
      <Route path='/detail:id' element = {<BoardDetail/>} />
    </Routes>
    </>
  );
  
}

export default App;
