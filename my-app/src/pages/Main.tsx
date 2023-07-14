import React from 'react';
import * as styled from '../style/styledComponents';
import { useNavigate } from 'react-router';

const Main = () => {
    const navigate = useNavigate();
    return (
        <>
        <styled.DefaultButton
        onClick={() => {return navigate('/search')}}
        style={{
        
        }}>
            Get Start!
        </styled.DefaultButton>
        </>
    );
};

export default Main;