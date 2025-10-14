import NavigationService from '@services/NavigationService';
import { STORAGE_KEYS } from '@services/StorageService';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useMMKVBoolean } from 'react-native-mmkv';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen: React.FC = () => {
  const [login, setLogin] = useMMKVBoolean(STORAGE_KEYS.isLogin);

  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>

        <TouchableOpacity onPress={() => setLogin(false)}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => NavigationService.navigate('ProfileScreen')}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => NavigationService.push('FontText')}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLogin(false)}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
