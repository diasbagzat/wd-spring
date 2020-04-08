export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    size: string;
    categoryId:number;
    image: string;
}

export const products = [
    {
        id: 1,
        name: 'Adidas',
        description: "LOL",
        price: 1000,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/adidas_kurtka.webp"   
    },
    {
        id: 2,
        name: 'Fila',
        description: "LOL",
        price: 2000,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/fila_kurtka.webp" 
    },
    {
        id: 3,
        name: 'Asics',
        description: "LOL",
        price: 3000,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/asics_kurtka.webp" 
    }
    ,
    {
        id: 4,
        name: 'Oodji',
        description: "LOL",
        price: 4000,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/oodji_kurtka.webp" 
    },
    {
        id: 5,
        name: 'Bikkemberg',
        description: "Куртка от премиум-бренда выполнена из мягкой ягнячьей кожи. Модель прямого кроя. Особенности: воротник-стойка, застежка на молнию, два боковых кармана и один карман внутри, трикотажные манжеты и низ.",
        price: 54000,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/bikkemberg_kurtka.webp" 
    },
    {
        id: 6,
        name: 'Bikkemberg',
        description: "Куртка от премиум-бренда выполнена из мягкой ягнячьей кожи. Модель прямого кроя. Особенности: воротник-стойка, застежка на молнию, два боковых кармана и один карман внутри, трикотажные манжеты и низ.",
        price: 54000,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/bikkemberg_kurtka.webp" 
    },
    {
        id: 7,
        name: 'Bikkemberg',
        description: "Куртка от премиум-бренда выполнена из мягкой ягнячьей кожи. Модель прямого кроя. Особенности: воротник-стойка, застежка на молнию, два боковых кармана и один карман внутри, трикотажные манжеты и низ.",
        price: 54000,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/bikkemberg_kurtka.webp" 
    },
    {
        id: 8,
        name: 'Bikkemberg',
        description: "Куртка от премиум-бренда выполнена из мягкой ягнячьей кожи. Модель прямого кроя. Особенности: воротник-стойка, застежка на молнию, два боковых кармана и один карман внутри, трикотажные манжеты и низ.",
        price: 54000,
        size: "48/50 52/54  56/58  60/62",
        categoryId: 1,
        image: "./assets/bikkemberg_kurtka.webp" 
    }
];