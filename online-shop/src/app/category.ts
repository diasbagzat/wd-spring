export interface Category {
  id: number;
  name: string;
  image: string;
}

export const CATEGORY: Category[] = [
  {
    id: 1,
    name: 'Куртки',
    image: '../assets/categ1.webp'
  },
  {
    id: 2,
    name: 'Футболки',
    image: '../assets/Twka.webp'
  },
  {
    id: 3,
    name: 'Рубашки',
    image: '../assets/Rubashka.webp'
  },
  {
    id: 4,
    name: 'Джинсы',
    image: '../assets/jeans.jpg'
  }
];
