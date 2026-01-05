import { deleteToken, getToken } from "@/api/storage";
import { homeItems } from "@/data/items";
import AuthContext from "@/utils/contexts/authContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeItem from "./HomeItem";
const HomeScreen = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const homeList = homeItems.map((item) => (
    <HomeItem item={item} key={item.id} />
  ));

  const handleLogout = async () => {
    await deleteToken();
    console.log(await getToken());
    setIsAuthenticated(false);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#2D2E2F" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <AntDesign name="logout" size={24} color="red" onPress={handleLogout} />
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
