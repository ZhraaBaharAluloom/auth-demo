import { UserInfoTypes } from "@/components/Auth/types";
import instance from ".";

export const login = async (userInfo: UserInfoTypes) => {
  const response = await instance.post("/auth/login", userInfo);
  return response.data;
};

export const signup = async (userInfo: FormData) => {
  const response = await instance.post("/auth/register", userInfo);
  return response.data;
};
