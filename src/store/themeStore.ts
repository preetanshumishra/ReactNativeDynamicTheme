import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { Theme, ThemeModel, themes } from '../resources/themes';

export type { Theme, ThemeModel };

const THEME_STORAGE_KEY = 'selectedTheme';

interface ThemeState {
  currentTheme: Theme;
  currentThemeData: ThemeModel;
  availableThemes: ThemeModel[];
  setTheme: (theme: Theme) => void;
  loadTheme: () => Promise<void>;
}

export const useThemeStore = create<ThemeState>((set) => ({
  currentTheme: 'light',
  currentThemeData: themes.light,
  availableThemes: Object.values(themes),
  setTheme: async (theme: Theme) => {
    set({
      currentTheme: theme,
      currentThemeData: themes[theme],
    });
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  },
  loadTheme: async () => {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme && (savedTheme in themes)) {
        const theme = savedTheme as Theme;
        set({
          currentTheme: theme,
          currentThemeData: themes[theme],
        });
      }
    } catch (error) {
      console.error('Failed to load theme:', error);
    }
  },
}));
