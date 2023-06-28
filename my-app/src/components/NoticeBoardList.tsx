import React, { useState } from 'react';
import * as styled from '../style/styledComponents';
import { useNavigate } from 'react-router';
import { Post, PostListType } from '../model/Board';
import WritingIcon from './WritingIcon';



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


    const PostsRender = ():JSX.Element[] => {
        const posts = filteringPost ? filteringPost.postList : postList;

        return posts.map((post:Post,i:number) => {
            return(
                <styled.Li 
                key={posts[i].id}
                onClick={() => navigate(`/detail:${post.id}`)
                }>
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
            );
        });
    };

    return (
        <>
        <form
        onSubmit={(e) => {
            e.preventDefault();
        }}>
            <styled.InputBox>
                <styled.Input 
                type="text"
                onChange={(e) => {
                    setUserInputValue(e.target.value);
                }} />
                <styled.DefaultButton
                type='submit'
                className='default-btn'
                onClick={() => {
                    handleFilterPost(userInputValue);
                }}>
                    검색
                </styled.DefaultButton>
                <WritingIcon/>
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
            {PostsRender()}
        </styled.Board>
        </>
        
    );
};

export default NoticeBoardList;