import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawer from '@/components/CustomDrawer';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        // This renders your custom drawer UI
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,           // tabs will render their own header
          drawerType: 'front',
          drawerStyle: {
            width: 280,
            backgroundColor: '#FFF3DC', // pale yellow like your mock
          },
        }}
      />
    </GestureHandlerRootView>
  );
}
