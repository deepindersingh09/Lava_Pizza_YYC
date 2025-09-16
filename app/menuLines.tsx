// app/menuLines.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function MenuLines() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity style={styles.closeBtn} onPress={() => router.back()}>
        <Ionicons name="close" size={28} color="#000" />
      </TouchableOpacity>

      {/* Profile Section */}
      <View style={styles.profile}>
        <Image
  source={require("../assets/images/profile_picture.png")}
  style={styles.profileImage}
/>

       
        <Text style={styles.name}>Zaiden</Text>
        <Text style={styles.subText}>password</Text>
      </View>

      {/* Menu Options */}
      <TouchableOpacity style={styles.option} onPress={() => router.push("/favourites")}>
        <Ionicons name="heart-outline" size={22} color="#000" />
        <Text style={styles.optionText}>Favourites</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push("/wallet")}>
        <Ionicons name="wallet-outline" size={22} color="#000" />
        <Text style={styles.optionText}>My Wallet</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push("/faqs")}>
        <Ionicons name="help-circle-outline" size={22} color="#000" />
        <Text style={styles.optionText}>FAQs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push("/support")}>
        <Ionicons name="call-outline" size={22} color="#000" />
        <Text style={styles.optionText}>Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push("/settings")}>
        <Ionicons name="settings-outline" size={22} color="#000" />
        <Text style={styles.optionText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.replace("/logout")}>
        <MaterialIcons name="logout" size={22} color="#000" />
        <Text style={styles.optionText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff8e6", padding: 20 },
  closeBtn: { alignSelf: "flex-start", marginBottom: 20, marginTop: 20, },
  profile: { alignItems: "center", marginBottom: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 8 },
  name: { fontSize: 20, fontWeight: "bold" },
  subText: { fontSize: 16, color: "gray" },
  option: { flexDirection: "row", alignItems: "center", paddingVertical: 12 },
  optionText: { fontSize: 16, marginLeft: 10 },
});
