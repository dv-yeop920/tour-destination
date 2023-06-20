import React from 'react';
import * as styled from '../style/styledComponents';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const WritingPage = () => {
    return (
        <>
        <div className="container mt-4">
            <form >
                <div className="form-group">
                    <h3>제목</h3>
                    <input
                    type="text"
                    className="form-control"
                    id="title"/>
                </div>
                <div className="form-group">
                <h3>내용</h3>
                <CKEditor
                editor={ClassicEditor}
                data="<p></p>"
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