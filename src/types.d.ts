export interface IUser {
    [key: string]: any
}


export interface Action<P = any, T = any> {
    type: T;
    payload: P;
}

export interface APIResponse {
    status: number
    message?: string
    data?: any
    [key: string]: any
}
