import * as SecureStore from "expo-secure-store";

export const storeToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync("token", token);
  } catch (error) {
    console.log("🚀 ~ storeToken ~ error:", error);
  }
};

export const getToken = async () => {
  try {
    const res = await SecureStore.getItemAsync("token");
    return res;
  } catch (error) {
    console.log("🚀 ~ storeToken ~ error:", error);
  }
};

export const removeToken = async () => {
  try {
    const res = await SecureStore.deleteItemAsync("token");
    return res;
  } catch (error) {
    console.log("🚀 ~ storeToken ~ error:", error);
  }
};
