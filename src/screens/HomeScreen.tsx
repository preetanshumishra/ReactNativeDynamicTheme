import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const theme = useThemeStore((state) => state.currentThemeData);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.pageBackground,
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    scrollContent: {
      justifyContent: 'center',
      flexGrow: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.textPrimary,
      textAlign: 'center',
      marginBottom: 30,
    },
    card: {
      backgroundColor: theme.colors.pageBackground,
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.primary,
      marginBottom: 10,
    },
    cardDescription: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      lineHeight: 20,
    },
    button: {
      backgroundColor: theme.colors.buttonBackground,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginTop: 20,
    },
    buttonText: {
      color: theme.colors.buttonText,
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>Welcome to React Native Theme Sample!</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dynamic Theming System</Text>
        <Text style={styles.cardDescription}>
          This application demonstrates a dynamic theming system with 5
          different color themes. Click the button below to change themes.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.jumpTo('Theme')}>
        <Text style={styles.buttonText}>Go to Theme Selection</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
