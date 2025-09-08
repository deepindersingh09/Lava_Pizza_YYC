// app/_layout.tsx
import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../lib/firebase';
import * as SplashScreen from 'expo-splash-screen';

// Keep splash visible until we say otherwise
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setTimeout(() => setReady(true), 2000);
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (ready) SplashScreen.hideAsync().catch(() => {});
  }, [ready]);

  if (!ready) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="auth/login" />
      <Stack.Screen name="auth/signup" />
      <Stack.Screen name="start" />
      {/* ✅ Mount the nested favourites tabs section */}
      <Stack.Screen name="favourites" />
    </Stack>
  );
}
