import { signup } from "@/api/auth";
import { storeToken } from "@/api/storage";
import AuthContext from "@/utils/AuthContext";
import Feather from "@expo/vector-icons/Feather";
import { useMutation } from "@tanstack/react-query";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useContext, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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
  console.log("🚀 ~ Signup ~ userCredentials:", userCredentials);
  const { setIsAuthenticated } = useContext(AuthContext);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library.
    // Manually request permissions for videos on iOS when `allowsEditing` is set to `false`
    // and `videoExportPreset` is `'Passthrough'` (the default), ideally before launching the picker
    // so the app users aren't surprised by a system dialog after picking a video.
    // See "Invoke permissions for videos" sub section for more details.
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required."
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setUserCredentials({ ...userCredentials, image: result });
    }
  };

  const { mutate, isError, error, data, isPending } = useMutation({
    mutationKey: ["signup"],
    mutationFn: signup,
    onSuccess: (data) => {
      console.log("🚀 ~ Signup ~ data:", data);
      console.log("first");
      storeToken(data.token);
      setIsAuthenticated(true);
      router.navigate("/(protected)/(tabs)");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  console.log("🚀 ~ Signup ~ data:", data);
  console.log("🚀 ~ Signup ~ error:", error);
  console.log("🚀 ~ Signup ~ isError:", isError);

  const handleSignup = () => {
    console.log("second");

    if (!userCredentials.username || !userCredentials.password) {
      Alert.alert("Error", "Username and password are required");
      return;
    }

    const formData = new FormData();
    const profileImage = userCredentials.image;

    formData.append("username", userCredentials.username);
    formData.append("password", userCredentials.password);

    if (profileImage && profileImage.assets && profileImage.assets.length > 0) {
      formData.append("image", {
        uri: profileImage.assets[0].uri,
        name: profileImage.assets[0].fileName || "profile.jpg",
        type: profileImage.assets[0].type || "image/jpeg",
      } as any);
    }

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
        {userCredentials.image ? (
          <Image
            style={{ width: 100, height: 100, borderRadius: "100%" }}
            source={{ uri: userCredentials.image.assets[0].uri }}
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
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleSignup}
          disabled={isPending}
        >
          <Text style={styles.loginText}>
            {isPending ? "Creating an account ..." : "Signup"}
          </Text>
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
    flexDirection: "row",
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
