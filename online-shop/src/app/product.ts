export interface Product {
    id: number;
    title: string;
    description: string;
    shortdesc: string;
    material: string;
    price: number;
    oldprice: number;
    sale: string;
    econom: number;
    size: string;
    categoryId: number;
    image: string;
    image2: string;
}

export const products = [
    {
        id: 1,
        title: 'Adidas',
        shortdesc:"Куртка утепленная PARKA PADDE",
        material:"Нейлон - 100%",
        description: "Утепленная куртка от спортивного бренда выполнена из плотного текстиля. Модель прямого силуэта. Детали: фиксированный капюшон, воротник-стойка, застежка на молнии с ветрозащитной планкой на липучках; два втачных кармана по бокам, два нагрудных кармана на молнии, внутренний карман на липучке; искусственный утеплитель.",
        price: 63495,
        oldprice: 70550,
        sale: "23%",
        econom: 7055,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/adidas.png",
        image2: "./assets/adidas2.png"
    },
    {
        id: 2,
        title: 'Fila',
        description: "LOL",
        price: 2000,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/fila_kurtka.webp"
    },
    {
        id: 3,
        title: 'Asics',
        description: "LOL",
        price: 3000,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/asics_kurtka.webp"
    }
    ,
    {
        id: 4,
        title: 'Oodji',
        description: "LOL",
        price: 4000,
        oldprice: 7000,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/oodji_kurtka.webp"
    },
    {
        id: 5,
        title: 'Bikkemberg',
        description: "Куртка от премиум-бренда выполнена из мягкой ягнячьей кожи. Модель прямого кроя. Особенности: воротник-стойка, застежка на молнию, два боковых кармана и один карман внутри, трикотажные манжеты и низ.",
        price: 54000,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/bikkemberg_kurtka.webp"
    },
    {
        id: 6,
        title: 'Bikkemberg',
        description: "Куртка от премиум-бренда выполнена из мягкой ягнячьей кожи. Модель прямого кроя. Особенности: воротник-стойка, застежка на молнию, два боковых кармана и один карман внутри, трикотажные манжеты и низ.",
        price: 54000,
        oldprice: 80000,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/bikkemberg_kurtka.webp"
    },
    {
        id: 7,
        title: 'Bikkemberg',
        description: "Куртка от премиум-бренда выполнена из мягкой ягнячьей кожи. Модель прямого кроя. Особенности: воротник-стойка, застежка на молнию, два боковых кармана и один карман внутри, трикотажные манжеты и низ.",
        price: 54000,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/bikkemberg_kurtka.webp"
    },
    {
        id: 8,
        title: 'Bikkemberg',
        description: "Куртка от премиум-бренда выполнена из мягкой ягнячьей кожи. Модель прямого кроя. Особенности: воротник-стойка, застежка на молнию, два боковых кармана и один карман внутри, трикотажные манжеты и низ.",
        price: 54000,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/bikkemberg_kurtka.webp"
    }
];
