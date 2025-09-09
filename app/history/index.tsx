import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

type LineItem = { name: string; price: number };
type OrderGroup = { id: string; label: string; items: LineItem[] };

const money = (n: number) => `$${n.toFixed(2)}`;

const initialData: OrderGroup[] = [
  {
    id: 'yesterday',
    label: 'Yesterday',
    items: [
      { name: 'Stuffed Jalapenos', price: 6.99 },
      { name: 'Beef Shawarma', price: 13.99 },
    ],
  },
  {
    id: '2025-07-17',
    label: 'Jul 17, 2025',
    items: [
      { name: 'Paneer Wrap', price: 9.99 },
      { name: 'Greek Salad', price: 7.99 },
      { name: 'Cheese Cake', price: 4.99 },
    ],
  },
];

export default function HistoryScreen() {
  const [groups, setGroups] = useState(initialData);

  const totals = useMemo(
    () =>
      Object.fromEntries(
        groups.map(g => [g.id, g.items.reduce((s, it) => s + it.price, 0)])
      ),
    [groups]
  );

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => setGroups([])} disabled={!groups.length}>
          <Text style={[styles.clear, !groups.length && { opacity: 0.3 }]}>
            Clear History
          </Text>
        </TouchableOpacity>
      </View>

      {!groups.length ? (
        <View style={styles.empty}><Text style={styles.emptyText}>No past orders yet.</Text></View>
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(g) => g.id}
          contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 24 }}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardHeader}>{item.label}</Text>
              {item.items.map((li, i) => (
                <View key={i} style={styles.row}>
                  <Text style={styles.item}>{li.name}</Text>
                  <Text style={styles.price}>{money(li.price)}</Text>
                </View>
              ))}
              <View style={[styles.row, styles.totalRow]}>
                <Text style={[styles.item, styles.totalLabel]}>Total</Text>
                <Text style={[styles.price, styles.totalPrice]}>{money(totals[item.id] || 0)}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topRow: { paddingHorizontal: 16, paddingVertical: 10, alignItems: 'flex-end' },
  clear: { fontSize: 14, color: '#111' },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyText: { color: '#777' },

  card: {
    backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10, marginVertical: 6,
    shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }, elevation: 2,
  },
  cardHeader: { color: '#8a8a8a', marginBottom: 6 },

  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 },
  item: { fontSize: 14, color: '#111' },
  price: { fontSize: 14, color: '#111', fontWeight: '600' },

  totalRow: { marginTop: 8, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#eee', paddingTop: 8 },
  totalLabel: { fontWeight: '700' },
  totalPrice: { fontWeight: '800' },
});
