import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "./app";

type MenuNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Menu'>;
type MenuRouteProp = RouteProp<RootStackParamList, 'Menu'>;

const navigation = useNavigation<MenuNavigationProp>();
const route = useRoute<MenuRouteProp>();

type Pizza = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const pizzas: Pizza[] = [
  {
    id: "1",
    name: "Volcanic Pizza",
    price: 11.99,
    image: "https://i.ibb.co/pfYpwYq/pizza.png",
  },
  {
    id: "2",
    name: "Shawarma Pizza",
    price: 15.99,
    image: "https://i.ibb.co/pfYpwYq/pizza.png",
  },
  {
    id: "3",
    name: "Butter Chicken Pizza",
    price: 15.99,
    image: "https://i.ibb.co/pfYpwYq/pizza.png",
  },
  {
    id: "4",
    name: "Halal Meat Lovers",
    price: 15.99,
    image: "https://i.ibb.co/pfYpwYq/pizza.png",
  },
  {
    id: "5",
    name: "Veggie Pesto Pizza",
    price: 15.99,
    image: "https://i.ibb.co/pfYpwYq/pizza.png",
  },
];

const customPizzas = [
  {
    id: "c1",
    name: "Thin Crust",
    image: "https://i.ibb.co/pfYpwYq/pizza.png",
  },
  {
    id: "c2",
    name: "Thick Crust",
    image: "https://i.ibb.co/pfYpwYq/pizza.png",
  },
  {
    id: "c3",
    name: "Gluten Free",
    image: "https://i.ibb.co/pfYpwYq/pizza.png",
  },
];

export default function Menu() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Menu</Text>

      <Text style={styles.sectionTitle}>Create your own Pizza</Text>
      <FlatList
        data={customPizzas}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            style={styles.customCard}
            onPress={() => navigation.navigate('Item', { itemId: item.id })}
          >
            <Image source={{ uri: item.image }} style={styles.customImage} />
            <Text style={styles.customName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.sectionTitle}>Pizzas</Text>
      {pizzas.map((pizza) => (
        <TouchableOpacity
          key={pizza.id}
          style={styles.pizzaCard}
          onPress={() => navigation.navigate('Item', { itemId: pizza.id })}
        >
          <Image source={{ uri: pizza.image }} style={styles.pizzaImage} />
          <View style={{ flex: 1 }}>
            <Text style={styles.pizzaName}>{pizza.name}</Text>
            <Text style={styles.pizzaPrice}>${pizza.price?.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 12,
  },
  customCard: {
    marginRight: 12,
    alignItems: "center",
  },
  customImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  customName: {
    marginTop: 6,
    fontSize: 14,
  },
  pizzaCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
  },
  pizzaImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  pizzaName: {
    fontSize: 16,
    fontWeight: "600",
  },
  pizzaPrice: {
    fontSize: 14,
    color: "gray",
    marginTop: 2,
  },
});
