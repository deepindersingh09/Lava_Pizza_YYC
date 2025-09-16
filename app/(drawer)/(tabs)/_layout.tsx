// app/(drawer)/(tabs)/_layout.tsx
import React from 'react';
import { Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

export default function TabsLayout() {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <Tabs
      screenOptions={{
        headerTitle: '',
        headerShadowVisible: false,
        tabBarStyle: { height: 64 },

        headerLeft: () => (
          <Pressable
            onPress={() => navigation.openDrawer()}
            style={{ paddingHorizontal: 12 }}
            accessibilityLabel="Open menu"
          >
            <Ionicons name="menu" size={24} />
          </Pressable>
        ),

        headerRight: () => (
          <Pressable onPress={() => { /* router.push('/notifications'); */ }} style={{ paddingHorizontal: 12 }}>
            <Ionicons name="notifications-outline" size={22} />
          </Pressable>
        ),
      }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ focused, size }) => <Ionicons name="home-outline" size={size} /> }} />
      <Tabs.Screen name="specials" options={{ title: 'Specials', tabBarIcon: ({ size }) => <Ionicons name="pricetags-outline" size={size} /> }} />
      <Tabs.Screen name="cart" options={{ title: 'Cart', tabBarIcon: ({ size }) => <Ionicons name="cart-outline" size={size} /> }} />
      <Tabs.Screen name="account" options={{ title: 'Account', tabBarIcon: ({ size }) => <Ionicons name="person-outline" size={size} /> }} />
    </Tabs>
  );
}
