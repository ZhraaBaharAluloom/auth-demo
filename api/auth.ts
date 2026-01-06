import { UserInfoTypes } from "@/components/Auth/types";
import instance from ".";

export const login = async (userInfo: UserInfoTypes) => {
  const response = await instance.post("/auth/login", userInfo);
  return response.data;
};

export const signup = async (userInfo: FormData) => {
  try {
    console.log("🚀 ~ auth ~ userInfo:", userInfo);
    const response = await instance.post("/auth/register", userInfo);
    console.log("🚀 ~ signup ~ response:", response);
    return response.data;
  } catch (error) {
    console.log("🚀 ~ signup ~ error:", error);
  }
};
