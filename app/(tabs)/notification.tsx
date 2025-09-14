// app/(tabs)/notifications.tsx (or wherever you placed it)
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

// ✅ FIX: file name was "NotoficationCard". Use "NotificationCard".
import NotificationCard, {
  NotificationItem,
} from '../../components/NotoficationCard';

// Key used to persist notifications in local storage
const STORAGE_KEY = '@lava_pizza_notifications_v1';

// Seed data used when nothing exists in storage yet
const seed: NotificationItem[] = [
  {
    id: 'n1',
    title: 'Order Confirmed',
    body:
      'Your Lava Pizza order #LP-10293 is confirmed. We’re firing up the oven! 🔥',
    createdAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
    type: 'order',
    read: false,
  },
  {
    id: 'n2',
    title: 'Delivery On The Way',
    body: 'Rider Jaspreet has picked up your order. ETA ~18 minutes.',
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    type: 'order',
    read: true,
  },
  {
    id: 'n3',
    title: '2-For-1 Tuesdays',
    body:
      'Every Tuesday only: buy any large, get another free. Use code TUE2X at checkout.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    type: 'promo',
    read: false,
  },
];

export default function NotificationsScreen() {
  // The list of notifications
  const [items, setItems] = useState<NotificationItem[]>([]);
  // Pull-to-refresh state
  const [refreshing, setRefreshing] = useState(false);

  // Load from AsyncStorage (or seed on first run)
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          setItems(JSON.parse(raw));
        } else {
          setItems(seed);
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
        }
      } catch (e) {
        console.warn('Failed to load notifications', e);
      }
    })();
  }, []);

  // Helper to persist any list changes to storage
  const persist = useCallback(async (next: NotificationItem[]) => {
    try {
      setItems(next);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (e) {
      console.warn('Failed to save notifications', e);
    }
  }, []);

  // Pull-to-refresh handler (simulated network)
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await new Promise((r) => setTimeout(r, 700));
    setRefreshing(false);
  }, []);

  // Derived count of unread
  const unreadCount = useMemo(
    () => items.filter((i) => !i.read).length,
    [items]
  );

  // Mark everything as read
  const markAllRead = useCallback(() => {
    const next = items.map((i) => ({ ...i, read: true }));
    persist(next);
  }, [items, persist]);

  // Remove everything (with confirm)
  const clearAll = useCallback(() => {
    Alert.alert('Clear all?', 'This will remove all notifications.', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Clear',
        style: 'destructive',
        onPress: () => persist([]),
      },
    ]);
  }, [persist]);

  // Toggle a single item read/unread
  const toggleRead = useCallback(
    (id: string) => {
      const next = items.map((i) =>
        i.id === id ? { ...i, read: !i.read } : i
      );
      persist(next);
    },
    [items, persist]
  );

  // Delete a single item
  const removeItem = useCallback(
    (id: string) => {
      const next = items.filter((i) => i.id !== id);
      persist(next);
    },
    [items, persist]
  );

  const Header = (
    <View style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 6 }}>
      <Text style={{ fontSize: 22, fontWeight: '800' }}>Notifications</Text>
      <Text style={{ color: '#666', marginTop: 2 }}>
        {unreadCount ? `${unreadCount} unread` : 'All caught up 🎉'}
      </Text>

      <View style={{ flexDirection: 'row', gap: 12, marginTop: 10 }}>
        <TouchableOpacity
          onPress={markAllRead}
          disabled={!items.length}
          style={{
            paddingVertical: 8,
            paddingHorizontal: 12,
            backgroundColor: '#FFF1BF',
            borderRadius: 8,
            opacity: items.length ? 1 : 0.5,
          }}
        >
          <Text style={{ fontWeight: '700' }}>Mark all read</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={clearAll}
          disabled={!items.length}
          style={{
            paddingVertical: 8,
            paddingHorizontal: 12,
            backgroundColor: '#FFE2E2',
            borderRadius: 8,
            opacity: items.length ? 1 : 0.5,
          }}
        >
          <Text style={{ fontWeight: '700' }}>Clear all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(i) => i.id}
      ListHeaderComponent={Header}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          onLongPress={() => removeItem(item.id)} // hold to delete
          onPress={() => toggleRead(item.id)}     // tap to toggle read/unread
          activeOpacity={0.8}
        >
          <NotificationCard item={item} />
        </TouchableOpacity>
      )}
      ListEmptyComponent={
        <View style={{ alignItems: 'center', marginTop: 48 }}>
          <Ionicons name="notifications-off" size={40} />
          <Text style={{ marginTop: 8, color: '#777' }}>
            No notifications yet
          </Text>
        </View>
      }
      contentContainerStyle={{ paddingBottom: 32 }}
    />
  );
}
