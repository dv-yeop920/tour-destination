import React, { useState } from 'react';
import { useParams } from 'react-router';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { PostListType , Post} from '../model/Board';
import * as styled from '../style/styledComponents';
import CommentModal from '../components/CommentModal';
import commentContent from '../data/comment';


const NoticeBoardDetail:React.FC<PostListType> = ({postList}) => {
    const {id} = useParams<string>();
    const [commentModal,setCommentModal] = useState<boolean>(false);

    const selectedComment = commentContent.filter((comment) => comment.id === Number(id));
    const comment = () => {
        return selectedComment.map((comment) => {
            return(
                <div className='user-comment-content'>
                    <p>{comment.comment}</p>
                </div>
            )
        })
    }
    const selectedPost:Post[] = postList.filter((post) => post.id === Number(id));
    
    const handleClickComment = () => {
        commentModal === false ? setCommentModal(true) : setCommentModal(false);
    }

    const PostDetailRender = ():JSX.Element[] => {
        return selectedPost.map<JSX.Element> (post => {
            return(
                <div className='post-detail' key={id}>
                <styled.BoxDiv className='post-title'>
                    <div className='post-title_column'>
                        <h2>
                            {post.title}
                        </h2>
                    </div>
                    <div className='user-wrap'>
                        <div className='user-id-box'>
                        <h4 className='user-id'>
                            {post.author}
                        </h4>
                        </div>
                        <div className='post-info'>
                            <div className='post-info__column'>
                                <styled.Span>
                                    {post.date && post.date}
                                </styled.Span>
                                <styled.Span>
                                    조회 {post.views}
                                </styled.Span>
                                <styled.Span>
                                    ❤️ {post.like}
                                </styled.Span>
                            </div>
                            <div>
                            <styled.DefaultButton className='default-btn'>
                                <span>
                                    좋아요❤️
                                </span>
                            </styled.DefaultButton>
                            </div>
                        </div>
                    </div>
                </styled.BoxDiv>

                <div className='post-content'>
                <p>
                    {post.content &&  post.content}
                </p>
                </div>

                <div className='user-comment-container'>
                    <div className='user-comment-count'>
                        <styled.Title>
                            {`댓글 ${post.comment}>`}
                        </styled.Title>
                    </div>
                    <div className='users-comment-container'>
                        <ul className='users-comment-wrap'>
                            <li className='users-comment'>
                                <div className='user-id-box'>
                                    <h4 className='user-id'>
                                        {post.author}
                                    </h4>
                                </div>
                                {comment()}
                                <div className='user-comment-info'>
                                    <styled.Span>
                                        {post.date && post.date}
                                    </styled.Span>
                                    <styled.Span>
                                        ❤️ {post.like}
                                    </styled.Span>
                                    <styled.Span 
                                    style={{'cursor':'pointer'}}
                                    onClick={handleClickComment}>
                                        답글 쓰기
                                    </styled.Span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='users-comment-container'>
                        <ul className='users-comment-wrap'>
                            <li className='users-comment'>
                                <div className='user-id-box'>
                                    <h4 className='user-id'>
                                        {post.author}
                                    </h4>
                                </div>
                                {comment()}
                                <div className='user-comment-info'>
                                    <styled.Span>
                                        {post.date && post.date}
                                    </styled.Span>
                                    <styled.Span>
                                        ❤️ {post.like}
                                    </styled.Span>
                                    <styled.Span 
                                    style={{'cursor':'pointer'}}
                                    onClick={handleClickComment}>
                                        답글 쓰기
                                    </styled.Span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    {commentModal === true ? <CommentModal setCommentModal={setCommentModal}/> : null}
                    <div
                    className='comment-comment-button'
                    onClick={handleClickComment}>
                        <p>
                            여기를 클릭해서 댓글을 남겨보세요.
                        </p>
                    </div>
                </div>
                </div>
                )
            });
    }

    return (
        <>
        { PostDetailRender() }
        <ScrollToTopButton/>
        </>
    );
};



export default NoticeBoardDetail;