import NavigationContainer from '@navigation/NavigationContainer';
import { store } from '@redux/store';
import ThemeProvider from '@theme/ThemeProvider';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <SafeAreaProvider>
          <NavigationContainer />
        </SafeAreaProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
