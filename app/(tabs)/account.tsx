import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function Account() {
  const router = useRouter();

  const OptionRow = ({
    label,
    onPress,
  }: {
    label: string;
    onPress?: () => void;
  }) => (
    <TouchableOpacity style={styles.optionRow} onPress={onPress}>
      <Text style={styles.optionText}>{label}</Text>
      <Ionicons name="chevron-forward" size={22} color="black" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account</Text>
        {/* spacer to keep title centered */}
        <View style={{ width: 28 }} />
      </View>

      {/* Profile */}
      <View style={styles.profileSection}>
        <Image
          source={require('../../assets/images/menu/profile.png')}
          style={styles.profilepicture}
        />
        <View style={styles.profileText}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>Zaiden</Text>
            <TouchableOpacity onPress={() => {/* TODO: edit profile */}}>
              <MaterialIcons name="edit" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.email}>zaiden.45@gmail.com</Text>
          <Text style={styles.phone}>8256981236</Text>
        </View>
      </View>

      {/* Quick links (Favourites / History) */}
      <View style={styles.quickBlock}>
        <TouchableOpacity
          style={styles.quickRow}
          onPress={() => router.push('/favourites')}
        >
          <View style={styles.left}>
            <Ionicons name="heart-outline" size={20} color="#000" />
            <Text style={styles.quickLabel}>Favourites</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#888" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.quickRow}
          onPress={() => router.push('/history')}
        >
          <View style={styles.left}>
            <Ionicons name="time-outline" size={20} color="#000" />
            <Text style={styles.quickLabel}>Order History</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Options list */}
      <View style={styles.options}>
        <OptionRow label="Notifications" onPress={() => {/* TODO */}} />
        <OptionRow label="General" onPress={() => router.push('/general')} />
        <OptionRow label="Payment" onPress={() => router.push('/checkout')} />
        <OptionRow
          label="Update Delivery Info"
          onPress={() => router.push('/delivery_address')}
        />
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => {/* TODO: signOut */}}>
        <Text style={styles.logoutText}>Log Out of Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fbf3e6', padding: 16, paddingTop: 40 },

  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24,
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },

  profileSection: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  profilepicture: { width: 70, height: 70, borderRadius: 35, marginRight: 15, marginLeft: 6 },
  profileText: { flex: 1, marginLeft: 6 },
  nameRow: { flexDirection: 'row', alignItems: 'center' },
  name: { fontSize: 20, fontWeight: 'bold', marginRight: 8 },
  email: { fontSize: 16, fontWeight: '600' },
  phone: { fontSize: 16, fontWeight: '600', color: 'gray' },

  quickBlock: {
    backgroundColor: '#fff', borderRadius: 14, overflow: 'hidden', marginBottom: 16,
  },
  quickRow: {
    backgroundColor: '#fff',
    paddingVertical: 14, paddingHorizontal: 16,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#eee',
  },
  left: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  quickLabel: { fontSize: 16 },

  options: {
    backgroundColor: '#fff', borderRadius: 14, overflow: 'hidden', marginBottom: 20,
    borderTopWidth: StyleSheet.hairlineWidth, borderColor: '#ddd',
  },
  optionRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingVertical: 16, paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth, borderColor: '#ddd',
  },
  optionText: { fontSize: 16 },

  logoutButton: {
    backgroundColor: '#FFD700', padding: 15, borderRadius: 8, alignItems: 'center',
    shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 3,
  },
  logoutText: { fontSize: 16, fontWeight: 'bold' },
});
