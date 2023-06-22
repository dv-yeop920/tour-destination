import React from 'react';
import { useParams } from 'react-router';
const BoardDetail = () => {
    const {id} = useParams();
    return (
        <>
            상세페이지{id}
        </>
    );
};

export default BoardDetail;