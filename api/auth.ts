import instance from "./api";
import { storeToken } from "./storage";
interface UserInfo {
  username: string;
  password: string;
}

interface RegisterInfo {
  image: string;
  username: string;
  password: string;
}

const loginApi = async (userInfo: UserInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  storeToken(data.token);
  return data;
};

const register = async (userInfo: FormData) => {
  const { data } = await instance.post("/auth/register", userInfo);
  storeToken(data.token);
  return data;
};

export { loginApi, register };
