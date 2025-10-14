import StackNavigator from '@navigation/StackNavigator';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer as NavContainer,
} from '@react-navigation/native';
import NavigationService from '@services/NavigationService';
import { useColorScheme } from 'react-native';

export default function NavigationContainer() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavContainer
      ref={r => NavigationService.init(r)}
      theme={isDarkMode ? DarkTheme : DefaultTheme}
    >
      <StackNavigator />
    </NavContainer>
  );
}
