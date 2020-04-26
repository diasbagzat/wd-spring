export interface Product {
  id: number;
  title: string;
  description: string;
  material: string;
  price: number;
  oldprice: number;
  sale: string;
  econom: number;
  size: string;
  categoryId: number;
  image: string;
}

export const products = [
  {
    id: 1,
    title: 'Adidas',
    material: 'Нейлон - 100%',
    description: 'Утепленная куртка от спортивного бренда выполнена из плотного текстиля. Модель прямого силуэта. ' +
      'Детали: фиксированный капюшон, воротник-стойка, застежка на молнии с ветрозащитной планкой на липучках; два втачных ' +
      'кармана по бокам, два нагрудных кармана на молнии, внутренний карман на липучке; искусственный утеплитель.',
    price: 63495,
    oldprice: 70550,
    sale: '23%',
    econom: 7055,
    size: '48/50 52/54  56/58  60/62',
    categoryId: 1,
    image: './assets/adidas.png'
  },
  {
    id: 2,
    title: 'Fila',
    material: 'Нейлон - 100%',
    description: 'LOL',
    price: 2000,
    oldprice: 4000,
    sale: '50%',
    econom: 2000,
    size: '48/50 52/54  56/58  60/62',
    categoryId: 1,
    image: './assets/fila_kurtka.webp'
  },
  {
    id: 3,
    title: 'Asics',
    material: 'Нейлон - 100%',
    description: 'LOL',
    price: 3000,
    oldprice: 4000,
    sale: '50%',
    econom: 2000,
    size: '48/50 52/54  56/58  60/62',
    categoryId: 1,
    image: './assets/asics_kurtka.webp'
  }
  ,
  {
    id: 4,
    title: 'Oodji',
    material: 'Нейлон - 100%',
    description: 'LOL',
    price: 4000,
    oldprice: 4000,
    sale: '50%',
    econom: 2000,
    size: '48/50 52/54  56/58  60/62',
    categoryId: 1,
    image: './assets/oodji_kurtka.webp'
  },
  {
    id: 5,
    title: 'Bikkemberg',
    material: 'Нейлон - 100%',
    description: 'Куртка от премиум-бренда выполнена из мягкой ягнячьей кожи. Модель прямого кроя. Особенности: воротник-стойка, ' +
      'застежка на молнию, два боковых кармана и один карман внутри, трикотажные манжеты и низ.',
    price: 54000,
    oldprice: 4000,
    sale: '50%',
    econom: 2000,
    size: '48/50 52/54  56/58  60/62',
    categoryId: 1,
    image: './assets/bikkemberg_kurtka.webp'
  },
  {
    id: 6,
    title: 'Bikkemberg',
    material: 'Нейлон - 100%',
    description: 'Куртка от премиум-бренда выполнена из мягкой ягнячьей кожи. Модель прямого кроя. Особенности: воротник-стойка, ' +
      'застежка на молнию, два боковых кармана и один карман внутри, трикотажные манжеты и низ.',
    price: 54000,
    oldprice: 4000,
    sale: '50%',
    econom: 2000,
    size: '48/50 52/54  56/58  60/62',
    categoryId: 1,
    image: './assets/bikkemberg_kurtka.webp'
  },
  {
    id: 7,
    title: 'Armani Exchange',
    material: 'Нейлон - 100%',
    description: 'Куртка от премиум-бренда выполнена из мягкой ягнячьей кожи. Модель прямого кроя. Особенности: воротник-стойка, ' +
      'застежка на молнию, два боковых кармана и один карман внутри, трикотажные манжеты и низ.',
    price: 54000,
    oldprice: 4000,
    sale: '50%',
    econom: 2000,
    size: '48/50 52/54  56/58  60/62',
    categoryId: 1,
    image: 'https://intertop.kz/upload/iblock/3bd/3bd332aa6688769d0c566933766e178c.jpg'
  },
  {
    id: 8,
    title: 'Armani Exchange',
    material: 'Нейлон - 100%',
    description: 'Куртка от премиум-бренда выполнена из мягкой ягнячьей кожи. Модель прямого кроя. Особенности: воротник-стойка, ' +
      'застежка на молнию, два боковых кармана и один карман внутри, трикотажные манжеты и низ.',
    price: 54000,
    oldprice: 4000,
    sale: '50%',
    econom: 2000,
    size: '48/50 52/54  56/58  60/62',
    categoryId: 1,
    image: 'https://braggart24.ru/image/catalog/image/data/1arktic/90520/sinyaya-modeli-90520-2.jpg'
  },
  {
    id: 9,
    title: 'The North Face',
    material: 'Хлопок - 100%',
    description: 'Футболка от премиум-бренда выполнена из мягкого хлопка. Модель прямого кроя.',
    price: 5000,
    oldprice: 10000,
    sale: '50%',
    econom: 5000,
    size: '48/50  52/54  56/58  60/62',
    categoryId: 2,
    image: 'https://intertop.kz/upload/iblock/740/74064303345f4cd4bd6d676e9eb08d74.jpg'
  },
  {
    id: 10,
    title: 'Wrangler',
    material: 'Хлопок - 100%',
    description: 'Футболка от премиум-бренда выполнена из мягкого хлопка. Модель прямого кроя.',
    price: 5000,
    oldprice: 10000,
    sale: '50%',
    econom: 5000,
    size: '48/50  52/54  56/58  60/62',
    categoryId: 2,
    image: 'https://intertop.kz/upload/iblock/a68/a68b40b665a43e45f8fb70a0c5baa57a.jpg'
  },
  {
    id: 11,
    title: 'Tommy',
    material: 'Хлопок - 100%',
    description: 'Футболка от премиум-бренда выполнена из мягкого хлопка. Модель прямого кроя.',
    price: 5000,
    oldprice: 10000,
    sale: '50%',
    econom: 5000,
    size: '48/50  52/54  56/58  60/62',
    categoryId: 2,
    image: 'https://intertop.kz/upload/iblock/48c/48c72387f6f146e0371bc1dce5f2cb33.jpeg'
  },
  {
    id: 12,
    title: 'Tomm',
    material: 'Хлопок - 100%',
    description: 'Рубашка от премиум-бренда выполнена из мягкого хлопка. Модель прямого кроя.',
    price: 5000,
    oldprice: 10000,
    sale: '50%',
    econom: 5000,
    size: '48/50  52/54  56/58  60/62',
    categoryId: 3,
    image: 'https://intertop.kz/upload/iblock/7f9/7f9c53e2091ab12cdb6699bb548a0efc.jpg'
  },
  {
    id: 13,
    title: 'Tomm',
    material: 'Хлопок - 100%',
    description: 'Рубашка от премиум-бренда выполнена из мягкого хлопка. Модель прямого кроя.',
    price: 5000,
    oldprice: 10000,
    sale: '50%',
    econom: 5000,
    size: '48/50  52/54  56/58  60/62',
    categoryId: 3,
    image: 'https://intertop.kz/upload/iblock/acc/acc3d720d0e6dd812d1de316d40381bd.jpg'
  },
  {
    id: 14,
    title: 'Tomm',
    material: 'Хлопок - 100%',
    description: 'Рубашка от премиум-бренда выполнена из мягкого хлопка. Модель прямого кроя.',
    price: 5000,
    oldprice: 10000,
    sale: '50%',
    econom: 5000,
    size: '48/50  52/54  56/58  60/62',
    categoryId: 3,
    image: 'https://intertop.kz/upload/iblock/a27/a27e16a00563958f05e237416bebbd6a.png'
  },
  {
    id: 15,
    title: 'Tomm',
    material: 'Хлопок - 100%',
    description: 'Джинсы от премиум-бренда выполнена из джинсы. Модель прямого кроя.',
    price: 5000,
    oldprice: 10000,
    sale: '50%',
    econom: 5000,
    size: '48/50  52/54  56/58  60/62',
    categoryId: 4,
    image: 'https://intertop.kz/upload/iblock/f77/f77f1b550e7b3d9121a962c846f0c836.jpg'
  },
  {
    id: 16,
    title: 'Tomm',
    material: 'Хлопок - 100%',
    description: 'Джинсы от премиум-бренда. Модель прямого кроя.',
    price: 5000,
    oldprice: 10000,
    sale: '50%',
    econom: 5000,
    size: '48/50  52/54  56/58  60/62',
    categoryId: 4,
    image: 'https://intertop.kz/upload/iblock/32d/32dfca2476a5e15bef38b02ed543a9e3.jpg'
  },
  {
    id: 17,
    title: 'Tomm',
    material: 'Хлопок - 100%',
    description: 'Джинсы от премиум-бренда. Модель прямого кроя.',
    price: 5000,
    oldprice: 10000,
    sale: '50%',
    econom: 5000,
    size: '48/50  52/54  56/58  60/62',
    categoryId: 4,
    image: 'https://intertop.kz/upload/iblock/663/6637cf49cf3f1902695be191a56865e8.jpg'
  },
];
