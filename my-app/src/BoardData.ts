import { PostListType } from './model/Board';


const PostData:PostListType = 
{
    postList:[
        {
            id:0,
            title: '첫번째 게시물',
            author: '작성자1',
            like: 3,
            views: 30,
            comment: 5
        },
        {
            id:1,
            title: '두범째 게시물',
            author: '작성자2',
            like: 5,
            views: 10,
            comment: 5
        }
    ]
}

export default PostData;