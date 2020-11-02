console.log(2020)

// 1.-- створити об'єкт (не меньше 5ти властивостей) який описує
// // - собаку
// // - людину
// // - автомобіль
// // - квартиру
// // - книгу

const dog ={
    dog_breed : 'German Shepherd',
    country : 'Germany',
    lifeSpan : 13,
    coat : 'double coat',
    color : 'Tan with black saddle, sable, solid black or bi-color',
    weight : 40,
    height : 60,
}
console.log(dog)

const human = {
    age : 30,
    height : 178,
    weight : 81,
    citizenship : 'Ukraine',
    hobby : ['sport','football','mountain tourism'],
    music : ['rock','new metal','instrumental'],
}
console.log(human)

const car = {
    brand : 'BMW',
    model : 'X6',
    year : 2020,
    color : 'black',
    kilometres : 1000,
    status : 'used',
    highlights : ['navigation System','leather Interior','excellent condition'],
}
console.log(car)

const apartment = {

    price : 50000,
    year : 2019,
    rooms : 3,
    area : 80,
    status: 'new',
    city : 'Lviv',
}
console.log(apartment)

const book = {
    name : 'Справа Василя Стуса. Збірка документів з архіву КДБ УРСР',
    written : 'Vahtang Kipiani',
    publisher: 'Vivat',
    year : 2020,
    language: 'Ukrainian',
    pages : 688,
    illustrations : 'Yes',
    format : '147x205x46'
}
console.log(book)

// 2.-- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

const arrDog = ['German Shepherd', 'collie', 'bobermann', 'stbernard', 'labrador ']
const arrPeople = ['Marko', 'Andrii', 'Tania', 'Viktoria', 'Veronika']
const arrCars = ['BMW', 'Mercedes', 'Audi', 'Jeep', 'Nisan']
console.log(arrDog);
console.log(arrPeople);
console.log(arrCars);


// 3.- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

let apartment1;
apartment1 = {

    price: 50000,
    year: 2019,
    rooms: {num1: 1, num2: 2, num: 3},
    area: 80,
    status: 'new',
    city: ['Lviv', 'old town', 'Pl. Rynok'],
};
console.log(apartment1);

const driver = {
    age : 30,
    height : 178,
    weight : 81,
    citizenship : 'Ukraine',
    hobby : {sport: 'football',fc:'Manchester United' },
    music : ['rock','new metal','instrumental'],
};
console.log(driver)

const toy = {
    colors : {color1:'red',color2:'blue',color3:'green'},
    width : 100,
    weight : '150g',
    madeIn : {country:'Ukraine',city: 'Kyiv'},
    price : ['100 dol','2800 uah','85euro'],
}
console.log(toy);

const table = {

    price: '350 dol',
    year: 2017,
    materials: {material1:'tree',material2:'plastic',material3:'metal',} ,
    status: ['New','using'],
    mass: 40,
};
console.log(table);

const bag = {

    price: [100,240,300,399,500],
    year: [2019,2020],
    materials: {material:'polyester',cotton: {fiber1:'10mm',fiber2:'13mm',fiber3:'55mm'}},
    status: ['New','using'],
    mass: [300,500,2000],

};
console.log(bag);

