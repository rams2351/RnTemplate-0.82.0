import { FontAwesome } from '@react-native-vector-icons/fontawesome';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <Text style={styles.title}>Welcome 👋</Text>
      <Text style={styles.subtitle}>This is your home dashboard.</Text>

      <TouchableOpacity style={styles.card}>
        <FontAwesome name="home" size={24} color="#007bff" />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.cardTitle}>My Appointments</Text>
          <Text style={styles.cardSubtitle}>View and manage all schedules</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <FontAwesome name="bell" size={24} color="#28a745" />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.cardTitle}>Notifications</Text>
          <Text style={styles.cardSubtitle}>Stay updated with alerts</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#222',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: '#555',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#666',
  },
});

export default HomeScreen;
