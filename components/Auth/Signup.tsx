import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const Signup = () => {
  const [image, setImage] = useState<string | null>(null);
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#2D2E2F" }}>
      <View style={styles.container}>
        <Image
          contentFit="contain"
          source={require("@/assets/images/login.png")}
          style={styles.imgStyle}
        />
        <Text style={styles.title}>Create a New Account</Text>
        <View style={styles.fieldsContainer}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                borderRadius: "100%",
                width: 200,
                height: 200,
                marginTop: 20,
              }}
            />
          )}
          <Text style={styles.fieldLabel}>Username</Text>
          <TextInput
            placeholder=""
            style={styles.textInput}
            onChangeText={(text) => setUser(text)}
          />
          <Text style={styles.fieldLabel}>Password</Text>
          <TextInput
            placeholder=""
            style={styles.textInput}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={pickImage}>
            <AntDesign
              name="upload"
              size={24}
              color="white"
              style={{
                marginLeft: 50,
                marginTop: 20,
              }}
            />
            <Text style={{ color: "white" }}>Upload your image </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Signup</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.createAccountContainer}
          onPress={() => router.dismissTo("/")}
        >
          <Text style={styles.createAccountPrompt}>
            Already have an account?
          </Text>
          <Text style={styles.createAccountText}> Login.</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2E2F",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 5,
  },
  imgStyle: {
    width: 300,
    height: 300,
  },
  title: {
    color: "#deddd1ff",
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 10,
  },
  fieldsContainer: {
    width: 300,
    alignItems: "center",
    rowGap: 2,
  },
  fieldLabel: {
    color: "#deddd1ff",
    alignSelf: "flex-start",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#deddd1ff",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 5,
  },
  loginButton: {
    borderRadius: 10,
    paddingVertical: 15,
    backgroundColor: "#FE8723",
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#ffffffff",
    fontSize: 20,
  },
  createAccountContainer: {
    flexDirection: "row",
  },
  createAccountPrompt: {
    color: "#deddd1ff",
  },
  createAccountText: {
    color: "#FE8723",
  },
});
