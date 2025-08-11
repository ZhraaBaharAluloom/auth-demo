import axios from "axios";

const baseURL =
  "https://react-native-food-delivery-be.eapi.joincoded.com/api/auth/login";
export { baseURL };

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
