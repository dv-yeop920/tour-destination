import React from 'react';
import { useDispatch } from 'react-redux';
import * as styled from '../style/styledComponents';
import { addMember } from '../store/memberSlice';


const SignUp = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e:any):void => {
        e.preventDefault();
        const userId = e.target.userId.value;
        const password = e.target.password.value;
        const email = e.target.email.value;
        const name = e.target.name.value;
        const birthday = e.target.birthday.value;
    
        dispatch(addMember({ userId, password, email, name, birthday }));

        e.target.reset();
    };
    return (
        <>
        <styled.formContainer 
        onSubmit={handleSubmit}>
        <h1 id='login-title'>회원 가입</h1>
        <form className='login-form'>
        <div className='field'>
            <styled.UserInput
            className ='sign-up user-id' 
            type='text'
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
            type='text'
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
            type='text'
            placeholder='생년 월일 8자리'/>
        </div>
        <div className='button-box'>
            <styled.DefaultButton
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