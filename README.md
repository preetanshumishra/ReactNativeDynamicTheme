# ReactNativeDynamicTheme

A feature-rich React Native application demonstrating professional dynamic theming. This project serves as a best-practice reference for implementing theme systems with Zustand state management and persistent storage.

## Overview

ReactNativeDynamicTheme showcases **professional theming patterns** in React Native:
- **5 Complete Themes** - Light, Dark, Blue, Orange, and White color schemes
- **Zustand State Management** - Lightweight, modern state management
- **AsyncStorage Persistence** - Theme preferences survive app restarts
- **Type-Safe Theme System** - Full TypeScript support with type definitions
- **Bottom Tab Navigation** - Mobile-friendly navigation pattern with theme support
- **Dynamic Styling** - Real-time theme switching without restart
- **Responsive Design** - Adapts to different screen sizes and orientations
- **Hermes Engine** - Performance optimization for faster execution

## Project Structure

```
ReactNativeDynamicTheme/
├── src/
│   ├── resources/
│   │   └── themes.ts                 # Theme definitions (5 themes)
│   │
│   ├── store/
│   │   └── themeStore.ts             # Zustand theme state management
│   │
│   ├── screens/
│   │   ├── HomeScreen.tsx            # Home screen with theme demo
│   │   ├── ProfileScreen.tsx         # Profile screen
│   │   └── ThemeSelectionScreen.tsx  # Theme switcher UI
│   │
│   ├── navigation/
│   │   ├── RootNavigator.tsx         # Tab navigation setup
│   │   └── [Navigation stacks]
│   │
│   ├── components/
│   │   └── [Reusable components]
│   │
│   └── App.tsx                       # Root component
│
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript config
├── app.json                          # Expo config
└── eas.json                          # EAS build config
```

## Tech Stack

| Component | Version | Purpose |
|-----------|---------|---------|
| **React Native** | 0.76+ | Mobile framework |
| **Expo** | 54.0.25 | Cross-platform build |
| **TypeScript** | 5.8.3 | Type safety |
| **Zustand** | 5.0.8 | Lightweight state management |
| **React Navigation** | 6+ | Tab & stack navigation |
| **AsyncStorage** | 2.2.0 | Persistent storage |
| **ESLint** | Latest | Code quality |
| **Prettier** | Latest | Code formatting |

## Available Themes

### 5 Pre-Built Themes

Each theme is a complete color scheme with 7 standard color keys:

| Theme | Primary | Background | Text Primary | Purpose |
|-------|---------|-----------|--------------|---------|
| **Light** | #007AFF (iOS Blue) | #FFFFFF | #000000 | Daytime |
| **Dark** | #0A84FF (Bright Blue) | #1C1C1E | #FFFFFF | Evening |
| **Blue** | #1976D2 (Material Blue) | #E3F2FD | #1565C0 | Cool tones |
| **Orange** | #F57C00 (Material Orange) | #FFE8D6 | #E65100 | Warm tones |
| **White** | #555555 (Dark Gray) | #FAFAFA | #333333 | Minimal |

### Color Resource Keys

All themes define these standardized keys:

```typescript
interface ThemeColors {
  pageBackground: string;       // Main page background
  textPrimary: string;          // Primary text color
  textSecondary: string;        // Secondary text color
  primary: string;              // Primary accent color
  buttonBackground: string;     // Button background
  buttonText: string;           // Button text color
  border: string;               // Border/separator color
}
```

## Architecture

### Theme Definition

**Theme Type Union** (`resources/themes.ts`):
```typescript
export type Theme = 'light' | 'dark' | 'blue' | 'orange' | 'white';

export interface ThemeModel {
  id: Theme;
  title: string;
  description: string;
  colors: ThemeColors;
}

export const themes: Record<Theme, ThemeModel> = {
  light: { /* ... */ },
  dark: { /* ... */ },
  // ... more themes
};
```

### State Management with Zustand

