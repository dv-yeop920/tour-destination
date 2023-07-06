import React from 'react';
import * as styled from '../style/styledComponents.js';
import { useNavigate } from 'react-router';


const Header = () => {
    const navigate = useNavigate();
    return (
        <>
        <styled.Navbar>
            <styled.MenuList>
                <styled.NavTitle onClick={() => navigate('/')}>Tour</styled.NavTitle>
                <styled.MenuItem>Menu 1</styled.MenuItem>
                <styled.MenuItem>Menu 2</styled.MenuItem>
                <styled.MenuItem>Menu 3</styled.MenuItem>
                <styled.MenuItem onClick={() => navigate('/noticeBoard')}>자유 게시판</styled.MenuItem>
                <styled.MenuItem onClick={() => navigate('/login')}>로그인</styled.MenuItem>
                <styled.MenuItem onClick={() => navigate('/signUp')}>회원 가입</styled.MenuItem>
            </styled.MenuList>
        </styled.Navbar>
        </>
    );
};

export default Header;