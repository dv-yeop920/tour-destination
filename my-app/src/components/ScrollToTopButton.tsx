import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUpLong} from "@fortawesome/free-solid-svg-icons";
import * as styled from '../style/styledComponents';


const ScrollToTopButton = () => {
    return (
        <>
            <styled.ScrollToTopButton>
                <styled.ScrollToTopIcon>
                <FontAwesomeIcon
                    icon={faUpLong}
                    size = '2x'/>
                </styled.ScrollToTopIcon>
            </styled.ScrollToTopButton>
        </>
    );
};

export default ScrollToTopButton;