interface Category {
  _id: string;
  name: string;
}

interface Item {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  __v: number;
}

interface RestaurantTypes {
  _id: string;
  name: string;
  rating: number;
  image: string;
  category: Category;
  deliveryTime: string;
  items: Item[];
  __v: number;
}

export { RestaurantTypes };
