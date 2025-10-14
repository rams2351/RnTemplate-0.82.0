import { MMKV } from 'react-native-mmkv';


export enum STORAGE_KEYS {
    isLogin = 'isLogin',
    user = 'user'
}



export const storage = new MMKV();
