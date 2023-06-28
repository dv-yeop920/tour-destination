import React, { useState } from 'react';
import * as styled from '../style/styledComponents';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Image } from '@ckeditor/ckeditor5-image';
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
                <div className="form-group">
                <CKEditor
                editor={ClassicEditor}
                data="<p>행복했던 여행 후기를 공유해 주세요!</p>"
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( value, editor ) => {
                    const data = editor.getData();
                    setUserWritingValue(data);
                    console.log(userWritingValue)
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }/>
                
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