import React, { useState } from 'react';
import * as styled from '../style/styledComponents';
import { useNavigate } from 'react-router';
import { Post, PostListType } from '../model/Board';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";




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
                onClick={() => navigate(`/detail/${post.id}`)
                }>
                    <div className='post-box'>
                        <styled.Title>
                            {post.title}
                        </styled.Title>
                        <div>
                        <styled.Span>
                            {post.author}
                        </styled.Span>
                        <styled.Span className='like-count'>
                            ❤️ {post.like}
                        </styled.Span>
                        <styled.Span className='watching-count'>
                            조회 {post.views}
                        </styled.Span>
                        <styled.Span className='comment-count'>
                            댓글 {post.comment}
                        </styled.Span>
                        </div>
                        
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
        className='input-form'
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
                color:'rgb(200, 50, 100)'
            }}>
                <div>
                    <styled.Title>
                        [공지]
                    </styled.Title>
                    <styled.Title 
                    style={{
                        fontSize:'16px',
                        color:'black'
                    }}>
                        게시판 이용 수칙
                    </styled.Title>
                </div>
            </styled.Li>
            { PostsRender() }
        </styled.Board>
        </>
        
    );
};

export default NoticeBoardList;