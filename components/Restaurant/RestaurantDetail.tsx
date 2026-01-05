import { getRestaurantById } from "@/api/restaurants";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Spinner from "../Loading/Spinner";
import { RestaurantTypes } from "./types";

const RestaurantDetail = () => {
  const { restaurantId } = useLocalSearchParams();

  const { data: restaurant, isLoading } = useQuery({
    queryKey: ["restaurant", restaurantId],
    queryFn: () => getRestaurantById(restaurantId as string),
  });

  if (isLoading) return <Spinner size={"large"} color={"gray"} />;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: restaurant.image }}
        style={styles.restaurantImage}
      />
      <View style={styles.nameRatingContainer}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <Text style={styles.restaurantRating}>
          <MaterialIcons name="star-rate" size={18} color="#FE8723" />
          {restaurant.rating}
        </Text>
      </View>
      <Text style={styles.restaurantCategory}>
        Category: {restaurant.category.name}
      </Text>
      <Text style={styles.deliveryTime}>
        Delivery: {restaurant.deliveryTime}
      </Text>

      <Text style={styles.itemsHeader}>Menu</Text>
      <ScrollView>
        {restaurant.items.map((item: RestaurantTypes) => (
          <View key={item.name} style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2E2F",
  },
  restaurantImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  nameRatingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    color: "#deddd1ff",
  },
  restaurantRating: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: "#deddd1ff",
  },
  restaurantCategory: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: "#deddd1ff",
  },
  deliveryTime: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: "#deddd1ff",
    marginBottom: 20,
  },
  itemsHeader: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "#2D2E2F",
    color: "#deddd1ff",
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
    justifyContent: "center",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#deddd1ff",
  },
  itemDescription: {
    fontSize: 14,
    color: "#deddd1ff",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FE8723",
    marginTop: 5,
  },
});
