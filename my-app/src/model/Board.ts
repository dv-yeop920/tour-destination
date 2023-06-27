

export interface PostListType {
    postList:Post[],
}



export type Post = {
    id:number,
    title:string,
    author:string,
    like:number,
    views:number,
    comment:number,
}
