import React, { useState } from 'react';
import * as styled from '../style/styledComponents';
import { useNavigate } from 'react-router';



const WritingPage = () => {
    const [userWritingValue , setUserWritingValue] = useState<string>('');
    const navigate = useNavigate();
    return (
        <>
        <div className="container mt-4">
            <form onSubmit={(e) => {
            e.preventDefault();
            }}>
                <div className="form-group">
                    <input
                    id="title"
                    type="text"
                    className="form-control"
                    placeholder='제목'
                    onChange={(e) => {
                        setUserWritingValue(e.target.value);
                        console.log(userWritingValue)
                    }}/>
                </div>

                <div className='button-group'>
                    <styled.DeleteButton
                    onClick={() => {
                        navigate('/noticeBoard')
                    }}
                    type='submit'
                    className='delete-btn'>
                        취소
                    </styled.DeleteButton>
                    <div style={{width:'82px'}}>
                    </div>
                    <styled.DefaultButton
                    onClick={() => navigate('/noticeBoard')}
                    type='submit'
                    className='default-btn'>
                        등록
                    </styled.DefaultButton>
                </div>
            </form>
        </div>
        </>
    );
};

export default WritingPage;