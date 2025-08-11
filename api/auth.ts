import { instance } from ".";

type userInfoTypes = {
  username: string;
  password: string;
};

export const login = async (userInfo: userInfoTypes) => {
  const res = await instance.post("/auth/login", userInfo);
  return res.data;
};

export const register = async (formData: FormData) => {
  const res = await instance.post("/auth/register", formData);
  return res.data;
};
