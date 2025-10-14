import { STORAGE_KEYS } from '@services/StorageService';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useMMKVBoolean } from 'react-native-mmkv';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen: React.FC = () => {
  const [login, setLogin] = useMMKVBoolean(STORAGE_KEYS.isLogin);
  return (
    <SafeAreaView>
      <View>
        <Text>LoginScreen</Text>
        <TouchableOpacity onPress={() => setLogin(true)}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
