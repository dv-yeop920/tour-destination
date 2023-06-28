import React from 'react';
import { useParams } from 'react-router';
import { PostListType , Post} from '../model/Board';


const NoticeBoardDetail:React.FC<PostListType> = ({postList}) => {
    const {id} = useParams();
    const selectedPost:Post[] = postList.filter((post) => post.id === Number(id));
    return (
        <>
            <div>
            <div>
                <h4>
                    {
                        selectedPost.map(post => {
                            return(
                                <>
                                <h1>{post.title}</h1>
                                <p>{post.content ?? post.content}</p>
                                </>
                            )
                        })
                    }</h4>
            </div>
        </div>
        </>
    );
};

export default NoticeBoardDetail;