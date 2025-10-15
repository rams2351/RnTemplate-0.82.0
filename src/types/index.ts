export interface IUser {
    [key: string]: any
}


export interface Action<P = any, T = any> {
    type: T;
    payload: P;
}