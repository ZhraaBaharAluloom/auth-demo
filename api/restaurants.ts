import instance from ".";

const getAllRestaurants = async () => {
  const response = await instance.get("/resturant");

  return response.data;
};

const getRestaurantById = async (restaurantId: string) => {
  const response = await instance.get(`/resturant/${restaurantId}`);

  return response.data;
};

export { getAllRestaurants, getRestaurantById };
