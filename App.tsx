import NavigationContainer from '@navigation/NavigationContainer';
import ThemeProvider, { useTheme } from '@theme/ThemeProvider';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <ThemeProvider>
      <NavigationWrapper />
    </ThemeProvider>
  );
}

export default App;

const NavigationWrapper = () => {
  const { colors, theme } = useTheme();
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={theme == 'dark' ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer />
    </SafeAreaProvider>
  );
};
