import { login } from "@/api/auth";
import { storeToken } from "@/api/storage";
import AuthContext from "@/utils/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useContext, useState } from "react";
import {
  Alert,
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

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const { setIsAuthenticated } = useContext(AuthContext);

  const { mutate, isError, isPending, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: (data) => {
      storeToken(data.token);
      setIsAuthenticated(true);
      router.navigate("/(protected)/(tabs)");
      setUserCredentials({ ...userCredentials, username: "", password: "" });
    },
  });

  const handleLogin = () => {
    if (!userCredentials.username) return Alert.alert("username required");
    mutate(userCredentials);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={50}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            contentFit="contain"
            source={require("@/assets/images/login.png")}
            style={styles.imgStyle}
          />

          <Text style={styles.title}>Login to Your Account</Text>

          <View style={styles.fieldsContainer}>
            <Text style={styles.fieldLabel}>Username</Text>
            <TextInput
              placeholder=""
              style={[styles.textInput, isPending && styles.disabledTextInput]}
              value={userCredentials.username}
              onChangeText={(text) =>
                setUserCredentials({ ...userCredentials, username: text })
              }
              editable={!isPending}
            />
            <Text style={styles.fieldLabel}>Password</Text>
            <TextInput
              placeholder=""
              textContentType="password"
              secureTextEntry
              style={[styles.textInput, isPending && styles.disabledTextInput]}
              value={userCredentials.password}
              onChangeText={(text) =>
                setUserCredentials({ ...userCredentials, password: text })
              }
              editable={!isPending}
            />
            {isError && <Text style={styles.error}>Something went wrong</Text>}

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginText}>
                {isPending ? "Login..." : "Login"}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.createAccountContainer}
            onPress={() => router.push("/signup")}
          >
            <Text style={styles.createAccountPrompt}>
              Don&apos;t have an account?
            </Text>
            <Text style={styles.createAccountText}> Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.aboutContainer}
            onPress={() => router.push("/about")}
          >
            <Text style={styles.aboutText}>More about Foodie?</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2E2F",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 10,
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
  error: {
    color: "red",
    fontSize: 16,
  },
  fieldsContainer: {
    width: 300,
    alignItems: "center",
    marginTop: 20,
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
    padding: 3,
  },
  disabledTextInput: {
    backgroundColor: "gray",
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
  aboutContainer: {},
  aboutText: {
    color: "#deddd1ff",
    fontSize: 20,
    textDecorationLine: "underline",
  },
});
