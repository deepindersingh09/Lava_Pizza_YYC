// app/_layout.tsx
import React, { useEffect, useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '../lib/firebase';
import SideMenu from '../components/sidemenu';

// keep splash until ready
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setTimeout(() => setReady(true), 800);
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (ready) SplashScreen.hideAsync().catch(() => {});
  }, [ready]);

  if (!ready) return null;

  // Not logged in → plain stack for auth screens
  if (!user) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="auth/signup" />
      </Stack>
    );
  }

  // Logged in → Drawer wraps the app
  return (
    <Drawer
      drawerContent={(props) => <SideMenu {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: { width: 320, backgroundColor: '#faf6ea' },
      }}
    >
      {/* Main app with tabs */}
      <Drawer.Screen name="(tabs)" options={{ title: 'Home' }} />

      {/* Keep these navigable but hidden from the drawer list */}
      <Drawer.Screen name="favourites" options={{ drawerItemStyle: { display: 'none' } }} />
      <Drawer.Screen name="history"    options={{ drawerItemStyle: { display: 'none' } }} />
      <Drawer.Screen name="wallet"     options={{ drawerItemStyle: { display: 'none' } }} />
      <Drawer.Screen name="faq"        options={{ drawerItemStyle: { display: 'none' } }} />
      <Drawer.Screen name="support"    options={{ drawerItemStyle: { display: 'none' } }} />
      <Drawer.Screen name="settings"   options={{ drawerItemStyle: { display: 'none' } }} />
      <Drawer.Screen name="notifications" options={{ drawerItemStyle: { display: 'none' } }} />
      <Drawer.Screen name="orders"     options={{ drawerItemStyle: { display: 'none' } }} />
    </Drawer>
  );
}
