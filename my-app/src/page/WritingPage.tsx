import React from 'react';
import * as styled from '../style/styledComponents';

const WritingPage = () => {
    return (
        <>
        <div className="container mt-4">
            <form >
                <div className="form-group">
                    <label htmlFor="title">제목</label>
                    <input
                    type="text"
                    className="form-control"
                    id="title"/>
                </div>
                <div className="form-group">
                <label htmlFor="content">내용</label>
                <textarea
                className="form-control"
                id="content">
                </textarea>
                </div>
                <styled.Button
                style={{width:'103%'}}
                type='submit'
                className='btn'>
                    등록
                </styled.Button>
            </form>
        </div>
        </>
    );
};

export default WritingPage;