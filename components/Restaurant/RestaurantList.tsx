import { getAllRestaurants } from "@/api/restaurants";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import Spinner from "../Loading/Spinner";
import RestaurantItem from "./RestaurantItem";
import { RestaurantTypes } from "./types";

const RestaurantList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["restaurants"],
    queryFn: getAllRestaurants,
  });

  if (isLoading) return <Spinner size="large" color={"gray"} />;
  if (isError) return <Text>Something went wrong</Text>;

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      {data.map((restaurant: RestaurantTypes) => (
        <RestaurantItem key={restaurant._id} restaurant={restaurant} />
      ))}

      {/* <FlatList data={data} renderItem={({item}) => <RestaurantItem restaurant={item}/>} /> */}
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
