import { instance } from "@/api";
interface UserInfo {
  username: string;
  password: string;
}

const login = async (userInfo: UserInfo) => {
  console.log("userInfo", userInfo);
  const { data } = await instance.post("/auth/login", userInfo);
  return data;
};

const register = async (userInfo: UserInfo) => {
  const { data } = await instance.post("/auth/register", userInfo);
  return data;
};

export { login, register };
