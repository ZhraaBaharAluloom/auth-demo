import { Image } from "expo-image";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BlogScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#2D2E2F", flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.welcomeText}>Welcome to our secret Blog</Text>
        <Image
          style={styles.blogImage}
          source={{ uri: "https://picsum.photos/600/400?random=1" }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2D2E2F",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 20,
    paddingTop: 20,
    flex: 1,
  },
  welcomeText: {
    color: "#deddd1ff",
    fontSize: 24,
  },
  blogImage: {
    width: "100%",
    height: 300,
  },
});
