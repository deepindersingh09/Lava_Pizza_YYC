// By Ravneet Kaur
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function Notifications() {
  const router = useRouter();

  const [emailOffers, setEmailOffers] = useState(true);
  const [textOffers, setTextOffers] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("825-123-0654");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 80, paddingTop: 10 }}>
        {/* Push Notifications */}
        <TouchableOpacity style={styles.row}>
          <View>
            <Text style={styles.rowTitle}>Push Notifications</Text>
            <Text style={styles.rowSub}>
              Manage Push Notification Settings
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>

        {/* Email Offers */}
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Receive email offers and alerts</Text>
          <Switch
            value={emailOffers}
            onValueChange={setEmailOffers}
            thumbColor={emailOffers ? "#FFD700" : "#f4f3f4"}
          />
        </View>

        {/* Phone Number */}
        <View style={styles.rowInput}>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Ionicons name="eye-outline" size={22} color="gray" />
        </View>

        {/* Text Offers */}
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setTextOffers(!textOffers)}
        >
          <Text style={styles.rowTitle}>
            Receive text offers and alerts{"\n"}
            <Text style={styles.subAgreement}>
              I agree to receive text offers from Lava Pizza YYC.
            </Text>
          </Text>
          {textOffers ? (
            <MaterialIcons name="check-box" size={24} color="black" />
          ) : (
            <MaterialIcons
              name="check-box-outline-blank"
              size={24}
              color="black"
            />
          )}
        </TouchableOpacity>

        {/* Legal Text */}
        <Text style={styles.legalText}>
          By enabling the option, you agree to receive promotional text messages
          from Lava Pizza YYC at the number provided. Message frequency may
          vary. Standard message and data rates may apply.{"\n\n"}
          Consent is not required to make a purchase. You can opt out at any
          time by replying STOP. For help, reply HELP.{"\n\n"}
          See our <Text style={styles.link}>Privacy Policy</Text> and{" "}
          <Text style={styles.link}>Terms & Conditions</Text> for more.
        </Text>
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

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  rowTitle: {
    fontSize: 15,
    fontWeight: "500",
  },

  rowSub: {
    fontSize: 12,
    color: "gray",
    marginTop: 2,
  },

  rowInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  input: {
    fontSize: 15,
    flex: 1,
  },

  checkboxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  subAgreement: {
    fontSize: 13,
    color: "gray",
    fontWeight: "400",
  },

  legalText: {
    fontSize: 12,
    color: "gray",
    padding: 16,
    lineHeight: 18,
  },

  link: {
    textDecorationLine: "underline",
    fontWeight: "500",
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
