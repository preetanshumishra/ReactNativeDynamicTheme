import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';

interface ThemeSelectionScreenProps {
  navigation: any;
}

export const ThemeSelectionScreen: React.FC<
  ThemeSelectionScreenProps
> = ({ navigation }) => {
  const currentTheme = useThemeStore((state) => state.currentTheme);
  const availableThemes = useThemeStore((state) => state.availableThemes);
  const setTheme = useThemeStore((state) => state.setTheme);
  const theme = useThemeStore((state) => state.currentThemeData);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.pageBackground,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.textPrimary,
      textAlign: 'center',
      marginVertical: 20,
    },
    themeCard: {
      backgroundColor: theme.colors.pageBackground,
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 10,
      padding: 15,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    themeCardSelected: {
      borderColor: theme.colors.primary,
      borderWidth: 2,
    },
    themeCardContent: {
      flex: 1,
    },
    themeCardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.primary,
      marginBottom: 5,
    },
    themeCardDescription: {
      fontSize: 14,
      color: theme.colors.textSecondary,
    },
    checkbox: {
      width: 24,
      height: 24,
      borderRadius: 4,
      borderColor: theme.colors.primary,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
    },
    checkboxInner: {
      width: 12,
      height: 12,
      borderRadius: 2,
      backgroundColor: theme.colors.primary,
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

  const handleThemeSelect = (themeId: string) => {
    setTheme(themeId as any);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Theme</Text>

      <FlatList
        scrollEnabled={false}
        data={availableThemes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.themeCard,
              currentTheme === item.id && styles.themeCardSelected,
            ]}
            onPress={() => handleThemeSelect(item.id)}>
            <View style={styles.themeCardContent}>
              <Text style={styles.themeCardTitle}>{item.title}</Text>
              <Text style={styles.themeCardDescription}>
                {item.description}
              </Text>
            </View>
            <View style={styles.checkbox}>
              {currentTheme === item.id && (
                <View style={styles.checkboxInner} />
              )}
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.jumpTo('Home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};
