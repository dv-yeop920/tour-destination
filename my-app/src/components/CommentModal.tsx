import React from 'react';
import * as styled from '../style/styledComponents';

const CommentModal = ():JSX.Element => {
    return(
        <>
        <form
        className='comment-input-form'
        onSubmit={(e) => {
            e.preventDefault();
        }}>
            <styled.InputBox className='comment-box'>
                    <textarea 
                    className='comment-input'>
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

export default CommentModal;