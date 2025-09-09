import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export type NotificationItem = {
  id: string;
  title: string;
  body: string;
  createdAt: string; // ISO
  read?: boolean;
  type?: 'order' | 'promo' | 'system';
};

export default function NotificationCard({ item }: { item: NotificationItem }) {
  return (
    <View style={[styles.card, !item.read && styles.unreadCard]}>
      <View style={styles.row}>
        {!item.read && <View style={styles.dot} />}
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      </View>
      <Text style={styles.body} numberOfLines={2}>{item.body}</Text>
      <Text style={styles.time}>
        {new Date(item.createdAt).toLocaleString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#ececec',
  },
  unreadCard: { borderColor: '#ffd666', backgroundColor: '#fffdf3' },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  dot: {
    width: 8, height: 8, borderRadius: 4, backgroundColor: '#FFB300',
    marginRight: 8,
  },
  title: { fontSize: 15, fontWeight: '700', flex: 1 },
  body: { fontSize: 13, color: '#444' },
  time: { fontSize: 11, color: '#777', marginTop: 8 },
});
