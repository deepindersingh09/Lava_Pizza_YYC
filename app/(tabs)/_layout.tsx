import React from "react";
import { Pressable, View } from "react-native";
import { Tabs, Link } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: "Menu",
        headerRight: () => (
          <Link href="/notification" asChild>
            <Pressable hitSlop={10} style={{ marginRight: 16 }}>
              <Ionicons name="notifications-outline" size={22} color="#111" />
            </Pressable>
          </Link>
        ),
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          height: 64,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          paddingBottom: 10,
          paddingTop: 8,
          backgroundColor: "#fbf3e6",
          position: "absolute",
        },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="specials"
        options={{
          title: "Specials",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen name="notification" options={{ href: null }} />
    </Tabs>
  );
}
