import { HomeItemsType } from "@/data/items";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HomeItemProps {
  item: HomeItemsType;
}

const HomeItem = ({ item }: HomeItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={{ uri: item.image }} />
        <View style={styles.cardInfo}>
          <View style={styles.titleDateContainer}>
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text>{item.date}</Text>
          </View>

          <View style={styles.ratingLikesContainer}>
            <View style={styles.ratingContainer}>
              <Text>{item.rating}</Text>
              <MaterialIcons name="star-rate" size={20} color="orange" />
            </View>

            <View style={styles.likesContainer}>
              <Text>{item.likes}</Text>
              <AntDesign name="like1" size={20} color="gray" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardContainer: {
    width: "100%",
    height: 200,
    borderColor: "#deddd1ff",
    backgroundColor: "#deddd1ff",
    borderRadius: 20,
    overflow: "hidden",
  },
  cardImage: { width: "100%", height: "60%" },
  likesContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    columnGap: 5,
  },
  cardInfo: {
    padding: 10,
    justifyContent: "space-between",
    flex: 1,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingLikesContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    columnGap: 10,
  },
});
