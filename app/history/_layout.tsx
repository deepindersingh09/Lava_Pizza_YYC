import React from 'react';
import { Stack } from 'expo-router';

export default function HistoryLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: 'History',
        headerBackTitle: 'Back',
        headerStyle: { backgroundColor: '#fbf3e6' },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
