import Feather from "@expo/vector-icons/Feather";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface UserCredentialsTypes {
  image: null | ImagePicker.ImagePickerSuccessResult;
  username: string;
  password: string;
}

const Signup = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentialsTypes>({
    username: "",
    password: "",
    image: null,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            contentFit="contain"
            source={require("@/assets/images/login.png")}
            style={styles.imgStyle}
          />
          <Text style={styles.title}>Create a New Account</Text>
          <View style={styles.fieldsContainer}>
            {userCredentials.image ? (
              <Image
                style={{ width: 100, height: 100, borderRadius: "100%" }}
                source={{ uri: userCredentials.image.assets[0].uri }}
              />
            ) : (
              <TouchableOpacity style={styles.imgPickerStyle}>
                <Feather name="upload-cloud" size={24} color="#deddd1ff" />
                <Text style={styles.uploadImageLabel}>
                  Upload profile image
                </Text>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    flexDirection: "row",
  },
  loginText: {
    color: "#ffffffff",
    fontSize: 20,
  },
  error: {
    color: "red",
    fontSize: 16,
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
