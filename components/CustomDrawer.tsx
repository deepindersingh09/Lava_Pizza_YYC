import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, Image } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, paddingTop: 40, backgroundColor: '#FFF3DC' }}
    >
      {/* Header */}
      <View style={{ alignItems: 'center', marginBottom: 24, paddingHorizontal: 16 }}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/120' }}
          style={{ width: 72, height: 72, borderRadius: 36 }}
        />
        <Text style={{ fontWeight: '700', marginTop: 8, fontSize: 16 }}>Zaiden</Text>
        <Text style={{ color: '#666', marginTop: 2 }}>password</Text>
      </View>

      {/* Items */}
      <DrawerItem
        label="Favourites"
        icon={({ size, color }) => <Ionicons name="heart-outline" size={size} color={color} />}
        onPress={() => router.push('/(drawer)/(tabs)/favourites')}
      />
      <DrawerItem
        label="My Wallet"
        icon={({ size, color }) => <Ionicons name="wallet-outline" size={size} color={color} />}
        onPress={() => router.push('/(drawer)/(tabs)/wallet')}
      />
      <DrawerItem
        label="FAQs"
        icon={({ size, color }) => <Feather name="help-circle" size={size} color={color} />}
        onPress={() => router.push('/(drawer)/(tabs)/faq')}
      />
      <DrawerItem
        label="Support"
        icon={({ size, color }) => <Feather name="phone" size={size} color={color} />}
        onPress={() => router.push('/(drawer)/(tabs)/support')}
      />
      <DrawerItem
        label="Settings"
        icon={({ size, color }) => <Ionicons name="settings-outline" size={size} color={color} />}
        onPress={() => router.push('/(drawer)/(tabs)/settings')}
      />
      <DrawerItem
        label="Logout"
        icon={({ size, color }) => <MaterialIcons name="logout" size={size} color={color} />}
        onPress={() => {
          // TODO: your signOut(); then maybe router.replace('/auth/login');
        }}
      />
    </DrawerContentScrollView>
  );
}