**Theme Store** (`store/themeStore.ts`):
```typescript
export const useThemeStore = create<ThemeState>((set) => ({
  currentTheme: 'light',
  currentThemeData: themes.light,
  availableThemes: Object.values(themes),

  setTheme: async (theme: Theme) => {
    // Update state
    // Save to AsyncStorage
  },

  loadTheme: async () => {
    // Load from AsyncStorage
    // Fallback to light theme
  },
}));
```

### Persistent Storage

Themes are persisted using AsyncStorage:
- **Storage Key**: `'selectedTheme'`
- **Format**: Theme ID string
- **Fallback**: Light theme if not found
- **Lifetime**: Survives app restarts and device resets

### Dynamic Styling

Screens use theme colors through `useThemeStore` hook:

```typescript
export const HomeScreen = () => {
  const { currentThemeData } = useThemeStore();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: currentThemeData.colors.pageBackground,
    },
    text: {
      color: currentThemeData.colors.textPrimary,
    },
  });

  return <View style={styles.container}>...</View>;
};
```

### Navigation Integration

**RootNavigator.tsx** - Tab navigation with theme styling:
```typescript
<NavigationContainer
  theme={{
    colors: {
      primary: currentThemeData.colors.primary,
      background: currentThemeData.colors.pageBackground,
      card: currentThemeData.colors.pageBackground,
      text: currentThemeData.colors.textPrimary,
    },
  }}
>
  <Tab.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: currentThemeData.colors.primary,
      },
      headerTintColor: currentThemeData.colors.primary,
    }}
  >
    {/* Tab screens */}
  </Tab.Navigator>
</NavigationContainer>
```

## Key Features

- **5 Pre-Configured Themes** - Production-ready color schemes
- **Type-Safe Themes** - Full TypeScript support
- **Dynamic Switching** - Theme changes apply instantly
- **Persistent Preferences** - Theme survives app restarts
- **Zustand State Management** - Lightweight, reactive state
- **Bottom Tab Navigation** - Mobile-friendly navigation pattern
- **Responsive Layouts** - Adapts to screen orientation
- **AsyncStorage** - Native device storage
- **Full TypeScript** - Type safety across the application
- **ESLint Integration** - Code quality checks
- **Splash Screen** - Custom app launch screen
- **Hermes Engine** - Performance optimization

## Quick Start

### Prerequisites
- Node.js 20+
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- iOS Simulator (Mac only) or Android Emulator

### Installation & Running

```bash
# Install dependencies
npm install

# Start Expo development server
npm start

# Run on iOS Simulator (Mac only)
npm run ios

# Run on Android Emulator
npm run android

# Run on web (preview only)
npm run web

# Run on physical device
# Scan QR code with Expo app on device
```

## Theme Usage

### Access Current Theme

```typescript
import { useThemeStore } from './store/themeStore';

export const MyComponent = () => {
  const { currentThemeData } = useThemeStore();

  return (
    <View style={{ backgroundColor: currentThemeData.colors.pageBackground }}>
      <Text style={{ color: currentThemeData.colors.textPrimary }}>
        Themed Text
      </Text>
    </View>
  );
};
```

### Switch Themes

```typescript
const { setTheme } = useThemeStore();

// Change to dark theme
await setTheme('dark');

// Theme automatically persists and updates UI
```

### List Available Themes

```typescript
const { availableThemes } = useThemeStore();

availableThemes.forEach(theme => {
  console.log(`${theme.title}: ${theme.description}`);
});
```

## Creating New Themes

### Step 1: Update Theme Type Union

File: `src/resources/themes.ts`
```typescript
export type Theme = 'light' | 'dark' | 'blue' | 'orange' | 'white' | 'purple';
```

### Step 2: Add New Theme Object

