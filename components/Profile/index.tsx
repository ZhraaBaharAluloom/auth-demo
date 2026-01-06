import { getProfile } from "@/api/profile";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import { deleteItemAsync } from "expo-secure-store";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Spinner from "../Loading/Spinner";
const Profile = () => {
  const userName = "Foodie Master";
  const userImage =
    "https://static.vecteezy.com/system/resources/thumbnails/044/651/262/small/a-cute-yellow-chick-looks-curiously-at-the-viewer-png.png"; // Placeholder image
  const foodQuote = "I'm on a seafood diet. I see food and I eat it.";

  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const logout = async () => {
    await deleteItemAsync("token");
    router.dismissTo("/login");
  };

  if (isLoading) return <Spinner size="large" color={"gray"} />;

  return (
    <View style={styles.container}>
      <View style={styles.logoutContainer}>
        <MaterialIcons name="logout" size={24} color="red" onPress={logout} />
      </View>
      <View style={styles.infoContainer}>
        <Image
          source={{ uri: data?.image || userImage }}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{data?.username || userName}</Text>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.quoteText}>{foodQuote}</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2E2F",
    padding: 20,
  },
  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logoutContainer: {
    alignSelf: "flex-end",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderColor: "#FE8723",
    borderWidth: 1,
    padding: 10,
  },
  userName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FE8723",
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 22,
    color: "#deddd1ff",
    marginBottom: 15,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#deddd1ff",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
