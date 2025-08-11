import instance from "./api";
interface UserInfo {
  username: string;
  password: string;
}

const loginApi = async (userInfo: UserInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  return data;
};

const register = async (userInfo: UserInfo) => {
  const { data } = await instance.post("/auth/register", userInfo);
  return data;
};

export { loginApi, register };
