import axios from "axios";
import { getItemAsync } from "expo-secure-store";

const instance = axios.create({
  baseURL: "https://react-native-food-delivery-be.eapi.joincoded.com/api",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await getItemAsync("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (err) => Promise.reject(err)
);

export default instance;
