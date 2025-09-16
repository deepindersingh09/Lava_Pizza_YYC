import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favourites</Text>

      {/* Pizza Card */}
      <View style={styles.card}>
        <Image
          source={{ uri: "https://i.imgur.com/eTmWoAN.png" }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.name}>Volcanic Pizza</Text>
          <Text style={styles.price}>$11.99</Text>
        </View>
        <TouchableOpacity style={styles.heartBtn}>
          <Ionicons name="heart-outline" size={22} color="gold" />
        </TouchableOpacity>
      </View>

      {/* Add More Items */}
      <TouchableOpacity style={styles.addMore}>
        <Text style={styles.addText}>Add more items</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  image: { width: 70, height: 70, borderRadius: 50 },
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 16, fontWeight: "600" },
  price: { fontSize: 14, color: "gray", marginTop: 2 },
  heartBtn: { padding: 6 },
  addMore: { alignItems: "center", marginTop: 10 },
  addText: { color: "gray" },
});
