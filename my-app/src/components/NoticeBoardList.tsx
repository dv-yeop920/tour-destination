import React from 'react';
import * as styled from '../style/styledComponents';

const NoticeBoardList = () => {
    const posts = [
        {
        id: 1,
        image:'data:image/jpeg;base64,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',
        title: '자유 게시판 첫 번째 글',
        author: '작성자1',
        },
        {
        id: 2,
        title: '자유 게시판 두 번째 글',
        author: '작성자2',
        },
        {
            id:3,
            title:'자유 게시판 N 번째 글',
            author: '작성자',
        },
        {
            id:4,
            title:'자유 게시판 N 번째 글',
            author: '작성자',
        },
        {
            id:5,
            title:'자유 게시판 N 번째 글',
            author: '작성자',
        },
        {
            id:6,
            title:'자유 게시판 N 번째 글',
            author: '작성자',
        },
        {
            id:7,
            title:'자유 게시판 N 번째 글',
            author: '작성자',
        },
        {
            id:8,
            title:'자유 게시판 N 번째 글',
            author: '작성자',
        },
        {
            id:9,
            title:'자유 게시판 N 번째 글',
            author: '작성자',
        },
        {
            id:10,
            title:'자유 게시판 N 번째 글',
            author: '작성자',
        },
        {
            id:11,
            title:'자유 게시판 N 번째 글',
            author: '작성자',
        },
        {
            id:12,
            title:'자유 게시판 N 번째 글',
            author: '작성자',
        },
    ];
    return (
        <>
            <styled.Board>
                <styled.Li style={{height:'100px',color:'rgb(200, 50, 100)'}}>
                    <styled.Title>
                        [공지]
                    <styled.Author style={{fontSize:'16px',color:'black'}}>
                        게시판 이용 수칙
                    </styled.Author>
                    </styled.Title>
                </styled.Li>
                {posts.map(post => {
                    return(
                        
                        <styled.Li>
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
                                <img src={post.image} alt="" 
                                style={{
                                width:'90px', 
                                height:'80px',
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