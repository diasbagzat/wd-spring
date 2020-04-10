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

    image2:string;
    likes: number;
    dislikes: number;

}

export const PRODUCTS: Product[] = [
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

        image: "./assets/adidas.png",
        image2: "./assets/adidas2.png",
        likes: 23,
        dislikes: 1

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

        image: "./assets/fila_kurtka.webp",
        likes: 23,
        dislikes: 1

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

        image: "./assets/asics_kurtka.webp",
        likes: 23,
        dislikes: 1

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

        image: "./assets/oodji_kurtka.webp",
        likes: 23,
        dislikes: 1

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

        image: "./assets/bikkemberg_kurtka.webp",
        likes: 23,
        dislikes: 1

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

        image: "./assets/bikkemberg_kurtka.webp",
        likes: 23,
        dislikes: 1

    },
    {
        id: 7,
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
        id: 8,
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
    }
];
