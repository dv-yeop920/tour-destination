
export interface Member {
    userId: string;
    password: string;
    email: string;
    name: string;
    birthday: string;
}

export interface Members {
    members: Member[];
}