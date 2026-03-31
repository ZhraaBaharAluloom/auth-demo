import axios from "axios";

export const instance = axios.create({
  baseURL: "https://react-native-food-delivery-be.eapi.joincoded.com/api",
});
