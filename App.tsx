import NavigationContainer from '@navigation/NavigationContainer';
import ThemeProvider from '@theme/ThemeProvider';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
