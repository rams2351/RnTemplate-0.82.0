import { STORAGE_KEYS } from '@services/StorageService';
import { useMMKVBoolean } from 'react-native-mmkv';

export const useAuth = () => {
  const [isLogin = false, setIsLogin] = useMMKVBoolean(STORAGE_KEYS.isLogin);
  return {
    isLogin,
    setIsLogin,
  };
};
