// app/_layout.tsx
import React, { useEffect, useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import { Stack } from 'expo-router';
import { onAuthStateChanged, User } from 'firebase/auth';
import * as SplashScreen from 'expo-splash-screen';
import { auth } from '../lib/firebase';
import SideMenu from '../components/sidemenu';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => {
      setUser(u);
      setTimeout(() => setReady(true), 600);
    });
    return unsub;
  }, []);
  useEffect(() => { if (ready) SplashScreen.hideAsync().catch(() => {}); }, [ready]);
  if (!ready) return null;

  if (!user) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="auth/signup" />
      </Stack>
    );
  }

  return (
    <Drawer
      drawerContent={props => <SideMenu {...props} />}
      screenOptions={{ headerShown: false, drawerType: 'front', drawerStyle: { width: 320, backgroundColor: '#faf6ea' } }}
    >
      <Drawer.Screen name="(tabs)" />
      <Drawer.Screen name="favourites" options={{ drawerItemStyle: { display: 'none' } }} />
      <Drawer.Screen name="history"    options={{ drawerItemStyle: { display: 'none' } }} />
      <Drawer.Screen name="wallet"     options={{ drawerItemStyle: { display: 'none' } }} />
      <Drawer.Screen name="notifications" options={{ drawerItemStyle: { display: 'none' } }} />
    </Drawer>
  );
}
