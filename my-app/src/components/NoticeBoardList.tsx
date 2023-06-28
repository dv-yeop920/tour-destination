import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import * as styled from '../style/styledComponents';
import { useNavigate } from 'react-router';
import { Post, PostListType } from '../model/Board';



const NoticeBoardList:React.FC<PostListType> = ({postList}) => {
    
    const navigate = useNavigate();
    const [userInputValue , setUserInputValue] = useState<string>('');
    const [filteringPost , setFilteringPost] = useState<PostListType>();

    const handleFilterPost = (userValue:string):void => {
        const filterPost:Post[] = postList.filter((post:Post) => {
            return post.title.includes(userValue);
        });
        setFilteringPost({postList:filterPost});
    }
    return (
        <>
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
                <styled.InputBox>
                    <styled.Input 
                    type="text"
                    onChange={(e) => {
                        setUserInputValue(e.target.value);
                    }} />
                    <styled.DefaultButton
                    onClick={() => {
                        handleFilterPost(userInputValue);
                    }}
                    type='submit'
                    className='default-btn'>
                        검색
                    </styled.DefaultButton>
                    <FontAwesomeIcon
                    className ='writing'
                    onClick={() => {navigate('/writingPage')}}
                    icon={faPenToSquare}
                    size = '2x'/>
                </styled.InputBox>
            </form>
            
            <styled.Board>
                <styled.Li 
                onClick={() => navigate('/detail:id')}
                style={{
                    height:'100px',
                    color:'rgb(200, 50, 100)'
                }}>
                    <styled.Title>
                        [공지]
                    <styled.Author 
                    style={{
                        fontSize:'16px',
                        color:'black'
                    }}>
                        게시판 이용 수칙
                    </styled.Author>
                    </styled.Title>
                </styled.Li>
                {filteringPost ? filteringPost?.postList.map((post:any , i:any) => {
                    return(
                        <styled.Li 
                        key={postList[i].id}
                        onClick={() => navigate(`/detail:${post.id}`)}>
                            <div className='post-box'>
                                <styled.Title>
                                    {post.title}
                                </styled.Title>
                                <styled.Author>
                                {post.author}
                                <span className='like'>
                                    ❤️
                                </span>
                                <span className='like-count'>{post.like}</span>
                                <span className='watching-count'>조회 {post.views}</span>
                                <span className='comment-count'>댓글 {post.comment}</span>
                                </styled.Author>
                            </div>
                            <div className='post-image-container'>
                                <img  alt="" 
                                style={{
                                width:'80px', 
                                height:'70px',
                                marginTop:'4px'}}/>
                            </div>
                        </styled.Li>
                    )
                }):
                postList.map((post , i) => {
                    return(
                        
                        <styled.Li 
                        key={postList[i].id}
                        onClick={() => navigate(`/detail:${post.id}`)}>
                            <div className='post-box'>
                                <styled.Title>
                                    {post.title}
                                </styled.Title>
                                <styled.Author>
                                {post.author}
                                <span className='like'>
                                    ❤️
                                </span>
                                <span className='like-count'>{post.like}</span>
                                <span className='watching-count'>조회 {post.views}</span>
                                <span className='comment-count'>댓글 {post.comment}</span>
                                </styled.Author>
                            </div>
                            <div className='post-image-container'>
                                <img  alt="" 
                                style={{
                                width:'80px', 
                                height:'70px',
                                marginTop:'4px'}}/>
                            </div>
                        </styled.Li>
                    )
                })}
            </styled.Board>
        </>
        
    );
};

export default NoticeBoardList;