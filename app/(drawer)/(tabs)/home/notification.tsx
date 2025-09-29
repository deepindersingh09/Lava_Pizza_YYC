import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Switch, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Notifications() {
  const [emailOffers, setEmailOffers] = useState(true);
  const [textOffers, setTextOffers] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('825-123-0654');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{'Notifications'}</Text>

      {/* Push Notifications */}
      <TouchableOpacity style={styles.row}>
        <Text style={styles.label}>Push Notifications</Text>
        <Text style={styles.subLabel}>Manage Push Notification Settings</Text>
      </TouchableOpacity>

      {/* Email Offers */}
      <View style={styles.rowSwitch}>
        <Text style={styles.label}>Receive email offers and alerts</Text>
        <Switch
          value={emailOffers}
          onValueChange={setEmailOffers}
          thumbColor={emailOffers ? '#FFC107' : '#ccc'}
        />
      </View>

      {/* Phone Number */}
      <Text style={styles.label}>Mobile Phone Number</Text>
      <View style={styles.inputWrap}>
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={styles.input}
          keyboardType="phone-pad"
        />
        <Ionicons name="eye-outline" size={22} color="#555" style={{ marginLeft: 6 }} />
      </View>

      {/* Text Offers */}
      <TouchableOpacity
        style={styles.checkboxRow}
        onPress={() => setTextOffers(!textOffers)}
      >
        <View style={[styles.checkbox, textOffers && { backgroundColor: '#222' }]} />
        <Text style={styles.label}>Receive text offers and alerts</Text>
      </TouchableOpacity>
      <Text style={styles.subLabel}>
        I agree to receive text offers from Lava Pizza YYC.
      </Text>

      {/* Terms */}
      <Text style={styles.terms}>
        By enabling the option, you agree to receive promotional text messages from Lava Pizza YYC at the number provided. Message frequency may vary. Standard message and data rates may apply.{"\n\n"}
        Consent is not required to make a purchase. You can opt out at any time by replying STOP. For help, reply HELP.{"\n\n"}
        See our <Text style={styles.link}>Privacy Policy</Text> and <Text style={styles.link}>Terms & Conditions</Text> for more.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff7e6', padding: 18 },
  header: { fontSize: 18, fontWeight: '600', marginBottom: 16 },
  row: { marginBottom: 20 },
  rowSwitch: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  label: { fontSize: 15, fontWeight: '500', color: '#111' },
  subLabel: { fontSize: 13, color: '#666', marginTop: 4 },
  inputWrap: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  input: { flex: 1, backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: '#ddd', padding: 10 },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginTop: 14 },
  checkbox: { width: 18, height: 18, borderWidth: 1, borderColor: '#aaa', marginRight: 8 },
  terms: { fontSize: 13, color: '#555', marginTop: 14, lineHeight: 20 },
  link: { color: '#000', fontWeight: '600' },
});



