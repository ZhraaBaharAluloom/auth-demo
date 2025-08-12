export type HomeItemsType = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  rating: number;
  likes: number;
  date: string;
  cta: string;
};

export const homeItems: HomeItemsType[] = [
  {
    id: 1,
    title: "Summer Vibes Playlist",
    subtitle: "Your perfect mix for sunny days",
    image: "https://picsum.photos/600/400?random=1",
    category: "Music",
    rating: 4.7,
    likes: 1250,
    date: "2025-08-10",
    cta: "Play Now",
  },
  {
    id: 2,
    title: "Learn Photography in 7 Days",
    subtitle: "Master your camera and capture magic",
    image: "https://picsum.photos/600/400?random=2",
    category: "Education",
    rating: 4.9,
    likes: 980,
    date: "2025-08-05",
    cta: "Start Learning",
  },
  {
    id: 3,
    title: "The Art of Minimal Living",
    subtitle: "Declutter your home and your mind",
    image: "https://picsum.photos/600/400?random=3",
    category: "Lifestyle",
    rating: 4.5,
    likes: 430,
    date: "2025-08-01",
    cta: "Read More",
  },
  {
    id: 4,
    title: "Top 10 Travel Destinations 2025",
    subtitle: "Where adventure meets relaxation",
    image: "https://picsum.photos/600/400?random=4",
    category: "Travel",
    rating: 4.8,
    likes: 2100,
    date: "2025-07-25",
    cta: "Explore Now",
  },
];
