


export type PostType = {
    post: Post[]
}

export type Post = {
    id:number,
    title:string,
    author:string,
    like:number,
    views:number,
    comment:number,
}

export interface PostListType {
    postList:PostType
}
