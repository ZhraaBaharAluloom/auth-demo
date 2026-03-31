import { instance } from "@/api";
import { storeToken } from "./storage";
interface UserInfo {
  username: string;
  password: string;
}
interface User {
  username: string;
  password: string;
  image: string;
}
const login = async (userInfo: UserInfo) => {
  console.log("userInfo", userInfo);
  const { data } = await instance.post("/auth/login", userInfo);
  return data;
};

const register = async (userInfo: FormData) => {
  const { data } = await instance.post("/auth/register", userInfo);
  await storeToken(data.token);
  return data;
};

export { login, register };
