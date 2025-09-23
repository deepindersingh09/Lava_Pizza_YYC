// By Ravneet Kaur
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function Payment() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("Aiden");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("aiden1234@gmail.com");
  const [phone, setPhone] = useState("(825) 123-0654");
  const [cardNumber, setCardNumber] = useState("1234 5678 1234 5678");
  const [cvv, setCvv] = useState("000");
  const [expiry, setExpiry] = useState("08/26");

  const handleSave = () => {
    // You can integrate API or local save here
    console.log({
      firstName,
      lastName,
      email,
      phone,
      cardNumber,
      cvv,
      expiry,
    });
    alert("Payment method saved!");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Text style={styles.formTitle}>Add Payment Method</Text>

        {/* Form Fields */}
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          value={phone}
          keyboardType="phone-pad"
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Card number"
          value={cardNumber}
          keyboardType="numeric"
          onChangeText={setCardNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={cvv}
          keyboardType="numeric"
          secureTextEntry
          onChangeText={setCvv}
        />
        <TextInput
          style={styles.input}
          placeholder="Expiry Date"
          value={expiry}
          onChangeText={setExpiry}
        />

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>SAVE</Text>
        </TouchableOpacity>
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

  formTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 16,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 15,
  },

  saveButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 14,
    marginHorizontal: 16,
    borderRadius: 4,
    marginTop: 20,
  },

  saveText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
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
