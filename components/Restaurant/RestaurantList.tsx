import { getAllRestaurants } from "@/api/restaurants";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Spinner from "../Loading/Spinner";
import RestaurantItem from "./RestaurantItem";
import { RestaurantTypes } from "./types";

const RestaurantList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["restaurants"],
    queryFn: getAllRestaurants,
  });

  if (isLoading) return <Spinner size="large" color={"gray"} />;

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      {data.map((restaurant: RestaurantTypes) => (
        <RestaurantItem key={restaurant._id} restaurant={restaurant} />
      ))}
    </ScrollView>
  );
};

export default RestaurantList;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#2D2E2F",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    rowGap: 5,
    paddingTop: 20,
  },
});
