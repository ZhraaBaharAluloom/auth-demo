import { register } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    image: "",
  });
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
    onSuccess: (data) => {
      console.log("YIPPPEEEE UR REGISTERED LESSGOOO:", data.token);
    },
    onError: (err) => {
      console.error("whoopsiess, somthins wrong", err);
    },
  });

  const pickImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!res.canceled) {
      const pic: string = res.assets[0].uri;
      setUserInfo({ ...userInfo, image: pic });
    }

    console.log(res);
  };

  const handleRegister = async () => {
    const formData = new FormData();
    formData.append("username", userInfo.username);
    formData.append("password", userInfo.password);
    formData.append("image", userInfo.image);

    mutate(formData);
  };

  return (
    <View style={styles.container}>
      <Image
        contentFit="contain"
        source={require("@/assets/images/login.png")}
        style={styles.imgStyle}
      />
      <Text style={styles.title}>Create a New Account</Text>

      <View>
        {userInfo.image.length === 0 ? (
          <TouchableOpacity onPress={() => pickImage()}>
            <Text
              style={{
                color: "white",
              }}
            >
              Upload image plz
            </Text>
          </TouchableOpacity>
        ) : (
          <Image
            source={{ uri: userInfo.image }}
            style={{ height: 100, width: 100, borderRadius: 100 }}
          />
        )}
      </View>
      <View style={styles.fieldsContainer}>
        <Text style={styles.fieldLabel}>Username</Text>
        <TextInput
          onChangeText={(text) => setUserInfo({ ...userInfo, username: text })}
          placeholder=""
          style={styles.textInput}
        />
        <Text style={styles.fieldLabel}>Password</Text>
        <TextInput
          onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
          placeholder=""
          style={styles.textInput}
        />
        <TouchableOpacity
          onPress={() => handleRegister()}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.createAccountContainer}
        onPress={() => router.dismissTo("/")}
      >
        <Text style={styles.createAccountPrompt}>Already have an account?</Text>
        <Text style={styles.createAccountText}> Login.</Text>
      </TouchableOpacity>
    </View>
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
