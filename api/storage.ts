import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";

export const storeToken = async (token: string) => {
  try {
    await setItemAsync("token", token);
  } catch (error) {
    console.log("🚀 ~ storeToken ~ error:", error);
  }
};

export const getToken = async () => {
  try {
    return await getItemAsync("token");
  } catch (error) {
    console.log("🚀 ~ getToken ~ error:", error);
  }
};

export const deleteToken = async () => {
  try {
    await deleteItemAsync("token");
  } catch (error) {
    console.error("Error deleting token:", error);
  }
};
