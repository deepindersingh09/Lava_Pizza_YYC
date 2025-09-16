
import React from 'react';
import { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

const { width, height } = Dimensions.get('window');

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      
      setTimeout(() => {
        router.replace(u ? '/start' : '/auth/login');
      }, 1200);
    });
    return unsub;
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splash.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  // make logo about 70% of screen width, scale height accordingly
  logo: { width: width * 0.8, height: height * 0.8 },
});
