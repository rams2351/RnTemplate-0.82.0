import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/Auth/HomeScreen';
import ProfileScreen from '@screens/Auth/Profile';
import FontText from '@screens/Font';
import LoginScreen from '@screens/Public/LoginScreen';
import { STORAGE_KEYS } from '@services/StorageService';
import { useMemo } from 'react';
import { useMMKVBoolean } from 'react-native-mmkv';

const AUTH_SCREENS = {
  HomeScreen,
  ProfileScreen,
  FontText,
};

const PUBLIC_SCREENS = {
  LoginScreen,
};

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [isLogin = false] = useMMKVBoolean(STORAGE_KEYS.isLogin);

  const SCREENS = useMemo(
    () => (isLogin ? AUTH_SCREENS : PUBLIC_SCREENS),
    [isLogin],
  );

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {Object.entries(SCREENS).map(([name, Component]) => (
        <Stack.Screen key={name} name={name} component={Component} />
      ))}
    </Stack.Navigator>
  );
}
