// app/_layout.tsx
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../lib/firebase';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash visible until we say otherwise
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setReady(true);
    });
    return unsub;
  }, []);

  // Hide the splash as soon as we're ready
  useEffect(() => {
    if (ready) {
      (async () => {
        try {
          await SplashScreen.hideAsync();
        } catch (e) {
          // no-op: just avoid crashing if called twice
        }
      })();
    }
  }, [ready]);

  // While not ready, render nothing. Splash stays on screen.
  if (!ready) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="auth/login" />
      <Stack.Screen name="auth/signup" />
      <Stack.Screen name="start" />
      {/* Add more app pages here */}
    </Stack>
  );
}
