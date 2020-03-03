export interface Product {
  name:string,
  image:ImageBitmap,
  price:number,
  description:string,
  site:string,
  categoryId:number;
}

export const products = [
  {
    image: "../assets/images/enduro.jpg",
    name: 'XA ENDURO',
    price: 21596.80,
    categoryId:1,
    description: 'Время сойти с нахоженной тропы. Обувь XA ENDURO плотно прилегает к ноге и стабилизирует ее на самом трудном горном склоне. Защищает от попадания грязи. Кому нужны тропы? Перед вами открыты все горы мира — бегите с удовольствием.',
    rating:4.9,
    site:"https://tmall.ru/item/Running-Shoes-SALOMON-LC1549/10000031087902.html?algo_pvid=8562664c-09ef-46d2-a5fb-626dd0f64eb9?spm=a2g0r.search0103.3.134.59213d8eZG1YnJ&algo_expid=8562664c-09ef-46d2-a5fb-626dd0f64eb9-19&priceBeautifyAB=0"
  },
  {
    image: "../assets/images/barfit2.webp",
    name: 'Скамья для жима лежа',
    price: 25000.80,
    categoryId:1,
    description: 'Бренд:Barfits Номер модели:m44 Вес, кг:20-25 кг Color:BlackComplementary color:Red Maximum load:350kg',
    rating:4.9,
    site:"https://tmall.ru/item/Bench-for-bench-press-lying-Barfits-load-up-350-black-and-red/4000112485602.html?algo_pvid=9339ab5c-6340-418a-aeb2-f6d7aa28e955?spm=a2g0r.search0103.3.1"
  },
  {
    image:"../assets/images/pumaSf.jpg",
    name:'Puma SF Thunder',
    price:11990,
    categoryId:1,
    description:'Бренд:Пума   Пол:MEN   Название отдела:Для взрослых   Тип спортивной обуви:Спортивная беговая обувь',
    rating:4.9,
    site:"https://tmall.ru/item/Men-S-running-shoes-Puma-SF-Thunder-33986901/4000184330837.html?algo_pvid=8562664c-09ef-46d2-a5fb-626dd0f64eb9?spm=a2g0r.search0103.3.141.59213d8eZG1YnJ&algo_expid=8562664c-09ef-46d2-a5fb-626dd0f64eb9-20&priceBeautifyAB=0"
  },
  {
    image:"../assets/images/bar.webp",
    name:'highlets Absolute Champion',
    price:15000,
    categoryId:1,
    description:'XINGBAO Творческий MOC Techniks серии автомобилей строительные блоки игрушка Модель Кирпичи совместимые Legoings Technic спортивный автомобиль набор для подарка',
    rating:4.8,
    site:"https://tmall.ru/item/Stops-parallel-bars-for-push-ups-highlets-Absolute-Champion/32950505412.html?algo_pvid=3c635697-bde4-450b-be12-2ff4333ce69c?spm=a2g0r.search0104.3.1.7615401fsZTk7W&algo_expid=3c635697-bde4-450b-be12-2ff4333ce69c-0&priceBeautifyAB=0"
  },
  {
    image:"../assets/images/barfir.webp",
    name:'Barfits',
    price:15000,
    categoryId:1,
    description:'Бренд:Пума   Пол:MEN   Название отдела:Для взрослых   Тип спортивной обуви:Спортивная беговая обувь',
    rating:4.9,
    site:"https://tmall.ru/item/Horizontal-Bar-3-in-1-wall-bars-Press-Premium-Black/4000097461640.html?algo_pvid=a4bb4f0a-0790-4ad6-930b-cc13a7756f6b?spm=a2g0r.search0104.3.89.5f231a6dlbC9SJ&algo_expid=a4bb4f0a-0790-4ad6-930b-cc13a7756f6b-11&priceBeautifyAB=0"
  },
  {
    image:"../assets/images/vatrushka.webp",
    name:'Forward',
    price:8000,
    categoryId:1,
    description:'Надувные санки Ватрушка "Цветная абстракция" - это легкое и надежное  приспособление для зимних детских развлечений. Санки представляет собой оболочку из ткани ПВХ, которая устойчива к истиранию и обеспечивает отличное скольжение по снегу. По кругу санки окантованы силовой стропой, которая используется в рюкзаках.  Накачивать следут до равномерного распределения чехла «Ватрушки» по камере с легким «натягом».',
    rating:4.7,
    site:"https://tmall.ru/item/Sled-inflatable-Cheesecake-Print-Color-Abstraction-80-cm-8018/4000230500420.html?algo_pvid=b0597487-c683-490e-aab1-b024e819bc9e?spm=a2g0r.search0104.3.1.19016a228UmJg0&algo_expid=b0597487-c683-490e-aab1-b024e819bc9e-0&priceBeautifyAB=0"
  },
  {
    image:"../assets/images/skis100.jpg",
    name:'SKIS 100 WEDZE',
    price:1500,
    categoryId:1,
    description:'Бренд:WED’ZE Вид спорта:Skiing  Размер:Единый Цвет:Черный',
    rating:4.9,
    site:"https://tmall.ru/item/CASE-FOR-SKI-SKIS-100-WEDZE-Decathlon/10000009657608.html?algo_pvid=dd73ba0a-9523-43e1-bdf3-b63e1434fec6?spm=a2g0r.search0103.3.347.1ad05935VBKORm&algo_expid=dd73ba0a-9523-43e1-bdf3-b63e1434fec6-43&priceBeautifyAB=0"
  },
  {
    image:"../assets/images/umidiguPhone.webp",
    name:'UMIDIGI A5 PRO',
    price: 30000,
    categoryId:2,
    description:'Android 9,0, Восьмиядерный, 6,3 дюйма, FHD +, 16 МП, 4150 мАч, 4 Гб RAM, 4G',
    rating:4.9,
    site:"https://aliexpress.ru/item/33006725265.html?spm=a2g0o.productlist.0.0.508c143avccY1t&algo_pvid=a47ac4d8-3c8b-46d9-806b-3951458c1f5e&algo_expid=a47ac4d8-3c8b-46d9-806b-3951458c1f5e-0&btsid=0ab50f0815827826271861610ee720&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_"
  },
  {
    image: "../assets/images/Lenovo.webp",
    name: 'Lenovo Z5S ',
    price: 40000,
    categoryId:2,
    description: '6 ГБ 64 Гб 128 ГБ с подарком 6,3-дюймовый смартфон Z5 s с тройной задней камерой Snapdragon 710 Android P Global ROM',
    rating:4.8,
    site:"https://aliexpress.ru/item/4000277247529.html?spm=a2g0o.productlist.0.0.508c143avccY1t&algo_pvid=a47ac4d8-3c8b-46d9-806b-3951458c1f5e&algo_expid=a47ac4d8-3c8b-46d9-806b-3951458c1f5e-2&btsid=0ab50f0815827826271861610ee720&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_"
  },
  {
    image: "../assets/images/stekloGal.webp",
    categoryId:2,
    name: 'защитное стекло SM-A515F',
    price: 500,
    description: '2 в 1 9D стекло для камеры samsung Galaxy A51 закаленное стекло задняя камера протектор на Samsun A 51 6,5 ',
    rating:4.9,
    site:"https://aliexpress.ru/item/4000548279101.html?spm=a2g0o.productlist.0.0.69a91402w1sMUn&algo_pvid=79e91078-a75e-4084-9d62-e77c83de1dbc&algo_expid=79e91078-a75e-4084-9d62-e77c83de1dbc-0&btsid=0be3743615827824876261572eb6f9&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_"
  },
  {
    image: "../assets/images/powerApp.webp",
    name: 'NOHON литиевая батарея для Appleь',
    price: 12000,
    categoryId:2,
    description: 'iPhone 6S 6 7 8 Plus 5S 5 X SE Xr Xs Max 6Plus 7Plus батарея сменная аккумулятор для iPhone6 iPhone7',
    rating:4.8,
    site:"https://aliexpress.ru/item/32809618790.html?spm=a2g0o.productlist.0.0.69a91402w1sMUn&algo_pvid=79e91078-a75e-4084-9d62-e77c83de1dbc&algo_expid=79e91078-a75e-4084-9d62-e77c83de1dbc-5&btsid=0be3743615827824876261572eb6f9&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_"
  },
  {
    image: "../assets/images/akum.webp",
    name: 'Литий-ионный аккумулятор',
    price: 500,
    categoryId:3,
    description: 'зарядное устройство PCB BMS плата защиты цепи балансир для бурового мотора Lipo ячеечный модуль',
    rating:4.8,
    site:"https://aliexpress.ru/item/4000648527495.html?spm0"
  },
  {
    image: "../assets/images/audio.webp",
    name: 'Цифровой аудио стерео усилитель',
    price: 500,
    categoryId:3,
    description: '2X15 Вт Цифровой аудио стерео усилитель модуль Плата TPA3110 Класс D усилитель мощности стерео динамик усилитель',
    rating:4.8,
    site:"https://aliexpress.ru/item/4000648527495.html?spm0"
  },
  {
    image: "../assets/images/microUSB.webp",
    name: 'Micro USB',
    price: 150,
    categoryId:3,
    description: 'Магнитное зарядное устройство Micro USB кабель штекер Круглый Магнитный кабель штекер провод для быстрого заряда Магнит usb Тип C кабель штекер бесплатно',
    rating:4.8,
    site:"https://aliexpress.ru/item/4000634865136.html?spm=a2g0o.productlist.0.0.742b59a3IpIt26&algo_pvid=841175f5-ad0c-4b33-ba19-475bff279318&algo_expid=841175f5-ad0c-4b33-ba19-475bff279318-0&btsid=0be3764515827846373247470e4d93&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_"
  },
  {
    image: "../assets/images/gamepad.webp",
    name: 'PS2 контроллер',
    price: 4500,
    categoryId:3,
    description: 'Проводной игровой контроллер для PS2 контроллер для Sony Playstation 2 Джойстик Геймпад для Play Station 2 сменный джойстик 624 #2',
    rating:4.7,
    site:"https://aliexpress.ru/item/33047322087.html?spm=a2g0o.productlist.0.0.742b59a3IpIt26&algo_pvid=841175f5-ad0c-4b33-ba19-475bff279318&algo_expid=841175f5-ad0c-4b33-ba19-475bff279318-1&btsid=0be3764515827846373247470e4d93&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_"
  },
  {
    image: "../assets/images/fwatch.webp",
    name: 'Relogio Feminin',
    price: 750,
    categoryId:4,
    description: 'Квадратные роскошные женские часы с бриллиантами, 2019 кожаные женские часы, водонепроницаемые женские кварцевые наручные часы, Relogio Feminino Reloj Mujer',
    rating:4.7,
    site:"https://aliexpress.ru/item/4000261421274.html?spm=a2g0o.productlist.0.0.40e532bf9Cg9Vl&algo_pvid=b11769d4-17ef-4325-90ae-19752ce33142&algo_expid=b11769d4-17ef-4325-90ae-19752ce33142-0&btsid=0ab50f4915827860865653861e8d8e&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_"
  },
  {
    image: "../assets/images/browatch.webp",
    name: 'Apple Watch',
    price: 1603,
    categoryId:4,
    description: 'Коричневый кожаный ремешок для Apple Watch 4 3 2 1 38 мм 40 мм, мужской кожаный ремешок для iwatch 5 44 мм 42 мм браслет',
    rating:4.7,
    site:"https://aliexpress.ru/item/4000216469479.html?spm=a2g0o.productlist.0.0.40e532bf9Cg9Vl&algo_pvid=b11769d4-17ef-4325-90ae-19752ce33142&algo_expid=b11769d4-17ef-4325-90ae-19752ce33142-10&btsid=0ab50f4915827860865653861e8d8e&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_"
  },
  {
    image: "../assets/images/fngeen.webp",
    name: 'Fengeen',
    price: 4020,
    categoryId:4,
    description: '2020 Последняя Мода люксовый бренд Fengeen нержавеющая сталь с подсветкой Бизнес повседневные Календарь Водонепроницаемые взрывобезопасные мужские часы',
    rating:4.7,
    site:"https://aliexpress.ru/item/4000637729768.html?spm=a2g0o.productlist.0.0.40e532bf9Cg9Vl&s=p&algo_pvid=b11769d4-17ef-4325-90ae-19752ce33142&algo_expid=b11769d4-17ef-4325-90ae-19752ce33142-6&btsid=0ab50f4915827860865653861e8d8e&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_"
  },
  {
    image: "../assets/images/modwatch.webp",
    name: 'Relogio Feminino',
    price: 760,
    categoryId:4,
    description: 'Женские модные часы Лидер продаж дешевые звездное небо женские часы-браслет повседневные кожаные кварцевые наручные часы Часы Relogio Feminino',
    rating:2.2,
    site:"https://aliexpress.ru/item/4000140818874.html?spm=a2g0o.productlist.0.0.40e532bf9Cg9Vl&algo_pvid=b11769d4-17ef-4325-90ae-19752ce33142&algo_expid=b11769d4-17ef-4325-90ae-19752ce33142-2&btsid=0ab50f4915827860865653861e8d8e&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_"
  },
  
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/