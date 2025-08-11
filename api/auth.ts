import instance from "./api";
import { storeToken } from "./storage";
interface UserInfo {
  username: string;
  password: string;
}

const loginApi = async (userInfo: UserInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  storeToken(data.token);
  return data;
};

const register = async (userInfo: UserInfo) => {
  const { data } = await instance.post("/auth/register", userInfo);
  return data;
};

export { loginApi, register };
