

export interface PostListType {
    postList:Post[],
}



export type Post = {
    id:number,
    title:string,
    author:string,
    content?:string,
    date?:string,
    like:number,
    views:number,
    comment:number,
}
