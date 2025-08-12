import instance from ".";
interface UserInfo {
  username: string;
  password: string;
}
interface Imageinfo extends UserInfo {
  image: string;
}
// https://react-native-food-delivery-be.eapi.joincoded.com/api/auth/
const login = async (userInfo: UserInfo) => {
  const response = await instance.post("/auth/login", userInfo);
  return response.data;
};

const signup = async (userInfo: Imageinfo) => {
  const response = await instance.post("/auth/register", userInfo);
  console.log("🚀 ~ signup ~ response:", response.data);
  return response.data;
};

export { Imageinfo, login, signup, UserInfo };
