import * as SecureStore from "expo-secure-store";
const storeToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync("token", token);
  } catch (error) {
    console.error("Error storing token:", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync("token");
  } catch (error) {
    console.error("Error getting token:", error);
  }
};

import { deleteItemAsync } from "expo-secure-store";

const deleteToken = async () => {
  try {
    await deleteItemAsync("token");
  } catch (error) {
    console.error("Error deleting token:", error);
  }
};

export { deleteToken, getToken, storeToken };
