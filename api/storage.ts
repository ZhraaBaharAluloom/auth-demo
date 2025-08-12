import * as SecureStore from "expo-secure-store";

const storeToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync("token", token);
  } catch (error) {
    console.error("Error storing token", error);
  }
};
export { storeToken };

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync("token");
  } catch (error) {
    console.error("Error getting token", error);
  }
};
export { getToken };

const deleteToken = async () => {
  try {
    return await SecureStore.deleteItemAsync("token");
  } catch (error) {
    console.error("Error getting token", error);
  }
};
export { deleteToken };
