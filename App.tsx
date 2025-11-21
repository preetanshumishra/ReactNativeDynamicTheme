/**
 * React Native Theme Sample App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, Platform } from 'react-native';
import { useEffect } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { RootNavigator } from './src/navigation/RootNavigator';
import { useThemeStore } from './src/store/themeStore';

function App() {
  const theme = useThemeStore((state) => state.currentThemeData);

  useEffect(() => {
    // Load saved theme and hide splash screen when app is ready
    const initializeApp = async () => {
      await useThemeStore.getState().loadTheme();
      if (Platform.OS === 'android') {
        SplashScreen.hide();
      }
    };
    initializeApp();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={theme.id === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.pageBackground}
      />
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
