import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RestaurantTypes } from "./types";

interface RestaurantItemProps {
  restaurant: RestaurantTypes;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <Link href={`/restaurants/${restaurant._id}`}>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Image
            contentFit="cover"
            style={styles.cardImage}
            source={{ uri: restaurant.image }}
          />
          <View style={styles.cardInfo}>
            <View style={styles.titleTimeContainer}>
              <Text style={{ fontSize: 18 }}>{restaurant.name}</Text>
              <Text>{restaurant.deliveryTime}</Text>
            </View>

            <Text>{restaurant.category.name}</Text>
            <View style={styles.ratingContainer}>
              <MaterialIcons name="star-rate" size={18} color="#FE8723" />
              <Text>{restaurant.rating}</Text>
            </View>
          </View>
        </View>
      </View>
    </Link>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardContainer: {
    width: "90%",
    margin: "auto",
    height: 210,
    borderColor: "#deddd1ff",
    backgroundColor: "#deddd1ff",
    borderRadius: 20,
    overflow: "hidden",
  },
  cardImage: { width: "100%", height: "60%" },

  cardInfo: {
    padding: 10,
    justifyContent: "space-between",
    flex: 1,
    rowGap: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
