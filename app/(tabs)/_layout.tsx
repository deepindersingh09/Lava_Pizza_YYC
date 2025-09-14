import React from 'react';
import { Tabs, useNavigation } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

export default function TabsLayout() {
  // ✅ Access parent navigation so we can open the drawer
  const navigation = useNavigation();

  return (
    <Tabs
      screenOptions={{
        // ✅ Show a custom header with left/right actions
        headerShown: true,
        headerTitle: '', // no title text, just icons
        headerLeft: () => (
          <TouchableOpacity
            style={{ paddingHorizontal: 12 }}
            onPress={() => (navigation as any).getParent()?.openDrawer()} // open side menu
          >
            <Ionicons name="menu" size={24} color="#111" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={{ paddingHorizontal: 12 }}>
            <Ionicons name="notifications-outline" size={22} color="#111" />
          </View>
        ),
        headerStyle: {
          backgroundColor: '#fbf3e6',
        },
        headerShadowVisible: false,

        // ✅ Bottom tab bar styling
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
      {/* ✅ Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* ✅ Specials Tab */}
      <Tabs.Screen
        name="specials"
        options={{
          title: 'Specials',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" size={size} color={color} />
          ),
        }}
      />

      {/* ✅ Cart Tab */}
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />

      {/* ✅ Account Tab */}
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />

      {/* ✅ Notifications Tab (optional) */}
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Alerts',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
