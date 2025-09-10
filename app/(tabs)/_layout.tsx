import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          height: 64,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          paddingBottom: 10,
          paddingTop: 8,
          backgroundColor: '#fbf3e6',
          position: 'absolute',
        },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="specials"
        options={{
          title: 'Specials',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="food" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, size }) => <Ionicons name="cart-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-circle-outline" size={size} color={color} />,
        }}
      />
       <Tabs.Screen
        name="notifications"
        options={{ title: 'Alerts', tabBarIcon: ({ size, color }) => <Ionicons name="notifications" size={size} color={color} /> }}
      />
    </Tabs>
  );
}
