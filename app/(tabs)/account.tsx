import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Account() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account</Text>

      <TouchableOpacity
        style={styles.row}
        onPress={() => router.push('/favourites')} // ✅ open nested favourites tabs
      >
        <View style={styles.left}>
          <Ionicons name="heart-outline" size={20} color="#000" />
          <Text style={styles.label}>Favourites</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#888" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fbf3e6', padding: 16 },
  header: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  row: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  label: { fontSize: 16 },
});
