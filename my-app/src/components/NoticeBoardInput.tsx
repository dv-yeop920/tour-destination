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
                <div className='input-container'>
                    <styled.Input></styled.Input>
                    <styled.Button>검색</styled.Button>
                    <FontAwesomeIcon
                    onClick={() => navigate('/WritingPage')}
                    className ='writing'
                    icon={faPenToSquare}
                    size = '2x'
                    style={{ 
                        cursor: 'pointer',
                        boxShadow: 'rgba(0, 0, 0, 0.1) -4px 9px 25px -6px'
                    }}/>
                </div>
            </form>
        </>
    );
};

export default NoticeBoardInput;