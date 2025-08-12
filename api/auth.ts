import instance from ".";
import { storeToken } from "./storage";

interface userCredential {
  username: string;
  password: string;
}

const login = async (userInfo: userCredential) => {
  const res = await instance.post("/auth/login", userInfo);
  await storeToken(res.data.token);
  return res.data;
};

export { login };
