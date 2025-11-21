export type Theme = 'light' | 'dark' | 'blue' | 'orange' | 'white';

export interface ThemeModel {
  id: Theme;
  title: string;
  description: string;
  colors: {
    pageBackground: string;
    textPrimary: string;
    textSecondary: string;
    primary: string;
    buttonBackground: string;
    buttonText: string;
    border: string;
  };
}

export const themes: Record<Theme, ThemeModel> = {
  light: {
    id: 'light',
    title: 'Light',
    description: 'Light theme with neutral colors',
    colors: {
      pageBackground: '#FFFFFF',
      textPrimary: '#000000',
      textSecondary: '#666666',
      primary: '#007AFF',
      buttonBackground: '#007AFF',
      buttonText: '#FFFFFF',
      border: '#E0E0E0',
    },
  },
  dark: {
    id: 'dark',
    title: 'Dark',
    description: 'Dark theme with eye-friendly colors',
    colors: {
      pageBackground: '#1C1C1E',
      textPrimary: '#FFFFFF',
      textSecondary: '#A0A0A0',
      primary: '#0A84FF',
      buttonBackground: '#0A84FF',
      buttonText: '#FFFFFF',
      border: '#424245',
    },
  },
  blue: {
    id: 'blue',
    title: 'Blue',
    description: 'Blue theme with cool tones',
    colors: {
      pageBackground: '#E3F2FD',
      textPrimary: '#1565C0',
      textSecondary: '#455A64',
      primary: '#1976D2',
      buttonBackground: '#1976D2',
      buttonText: '#FFFFFF',
      border: '#90CAF9',
    },
  },
  orange: {
    id: 'orange',
    title: 'Orange',
    description: 'Orange theme with warm tones',
    colors: {
      pageBackground: '#FFE8D6',
      textPrimary: '#E65100',
      textSecondary: '#5D4037',
      primary: '#F57C00',
      buttonBackground: '#F57C00',
      buttonText: '#FFFFFF',
      border: '#FFCC80',
    },
  },
  white: {
    id: 'white',
    title: 'White',
    description: 'White theme with minimal contrast',
    colors: {
      pageBackground: '#FAFAFA',
      textPrimary: '#333333',
      textSecondary: '#888888',
      primary: '#555555',
      buttonBackground: '#555555',
      buttonText: '#FFFFFF',
      border: '#EEEEEE',
    },
  },
};
