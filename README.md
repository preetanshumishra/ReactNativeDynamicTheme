# React Native Dynamic Theme

A feature-rich React Native mobile application with dynamic theming system, MVVM architecture, and state management using Zustand.

## Features

- **Dynamic Theming**: 5 pre-built color themes that can be switched at runtime
- **Bottom Tab Navigation**: Three main screens with intuitive navigation
- **MVVM Architecture**: Clean separation of concerns with ViewModels
- **State Management**: Zustand for efficient global state management
- **Persistent Storage**: AsyncStorage integration for theme persistence
- **Splash Screens**: Native splash screens for both iOS and Android
- **Cross-platform**: Fully functional on iOS and Android

## Theme Variants

The app includes 5 built-in themes:
1. **Light** - Clean light theme with neutral colors
2. **Dark** - Full dark theme for eye comfort
3. **Ocean** - Blue-themed professional look
4. **Forest** - Green-themed nature-inspired theme
5. **Sunset** - Warm orange and pink tones

## Project Structure

```
ReactNativeDynamicTheme/
├── src/
│   ├── screens/       # App screens
│   ├── navigation/    # React Navigation setup
│   ├── store/         # Zustand store configuration
│   ├── theme/         # Theme definitions and utilities
│   ├── components/    # Reusable components
│   └── hooks/         # Custom hooks
├── android/           # Android native code
├── ios/              # iOS native code
└── App.tsx           # Root component
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- React Native development environment set up
- iOS: Xcode 14+ and CocoaPods
- Android: Android Studio and Android SDK

### Installation

1. Install dependencies:
```bash
npm install
```

2. Install iOS pods:
```bash
cd ios && pod install && cd ..
```

3. Start the Metro bundler:
```bash
npm start
```

4. Run on iOS:
```bash
npm run ios
```

5. Run on Android:
```bash
npm run android
```

## Development

### Available Commands

- `npm start` - Start Metro bundler
- `npm run ios` - Build and run on iOS simulator
- `npm run android` - Build and run on Android emulator
- `npm run build:ios` - Build iOS app for release
- `npm run build:android` - Build Android APK

### Key Technologies

- **React Native**: Cross-platform mobile framework
- **React Navigation**: Navigation library
- **Zustand**: Lightweight state management
- **TypeScript**: Type-safe development
- **Hermes Engine**: Performance-optimized JavaScript engine

## Theme Management

Themes are managed through Zustand store and persist across app sessions:

```typescript
// Store automatically handles persistence
const { currentTheme, setTheme, themes } = useThemeStore();

// Switch theme
setTheme('dark');
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Preetanshu Mishra

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.
