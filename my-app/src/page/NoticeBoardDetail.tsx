import React, { useState } from 'react';
import { useParams } from 'react-router';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { PostListType , Post} from '../model/Board';
import * as styled from '../style/styledComponents';


const NoticeBoardDetail:React.FC<PostListType> = ({postList}) => {
    const {id} = useParams();
    const [commentModal,setCommentModal] = useState(false);
    const selectedPost:Post[] = postList.filter((post) => post.id === Number(id));

    return (
        <>
        {
        selectedPost.map(post => {
            return(
                <>
                <styled.BoxDiv className='post-title'>
                    <div className='post-title_column'>
                        <h2>{post.title}</h2>
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
                                    {post.date}
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
                                <span>좋아요❤️</span>
                            </styled.DefaultButton>
                            </div>
                        </div>
                    </div>
                </styled.BoxDiv>
                <div className='post-content'>
                <p>{post.content &&  post.content}</p>
                </div>
                <div className='user-comment-wrap'>
                    <div className='user-comment-comment'>
                        <styled.Title>{`댓글 ${post.comment}>`}</styled.Title>
                    </div>
                    <div className='users-comment'>

                    </div>
                    <div 
                    className='comment-comment-button'
                    onClick={() => {
                        commentModal === false ? setCommentModal(true) : setCommentModal(false);
                    }}>
                        <p>여기를 클릭해서 댓글을 남겨보세요.</p>
                    </div>
                </div>
                {commentModal === true ? <CommentModal/> : null}
                </>
                )
            })
        }
        <ScrollToTopButton/>
        </>
    );
};

const CommentModal = () => {
    return(
        <>
        <form 
        className='comment-input-form'
        onSubmit={(e) => {
            e.preventDefault();
        }}>
            <styled.InputBox className='comment-box'>
                    <textarea className='comment-input'>
                    </textarea>
            </styled.InputBox>
            <div id='comment-button-box'>
                <div></div>
                <div></div>
                <div>
                    <styled.DefaultButton 
                    type='submit'
                    className='default-btn'>
                        등록
                    </styled.DefaultButton>
                </div>
            </div>
        </form>
        </>
    )
}

export default NoticeBoardDetail;