// app/favourites/more.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FavouritesMore() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>More favourites coming soon…</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 18, color: '#333' },
});
