import React ,{useState}from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import PostData from './data/BoardData';
import NoticeBoard from './pages/NoticeBoard';
import Header from './components/Header';
import WritingPage from './pages/WritingPage';
import Main from './pages/Main';
import DestinationSearch from './pages/DestinationSearch';
import NoticeBoardDetail from './pages/NoticeBoardDetail';
import { PostListType } from './model/Board';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';


const App:React.FC = () => {
  const [postList] = useState<PostListType>(PostData);
  return (
    <>
    <Header/>
    <Routes>
      <Route 
      path='/' 
      element = {<Main/>} 
      />

      <Route 
      path='/login'
      element = {<Login/>}
      />

      <Route 
      path='/signUp'
      element = {<SignUp/>}
      />

      <Route 
      path='/myPage'
      element = {<MyPage/>}/>

      <Route 
      path='/search' 
      element = {<DestinationSearch/>} 
      />

      <Route 
      path='/noticeBoard' 
      element = {
      <NoticeBoard 
      postList={postList.postList}/>}
      />

      <Route 
      path='/writingPage' 
      element = {<WritingPage />} 
      />

      <Route 
      path='/detail/:id' 
      element = {<NoticeBoardDetail postList = {postList.postList}/>} 
      />
    </Routes>
    </>
  );
  
}

export default App;
