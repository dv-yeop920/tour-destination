import React from 'react';
import * as styled from '../style/styledComponents';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux'; 
import { RootState } from '../store/store';



const NoticeBoardList:React.FC = () => {
    const postData = useSelector((state:RootState) => {return state.posts})
    const navigate = useNavigate();
    return (
        <>
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
                {postData.map((post) => {
                    return(
                        
                        <styled.Li onClick={() => navigate(`/detail:${post.id}`)}>
                            <div className='post-box'>
                                <styled.Title>
                                    {post.title}
                                </styled.Title>
                                <styled.Author>
                                {post.author}
                                <span className='like'>
                                    ❤️
                                </span>
                                <span className='like-count'>0</span>
                                <span className='watching-count'>조회 0</span>
                                <span className='comment-count'>댓글 0</span>
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