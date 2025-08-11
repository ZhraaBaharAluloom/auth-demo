import instance, { baseURL } from ".";
interface UserInfo {
  username: string;
  password: string;
}
const login = async (userInfo: UserInfo) => {
  const response = await instance.post(baseURL, userInfo);
  return response.data;
};

export { login, UserInfo };
