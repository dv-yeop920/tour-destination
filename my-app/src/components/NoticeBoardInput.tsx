import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import * as styled from '../style/styledComponents';
import { useNavigate } from 'react-router';


const NoticeBoardInput = () => {
    const navigate = useNavigate();
    return (
        <>
            <form>
                <styled.InputBox>
                    <styled.Input></styled.Input>
                    <styled.Button
                    type='submit'
                    className='btn'>
                        검색
                    </styled.Button>
                    <FontAwesomeIcon
                    onClick={() => navigate('/WritingPage')}
                    className ='writing'
                    icon={faPenToSquare}
                    size = '2x'/>
                </styled.InputBox>
            </form>
        </>
    );
};

export default NoticeBoardInput;