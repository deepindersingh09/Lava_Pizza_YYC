// screens/IndividualItem.tsx
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../app";

type ItemRouteProp = RouteProp<RootStackParamList, 'Item'>;

interface ItemOption {
  label: string;
  value: string;
  price?: number; 
}

interface ItemData {
  id: string;
  name: string;
  description: string;
  image: string;
  basePrice: number;
  sizes: ItemOption[];
  meats: ItemOption[];
  veggies: ItemOption[];
  halal: ItemOption[];
  crusts: ItemOption[];
  freeDips: ItemOption[];
  extraDips: ItemOption[];
}

const ITEMS: ItemData[] = [
  {
    id: "1",
    name: "Volcanic Pizza",
    description: "This pizza is loaded with flavour, color, and spice.",
    image: "https://i.ibb.co/pfYpwYq/pizza.png",
    basePrice: 11.99,
    sizes: [
      { label: "Small", value: "Small" },
      { label: "Medium", value: "Medium" },
      { label: "Large", value: "Large" },
    ],
    meats: [{ label: "Pepperoni", value: "Pepperoni" }],
    veggies: [{ label: "Mushrooms", value: "Mushrooms" }],
    halal: [{ label: "Steak", value: "Steak" }],
    crusts: [{ label: "Regular", value: "Regular" }],
    freeDips: [{ label: "Garlic", value: "Garlic" }],
    extraDips: [{ label: "None", value: "None", price: 0 }],
  },
  {
    id: "2",
    name: "Shawarma Pizza",
    description: "A delicious shawarma-inspired pizza.",
    image: "https://i.ibb.co/pfYpwYq/pizza.png",
    basePrice: 15.99,
    sizes: [
      { label: "Small", value: "Small" },
      { label: "Medium", value: "Medium" },
      { label: "Large", value: "Large" },
    ],
    meats: [{ label: "Chicken", value: "Chicken" }],
    veggies: [{ label: "Olives", value: "Olives" }],
    halal: [{ label: "Lamb", value: "Lamb" }],
    crusts: [{ label: "Thin Crust", value: "Thin Crust" }],
    freeDips: [{ label: "Ranch", value: "Ranch" }],
    extraDips: [{ label: "Extra Cheese", value: "Extra Cheese", price: 2 }],
  },
  // Add other pizzas/custom pizzas as needed...
];

export default function IndividualItem() {
  const route = useRoute<ItemRouteProp>();
  const { itemId } = route.params;

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState<ItemData | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [meat, setMeat] = useState("");
  const [veggie, setVeggie] = useState("");
  const [halal, setHalal] = useState("");
  const [crust, setCrust] = useState("");
  const [freeDip, setFreeDip] = useState("");
  const [extraDip, setExtraDip] = useState("");

  useEffect(() => {
    setLoading(true);
    const selectedItem = ITEMS.find(i => i.id === itemId) || null;
    if (selectedItem) {
      setItem(selectedItem);
      setSize(selectedItem.sizes[0]?.value || "");
      setMeat(selectedItem.meats[0]?.value || "");
      setVeggie(selectedItem.veggies[0]?.value || "");
      setHalal(selectedItem.halal[0]?.value || "");
      setCrust(selectedItem.crusts[0]?.value || "");
      setFreeDip(selectedItem.freeDips[0]?.value || "");
      setExtraDip(selectedItem.extraDips[0]?.value || "");
    }
    setLoading(false);
  }, [itemId]);

  if (loading || !item) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const selectedExtraDip = item.extraDips.find((d) => d.value === extraDip);
  const extraCost = selectedExtraDip?.price ?? 0;
  const totalPrice = (item.basePrice + extraCost) * quantity;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.desc}>{item.description}</Text>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))} style={styles.qtyBtn}>
          <Text style={styles.qtyText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.qtyNumber}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.qtyBtn}>
          <Text style={styles.qtyText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Size</Text>
      <Picker selectedValue={size} onValueChange={setSize}>
        {item.sizes.map((s) => (
          <Picker.Item key={s.value} label={s.label} value={s.value} />
        ))}
      </Picker>

      <Text style={styles.label}>Extra Meat</Text>
      <Picker selectedValue={meat} onValueChange={setMeat}>
        {item.meats.map((m) => (
          <Picker.Item key={m.value} label={m.label} value={m.value} />
        ))}
      </Picker>

      <Text style={styles.label}>Extra Veggies</Text>
      <Picker selectedValue={veggie} onValueChange={setVeggie}>
        {item.veggies.map((v) => (
          <Picker.Item key={v.value} label={v.label} value={v.value} />
        ))}
      </Picker>

      <Text style={styles.label}>Halal</Text>
      <Picker selectedValue={halal} onValueChange={setHalal}>
        {item.halal.map((h) => (
          <Picker.Item key={h.value} label={h.label} value={h.value} />
        ))}
      </Picker>

      <Text style={styles.label}>Crust</Text>
      <Picker selectedValue={crust} onValueChange={setCrust}>
        {item.crusts.map((c) => (
          <Picker.Item key={c.value} label={c.label} value={c.value} />
        ))}
      </Picker>

      <Text style={styles.label}>Free Dip</Text>
      <Picker selectedValue={freeDip} onValueChange={setFreeDip}>
        {item.freeDips.map((d) => (
          <Picker.Item key={d.value} label={d.label} value={d.value} />
        ))}
      </Picker>

      <Text style={styles.label}>Extra Dip</Text>
      <Picker selectedValue={extraDip} onValueChange={setExtraDip}>
        {item.extraDips.map((d) => (
          <Picker.Item
            key={d.value}
            label={d.price ? `${d.label} (+$${d.price.toFixed(2)})` : d.label}
            value={d.value}
          />
        ))}
      </Picker>

      <TouchableOpacity style={styles.cartBtn}>
        <Text style={styles.cartText}>Add to Cart • ${totalPrice.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: "100%", height: 200, borderRadius: 10 },
  title: { fontSize: 24, fontWeight: "bold", marginVertical: 10 },
  desc: { fontSize: 14, marginBottom: 20 },
  row: { flexDirection: "row", alignItems: "center", marginVertical: 10 },
  qtyBtn: { padding: 10, backgroundColor: "#ddd", borderRadius: 5 },
  qtyText: { fontSize: 20 },
  qtyNumber: { marginHorizontal: 15, fontSize: 18 },
  label: { marginTop: 15, fontWeight: "600" },
  cartBtn: {
    backgroundColor: "#f4b400",
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  cartText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
