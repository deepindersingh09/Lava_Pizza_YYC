import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
export default function OrderDetail() {
  const { id } = useLocalSearchParams();
  return <View><Text>Order {String(id)}</Text></View>;
}