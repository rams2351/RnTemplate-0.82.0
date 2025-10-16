import { MMKV } from 'react-native-mmkv';


export enum STORAGE_KEYS {
    isLogin = 'isLogin',
    user = 'user'
}



export const mmkv = new MMKV();

export const MMKVStorage = {
    setItem: (key: string, value: string) => {
        mmkv.set(key, value);
        return Promise.resolve(true);
    },
    getItem: (key: string) => {
        const value = mmkv.getString(key);
        return Promise.resolve(value ?? null);
    },
    removeItem: (key: string) => {
        mmkv.delete(key);
        return Promise.resolve();
    },
};
