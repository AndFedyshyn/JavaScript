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

//4. Дан массив:
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true},
    ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

console.log(users[7].status);
console.log(users[4].status);
console.log(users[users.length - 2].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[3].age);
console.log(users[4].age +' '+ users[4].name);
console.log(users[5].age + ' ' + users[5].status);

// 5.-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний

const content = document.getElementById('content')
console.log(content.innerText);

const rules = document.getElementById('rules')
console.log(rules.innerText);

content.innerText = 'Conor Mc Gregor'
rules.innerText = 'age 31'

content.style.backgroundColor = 'blue'
rules.style.backgroundColor = 'blue'
 const ul = document.getElementsByClassName('fc_rules')
for (const ulElement of ul) {
    ulElement.style.backgroundColor = 'yellow'
}
content.style.color = 'red'
rules.style.color = 'red'

for (const ulElement of ul) {
    ulElement.style.color = 'red'
}

let ruleses = document.getElementById('rules')
console.log(ruleses);

let fc_rules = document.getElementsByClassName('fc_rules')
for (const fcRule of fc_rules) {
    console.log(fcRule);
    fcRule.style.color = 'green'
}