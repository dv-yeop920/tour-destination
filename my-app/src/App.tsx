import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import NoticeBoard from './page/NoticeBoard';
import Header from './components/Header';
import WritingPage from './page/WritingPage';
import BoardDetail from './components/BoardDetail';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element = {<div>main page</div>}/>
      <Route path='/NoticeBoard' element = {<NoticeBoard/>} />
      <Route path='/WritingPage' element = {<WritingPage/>} />
      <Route path='/detail:id' element = {<BoardDetail/>} />
    </Routes>
    </>
  );
}

export default App;
