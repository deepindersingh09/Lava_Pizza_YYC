import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../lib/firebase';

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

  if (!ready) return null; 

  return (
    <Stack screenOptions={{ headerShown: false }}>
    
      <Stack.Screen name="index" />

    
      <Stack.Screen name="auth/login" />
      <Stack.Screen name="auth/signup" />

      
      <Stack.Screen name="start" />

      {/* If you later add app pages, put them here */}
    </Stack>
  );
}
