import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as styled from '../style/styledComponents';
import { addMember } from '../store/memberSlice';




const SignUp = () => {
    const init = useSelector((state:any) => state.members)
    const dispatch = useDispatch();
    const handleSubmit =  (e:any):void => {
        const userId = 'asd';
        const password = 'asd';
        const email = 'asd';
        const name = 'asd';
        const birthday = 'asasda';
    
        dispatch(addMember({ userId, password, email, name, birthday }));
        console.log(init)
    };
    return (
        <>
        <styled.formContainer>
        <h1 id='login-title'>회원 가입</h1>
        <form 
        className='login-form'
        onSubmit={(e) => {
            e.preventDefault() 
            
        }}>
        <div className='field'>
            <styled.UserInput
            className ='sign-up user-id' 
            type='user-id'
            placeholder='아이디 8~12자리 특수 문자는 제외'/>
        </div>
        <div className="field">
            <styled.UserInput 
            className ='sign-up user-pw' 
            type='password'
            placeholder='비밀 번호  8자리~10자리 영어,숫자,특수 문자 포함'/>
        </div>
        <div className="field">
            <styled.UserInput 
            className ='sign-up user-pw' 
            type='password'
            placeholder='비밀 번호 확인'/>
        </div>
        <div className="field">
            <styled.UserInput 
            className ='sign-up user-email' 
            type='email'
            placeholder='[선택] 비밀 번호 분실시 이메일'/>
        </div>
        <div className="field">
            <styled.UserInput 
            className ='sign-up user-name' 
            type='text'
            placeholder='이름'/>
        </div>
        <div className="field">
            <styled.UserInput 
            className ='sign-up user-birthday' 
            type='birthday'
            placeholder='생년 월일 8자리'/>
        </div>
        <div className='button-box'>
            <styled.DefaultButton
            onClick={handleSubmit}
            id='login-button' 
            type='submit'>
                회원 가입
            </styled.DefaultButton>
        </div>
        </form>
        </styled.formContainer>
        </>
    );
};

export default SignUp;