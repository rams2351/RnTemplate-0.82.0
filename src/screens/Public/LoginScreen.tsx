import Text from '@components/Text';
import { STORAGE_KEYS } from '@services/StorageService';
import { useTheme } from '@theme/ThemeProvider';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useMMKVBoolean } from 'react-native-mmkv';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen: React.FC = () => {
  const [login, setLogin] = useMMKVBoolean(STORAGE_KEYS.isLogin);
  const { colors, theme, setTheme } = useTheme();
  return (
    <SafeAreaView>
      <View>
        <Text style={{}}>LoginScreen {theme}</Text>

        <TouchableOpacity
          onPress={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
        >
          <Text>Change Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setLogin(true)}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
