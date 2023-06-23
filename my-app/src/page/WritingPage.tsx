import React, { useState } from 'react';
import * as styled from '../style/styledComponents';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PostType } from '../model/Board';


const WritingPage = () => {
    const [userWritingValue , setUserWritingValue] = useState('');
    return (
        <>
        <div className="container mt-4">
            <form >
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
                    type='submit'
                    className='delete-btn'>
                        취소
                    </styled.DeleteButton>
                    <div style={{width:'82px'}}>
                    </div>
                    <styled.DefaultButton
                    onClick={() => {
                        
                    }}
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