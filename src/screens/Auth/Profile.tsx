import { FontAwesome } from '@react-native-vector-icons/fontawesome';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@email.com</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.row}>
          <FontAwesome name="address-book-o" size={20} color="#007bff" />
          <Text style={styles.rowText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <FontAwesome name="info-circle" size={20} color="#17a2b8" />
          <Text style={styles.rowText}>About App</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <FontAwesome name="sign-out" size={20} color="#dc3545" />
          <Text style={styles.rowText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', paddingHorizontal: 16 },
  profileContainer: { alignItems: 'center', marginBottom: 30 },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 10 },
  name: { fontSize: 22, fontWeight: '700', color: '#222' },
  email: { fontSize: 14, color: '#555' },
  section: { borderTopWidth: 1, borderTopColor: '#e0e0e0', marginTop: 20 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  rowText: { marginLeft: 14, fontSize: 16, color: '#222' },
});

export default ProfileScreen;
