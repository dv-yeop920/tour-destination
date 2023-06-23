import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import * as styled from '../style/styledComponents';
import { useNavigate } from 'react-router';
import { PostType } from '../model/Board';


const NoticeBoardInput = ({post}:{post:PostType[]}) => {
    const navigate = useNavigate();
    const [userInputValue , setUserInputValue] = useState<string>('');
    return (
        <>
            <form>
                <styled.InputBox>
                    <styled.Input 
                    type="text"
                    onChange={(e) => {
                        setUserInputValue(e.target.value);
                        console.log(userInputValue)
                    }} />
                    <styled.DefaultButton
                    type='submit'
                    className='default-btn'>
                        검색
                    </styled.DefaultButton>
                    <FontAwesomeIcon
                    className ='writing'
                    onClick={() => {navigate('/writingPage')}}
                    icon={faPenToSquare}
                    size = '2x'/>
                </styled.InputBox>
            </form>
        </>
    );
};

export default NoticeBoardInput;