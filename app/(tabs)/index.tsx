import { ScrollView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import {useRouter} from "expo-router"; 
import React from 'react';

const USER_NAME = 'Hi, there';

const deals = [
  { id: 'a', title: 'Deal A', price: 24.99, img: require('../../assets/images/menu/menu_pizza.png') },
  { id: 'b', title: 'Deal B', price: 26.99, img: require('../../assets/images/menu/menu_pizza.png') },
  { id: 'c', title: 'Deal C', price: 31.99, img: require('../../assets/images/menu/menu_pizza.png') },
  { id: 'd', title: 'Deal D', price: 31.99, img: require('../../assets/images/menu/menu_pizza.png') },
];

const specials = [
  { id: 'sp1', title: 'Samosa Poutine', img: require('../../assets/images/menu/samosa_poutine.jpg') },
  { id: 'sp2', title: 'Shahi Fries', img: require('../../assets/images/menu/shahi_fries.png')},
  { id: 'sp3', title: 'Lava Tikki', img: require('../../assets/images/menu/Lava_Tikki.png') },
  { id: 'sp4', title: 'Devil Fries', img: require('../../assets/images/menu/devil_fries.jpg') },
];

const categories = [
  { id: 'c1', title: 'Pasta', img: require('../../assets/images/menu/pasta.png') },
  { id: 'c2', title: 'Gourmet Pizza', img: require('../../assets/images/menu/pizza2.png') },
  { id: 'c3', title: 'Pizza', img: require('../../assets/images/menu/pizza3.jpg') },
  { id: 'c4', title: 'Double Pizza Deals', img: require('../../assets/images/menu/double_pizza.png') },
  { id: 'c5', title: 'Appetizers', img: require('../../assets/images/menu/appetizers.png') },
  { id: 'c6', title: 'Drinks & Dips', img: require('../../assets/images/menu/drinks.png') },
  { id: 'c7', title: 'Chicken Wings', img: require('../../assets/images/menu/chicken_wings.png') },
  { id: 'c8', title: 'Poutines', img: require('../../assets/images/menu/poutines.png') },
  { id: 'c9', title: 'Pizza Subs', img: require('../../assets/images/menu/pizza_subs.png') },
  { id: 'c10', title: 'Shawarma Wraps', img: require('../../assets/images/menu/shawarma_wraps.png') },
  { id: 'c11', title: 'Slides', img: require('../../assets/images/menu/sides.png') },
  { id: 'c12', title: 'Walk-In Specials', img: require('../../assets/images/menu/walk_in_specials.png') },
  { id: 'c13', title: 'Meals', img: require('../../assets/images/menu/meals.png') },
  { id: 'c14', title: 'Salads', img: require('../../assets/images/menu/salads.png') },
  { id: 'c15', title: 'Cakes', img: require('../../assets/images/menu/cakes.png') },
];

const imgSrc = (img: any) => (typeof img === 'string' ? { uri: img } : img);


export default function HomeScreen() {
  const router = useRouter(); 
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.push("/menuLines")}><Ionicons name="menu" size={26} color="#000" /></TouchableOpacity>
        <TouchableOpacity><Ionicons name="notifications-outline" size={26} color="#000" /></TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.hello}>{USER_NAME}!</Text>
        <Text style={styles.sub}>Let the cheesy goodness begin!</Text>

        <Text style={styles.section}>Deals for you</Text>
        <FlatList
          horizontal
          data={deals}
          keyExtractor={(i) => i.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, paddingHorizontal: 4 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.dealCard} activeOpacity={0.85}>
              <Image source={imgSrc(item.img)} style={styles.dealImage} />
              <Text numberOfLines={1} style={styles.dealTitle}>{item.title}</Text>
              <Text style={styles.dealPrice}>${item.price.toFixed(2)}</Text>
            </TouchableOpacity>
          )}
        />

        <Text style={styles.section}>Lava’s Specials</Text>
        <FlatList
          horizontal
          data={specials}
          keyExtractor={(i) => i.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, paddingHorizontal: 4 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.specialCard} activeOpacity={0.85}>
              <Image source={imgSrc(item.img)} style={styles.specialImage} />
              <Text numberOfLines={1} style={styles.specialTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />

        <Text style={styles.section}>Explore the menu</Text>
        <View style={styles.grid}>
          {categories.map((c) => (
            <TouchableOpacity key={c.id} style={styles.gridCard} activeOpacity={0.9}>
              <Image source={imgSrc(c.img)} style={styles.gridImage} />
              <Text style={styles.gridTitle}>{c.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  topBar: { paddingHorizontal: 16, paddingTop: 6, paddingBottom: 6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  container: { paddingHorizontal: 16, paddingBottom: 120 },
  hello: { fontSize: 22, fontWeight: '800', color: '#d9a300', marginTop: 6 },
  sub: { fontSize: 14, color: '#222', marginBottom: 14 },
  section: { fontSize: 18, fontWeight: '700', color: '#000', marginTop: 8, marginBottom: 10 },

  dealCard: { width: 120, backgroundColor: '#fff', borderRadius: 14, padding: 10, alignItems: 'center', borderWidth: 1, borderColor: '#eee', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 6, elevation: 2 },
  dealImage: { width: 84, height: 84, borderRadius: 42, marginBottom: 6 },
  dealTitle: { fontSize: 12, color: '#333' },
  dealPrice: { fontSize: 12, fontWeight: '700', color: '#333' },

  specialCard: { width: 150, backgroundColor: '#fff', borderRadius: 14, padding: 10, borderWidth: 1, borderColor: '#eee' },
  specialImage: { width: '100%', height: 90, borderRadius: 10, marginBottom: 6 },
  specialTitle: { fontSize: 12, color: '#333' },

  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  gridCard: { width: '47%', backgroundColor: '#fff', borderRadius: 14, padding: 10, borderWidth: 1, borderColor: '#eee' },
  gridImage: { width: '100%', height: 140, borderRadius: 10, marginBottom: 8 },
  gridTitle: { fontSize: 14, fontWeight: '600', color: '#333' },
});
