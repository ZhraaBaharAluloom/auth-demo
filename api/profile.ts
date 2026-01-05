import instance from ".";

const getProfile = async () => {
  const response = await instance.get("/auth/profile");
  return response.data;
};

export { getProfile };
