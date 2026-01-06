import * as SecureStore from "expo-secure-store";

const storeToken = async (token: string) => {
  try {
    const storedToken = await SecureStore.setItemAsync("token", token);
    return storedToken;
  } catch (error) {
    console.log("🚀 ~ storeToken ~ error:", error);
  }
};

const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync("token");
    return token;
  } catch (error) {
    console.log("🚀 ~ storeToken ~ error:", error);
  }
};

const deleteToken = async () => {
  try {
    await SecureStore.deleteItemAsync("token");
  } catch (error) {
    console.log("🚀 ~ storeToken ~ error:", error);
  }
};

export { deleteToken, getToken, storeToken };
