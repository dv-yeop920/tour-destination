import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router';

const WritingIcon = () => {
    const navigate = useNavigate();
    return (
        <>
            <FontAwesomeIcon
                className ='writing'
                onClick={() => {navigate('/writingPage')}}
                icon={faPenToSquare}
                size = '2x'/>
        </>
    );
};

export default WritingIcon;