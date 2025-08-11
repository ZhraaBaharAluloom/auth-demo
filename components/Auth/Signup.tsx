import { register } from "@/api/auth";
import Feather from "@expo/vector-icons/Feather";
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
  const [image, setImage] =
    useState<ImagePicker.ImagePickerSuccessResult | null>(null);

  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
    image: "",
  });
  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert("Permission required");
      return;
    }
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result);
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["signup"],
    mutationFn: register,
    onError: (err) => {
      console.log("Could not create an account", err);
    },
    onSuccess: () => {
      console.log("Account created successfully");
    },
  });

  const handleSubmit = () => {
    if (!userCredentials.username || !userCredentials.password) {
      alert("Please fill username and password");
      return;
    }
    if (!image) {
      alert("Please select a profile image");
      return;
    }

    const formData = new FormData();
    formData.append("username", userCredentials.username);
    formData.append("password", userCredentials.password);
    formData.append("profileImage", {
      uri: image,
      name: image.assets[0].fileName,
      type: image.assets[0].mimeType,
    } as any);

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
      <View style={styles.fieldsContainer}>
        {image ? (
          <Image
            style={{ width: 100, height: 100, borderRadius: "100%" }}
            source={{ uri: image?.assets[0]?.uri }}
          />
        ) : (
          <TouchableOpacity onPress={pickImage} style={styles.imgPickerStyle}>
            <Feather name="upload-cloud" size={24} color="#deddd1ff" />
            <Text style={styles.uploadImageLabel}>Upload profile image</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.fieldLabel}>Username</Text>
        <TextInput
          placeholder=""
          style={styles.textInput}
          onChangeText={(text) =>
            setUserCredentials({ ...userCredentials, username: text })
          }
        />
        <Text style={styles.fieldLabel}>Password</Text>
        <TextInput
          placeholder=""
          textContentType="password"
          secureTextEntry
          style={styles.textInput}
          onChangeText={(text) =>
            setUserCredentials({ ...userCredentials, password: text })
          }
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
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
    width: 250,
    height: 250,
  },
  title: {
    color: "#deddd1ff",
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 5,
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
    color: "#deddd1ff",
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
  imgPickerStyle: {
    borderWidth: 1,
    borderColor: "#deddd1ff",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    flexDirection: "row",
    columnGap: 10,
  },
  uploadImageLabel: {
    color: "#deddd1ff",
    fontWeight: "bold",
  },
});
