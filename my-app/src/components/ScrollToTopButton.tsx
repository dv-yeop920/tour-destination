import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUpLong} from "@fortawesome/free-solid-svg-icons";
import * as styled from '../style/styledComponents';


const ScrollToTopButton = () => {
    return (
        <>
            <styled.ScrollToTopButton className='sroll-to-top'>
                <FontAwesomeIcon
                    icon={faUpLong}
                    size = '2x'/>
            </styled.ScrollToTopButton>
        </>
    );
};

export default ScrollToTopButton;