import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useThemeStore } from '../store/themeStore';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ThemeSelectionScreen } from '../screens/ThemeSelectionScreen';
import { enableScreens } from 'react-native-screens';

// Enable native screens for better performance
enableScreens();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  const theme = useThemeStore((state) => state.currentThemeData);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.pageBackground,
        },
        headerTintColor: theme.colors.textPrimary,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: theme.colors.textPrimary,
        },
        headerShadowVisible: false,
        cardStyle: {
          backgroundColor: theme.colors.pageBackground,
        },
      }}>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  const theme = useThemeStore((state) => state.currentThemeData);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.pageBackground,
        },
        headerTintColor: theme.colors.textPrimary,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: theme.colors.textPrimary,
        },
        headerShadowVisible: false,
        cardStyle: {
          backgroundColor: theme.colors.pageBackground,
        },
      }}>
      <Stack.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Stack.Navigator>
  );
}

function ThemeStack() {
  const theme = useThemeStore((state) => state.currentThemeData);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.pageBackground,
        },
        headerTintColor: theme.colors.textPrimary,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: theme.colors.textPrimary,
        },
        headerShadowVisible: false,
        cardStyle: {
          backgroundColor: theme.colors.pageBackground,
        },
      }}>
      <Stack.Screen
        name="ThemeSelectionMain"
        component={ThemeSelectionScreen}
        options={{ title: 'Theme Selection' }}
      />
    </Stack.Navigator>
  );
}

export function RootNavigator() {
  const theme = useThemeStore((state) => state.currentThemeData);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colors.pageBackground,
            borderTopColor: theme.colors.border,
            borderTopWidth: 1,
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textSecondary,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarTestID: 'homeTab',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarTestID: 'profileTab',
          }}
        />
        <Tab.Screen
          name="Theme"
          component={ThemeStack}
          options={{
            tabBarLabel: 'Theme',
            tabBarTestID: 'themeTab',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