In the same file, add to `themes` object:
```typescript
purple: {
  id: 'purple',
  title: 'Purple',
  description: 'Rich purple theme experience',
  colors: {
    pageBackground: '#F3E5F5',      // Light purple
    textPrimary: '#4A148C',         // Deep purple
    textSecondary: '#6A1B9A',       // Medium purple
    primary: '#7B1FA2',             // Primary purple
    buttonBackground: '#7B1FA2',
    buttonText: '#FFFFFF',
    border: '#CE93D8',              // Light purple
  },
}
```

### Step 3: Automatic Updates

The system automatically includes the new theme:
- ✅ Added to `availableThemes` array
- ✅ Available for selection in ThemeSelectionScreen
- ✅ Persists when selected
- ✅ Updates all screens using theme colors

**No additional code required!**

## Theme Selection Screen

The `ThemeSelectionScreen` provides:
- FlatList of all available themes
- Theme title and description
- Current theme indicator (checkmark)
- One-tap theme switching
- Automatic persistence

## Color Design Guidelines

When creating themes, ensure:

1. **Contrast Ratio**: Minimum 4.5:1 for text on backgrounds (WCAG AA)
2. **Consistency**: Primary color works well with secondary colors
3. **Readability**: Text is clearly readable on all backgrounds
4. **Accessibility**: Avoid color-only differentiation
5. **Platform Alignment**: Follow platform conventions (iOS blue, Android Material colors)

## Performance Optimization

- **Hermes Engine**: Enabled by default for faster execution
- **Lazy Loading**: Themes loaded on-demand
- **Memoization**: Components memoized to prevent unnecessary re-renders
- **AsyncStorage**: Efficient persistent storage
- **Dynamic StyleSheets**: Created once per screen

## Building for Production

### iOS Build

```bash
# Build with EAS (Expo Application Services)
eas build --platform ios

# Or locally with Xcode
cd ios && xcodebuild build
```

### Android Build

```bash
# Build with EAS
eas build --platform android

# Or locally with Gradle
cd android && ./gradlew build
```

## TypeScript Configuration

**tsconfig.json** provides strict type checking:
- `strict: true` - Strict mode enabled
- `esModuleInterop: true` - ESM compatibility
- `skipLibCheck: true` - Fast compilation
- `forceConsistentCasingInFileNames: true`

## Code Quality

**ESLint** enforces code standards:
```bash
npm run lint          # Check code quality
npm run lint:fix      # Auto-fix issues
```

**Prettier** formats code consistently:
```bash
npm run format        # Format code
npm run format:check  # Check formatting
```

## Testing

Example unit tests for theme functionality:

```typescript
describe('useThemeStore', () => {
  it('should load light theme on initial load', async () => {
    const { result } = renderHook(() => useThemeStore());
    expect(result.current.currentTheme).toBe('light');
  });

  it('should persist theme to storage', async () => {
    const { result } = renderHook(() => useThemeStore());
    await result.current.setTheme('dark');
    expect(result.current.currentTheme).toBe('dark');
  });
});
```

## Troubleshooting

### Theme Not Persisting
- Check AsyncStorage permissions
- Verify `'selectedTheme'` key in storage
- Clear app cache and retry

### Theme Not Updating
- Ensure `useThemeStore()` hook is called
- Check if component is re-rendering
- Verify Zustand subscription is active

### Performance Issues
- Profile with React Profiler
- Check for unnecessary re-renders
- Verify Hermes engine is enabled

## Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage API](https://react-native-async-storage.github.io/async-storage/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Best Practices

1. ✅ Define all colors in theme objects
2. ✅ Use consistent color keys across themes
3. ✅ Test themes on multiple devices
4. ✅ Verify color contrast compliance (WCAG AA)
5. ✅ Use Zustand for state management
6. ✅ Persist theme preferences to storage
7. ✅ Support system theme preference (light/dark)
8. ✅ Test theme switching transitions
9. ✅ Document custom theme creation
10. ✅ Monitor bundle size with Hermes

## License

MIT License - See LICENSE file for details.
