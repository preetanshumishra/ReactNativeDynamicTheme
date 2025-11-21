import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';

interface ProfileScreenProps {
  navigation: any;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const theme = useThemeStore((state) => state.currentThemeData);

  // Sample user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'React Native developer passionate about building beautiful mobile apps with dynamic theming.',
  };

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
    card: {
      backgroundColor: theme.colors.pageBackground,
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
    },
    cardTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.primary,
      textAlign: 'center',
      marginBottom: 20,
    },
    fieldContainer: {
      marginBottom: 20,
    },
    fieldLabel: {
      fontSize: 14,
      fontWeight: 'bold',
      color: theme.colors.textPrimary,
      marginBottom: 5,
    },
    fieldValue: {
      fontSize: 16,
      color: theme.colors.textSecondary,
      lineHeight: 22,
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
      <View style={styles.card}>
        <Text style={styles.cardTitle}>User Profile</Text>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Name</Text>
          <Text style={styles.fieldValue}>{userData.name}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Email</Text>
          <Text style={styles.fieldValue}>{userData.email}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Bio</Text>
          <Text style={styles.fieldValue}>{userData.bio}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.jumpTo('Theme')}>
          <Text style={styles.buttonText}>Go to Theme Selection</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
