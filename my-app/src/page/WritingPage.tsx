import React, { useState } from 'react';
import * as styled from '../style/styledComponents';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



const WritingPage = () => {
    const [userWritingValue , setUserWritingValue] = useState('');
    return (
        <>
        <div className="container mt-4">
            <form onSubmit={(e) => {
            e.preventDefault();
        }}>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control"
                    placeholder='제목'
                    id="title"/>
                </div>
                <div className="form-group">
                <CKEditor
                editor={ClassicEditor}
                data="<p>행복했던 여행 후기를 공유해 주세요!</p>"
                />
                </div>
                <div className='button-group'>
                    <styled.DeleteButton
                    onClick={() => alert('정말 취소 하시겠습니까?')}
                    type='submit'
                    className='delete-btn'>
                        취소
                    </styled.DeleteButton>
                    <div style={{width:'82px'}}>
                    </div>
                    <styled.DefaultButton
                    onClick={() => alert('게시글 등록 하시겠습니까?')}
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