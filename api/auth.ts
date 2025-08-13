import { instance } from ".";
import { storeToken } from "./storage";

type userInfoTypes = {
  username: string;
  password: string;
};

export const login = async (userInfo: userInfoTypes) => {
  const res = await instance.post("/auth/login", userInfo);
  await storeToken(res.data.token);
  return res.data;
};

export const register = async (formData: FormData) => {
  const res = await instance.post("/auth/register", formData);
  await storeToken(res.data.token);
  return res.data;
};
