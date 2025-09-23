// By Ravneet Kaur
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

type OrderItem = {
  name: string;
  price: number;
};

type Order = {
  date: string;
  items: OrderItem[];
};

const orders: Order[] = [
  {
    date: "Yesterday",
    items: [
      { name: "Stuffed Jalapenos", price: 6.99 },
      { name: "Beef Shawarma", price: 13.99 },
    ],
  },
  {
    date: "Jul 17, 2025",
    items: [
      { name: "Paneer Wrap", price: 9.99 },
      { name: "Greek Salad", price: 7.99 },
      { name: "Cheese Cake", price: 4.99 },
    ],
  },
];

export default function OrderHistory() {
  const router = useRouter();

  const calcTotal = (items: OrderItem[]) =>
    items.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>History</Text>
        <TouchableOpacity>
          <Text style={styles.clearText}>Clear History</Text>
        </TouchableOpacity>
      </View>

      {/* Orders List */}
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {orders.map((order, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.dateText}>{order.date}</Text>
            {order.items.map((item, idx) => (
              <View key={idx} style={styles.row}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>
              </View>
            ))}
            <View style={[styles.row, styles.totalRow]}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalText}>
                ${calcTotal(order.items).toFixed(2)}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="pizza-slice" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="person-outline" size={26} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fef9e7",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  clearText: {
    fontSize: 14,
    color: "gray",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  dateText: {
    fontSize: 14,
    color: "gray",
    marginBottom: 8,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },

  itemText: {
    fontSize: 15,
  },

  priceText: {
    fontSize: 15,
    fontWeight: "600",
  },

  totalRow: {
    borderTopWidth: 1,
    borderColor: "#eee",
    marginTop: 6,
    paddingTop: 8,
  },

  totalText: {
    fontSize: 15,
    fontWeight: "bold",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingVertical: 10,
    backgroundColor: "#fef9e7",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
