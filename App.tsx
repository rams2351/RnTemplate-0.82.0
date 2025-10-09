import { FontAwesome } from '@react-native-vector-icons/fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FontText from './src/screens/Font';
import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/Profile';

// Screens

const Tab = createBottomTabNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#007bff',
            tabBarInactiveTintColor: '#999',
            tabBarStyle: {
              borderTopWidth: 0.5,
              borderTopColor: '#ccc',
              backgroundColor: isDarkMode ? '#111' : '#fff',
            },
            tabBarIcon: ({ color, size }) => {
              let iconName: string;

              switch (route.name) {
                case 'Home':
                  iconName = 'home';
                  break;
                case 'Profile':
                  iconName = 'user';
                  break;
                default:
                  iconName = 'circle';
              }

              return (
                <FontAwesome name={iconName as any} color={color} size={size} />
              );
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Text" component={FontText} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
