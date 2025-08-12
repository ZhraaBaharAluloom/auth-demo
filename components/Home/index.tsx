import { homeItems } from "@/data/items";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeItem from "./HomeItem";

const HomeScreen = () => {
  const homeList = homeItems.map((item) => (
    <HomeItem item={item} key={item.id} />
  ));

  return (
    <SafeAreaView style={{ backgroundColor: "#2D2E2F" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.welcomeText}>Welcome to our fake home</Text>
        {homeList}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2D2E2F",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 5,
    paddingTop: 20,
  },
  welcomeText: {
    color: "#deddd1ff",
    fontSize: 24,
  },
});
