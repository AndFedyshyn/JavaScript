console.log(22);

// Завдання 1

 let mas5  = [20,30,33.333,50,200];
 console.log(mas5);

// Завдання 2

let masstr  = ['kaka','bebebe','wtf','50','ok'];
console.log(masstr);

// Завдання 3

let masa3  = [20,'5555','mass','bul"ka',true];
console.log(masa3);

// Завдання 4- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись
// до конкретного індексу. Вивести в консоль.

let nema = [];
nema[0]= 555888;
nema[1]= 'false';
nema[2]= false;
nema[3]= 'papa';
nema[4]= 805;
nema[5]= 809;
console.log(nema);

// Завдання 5- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i=0; i<10; i++) {
  document.write('<div>ohshitgit</div>')
}
// Завдання 6- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i=0; i<10; i++) {
  document.write(`<div>ohshitgit ${i}</div>`)
}

// Завдання 7- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let y=0;
while (y<20) {
  document.write('<h1>LoremLoremLorem</h1>')
y++
}
// Завдання 8 -За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

y=0;
while (y<20 ){
    document.write(`<h1> ${y} Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>`)
    y++
}

// Завдання 9- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr=[11,22,33,44,555,6666,7777,8888,9999,3333];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Завдання 10- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr10=['a1','b2','c3','e4','f5','g6','j7','k8','l9','d10'];
for (let i = 0; i < arr10.length; i++) {
 console.log(arr10[i]);
}
// Завдання 11 - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let array=[false,'887',true,7777777,'88765','stringtrue',true,'stringfalse',false,9999999]
 for (let i = 0; i < array.length; i++) {
     console.log(array[i]);
 }

// Завдання 12 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи.

for (let i = 0;i < array.length; i++) {
    if (typeof array[i] == 'boolean')
        console.log(array[i])
    }
// Завдання 13 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let i=0; i<array.length; i++) {
    if (typeof array[i] == 'number')
    console.log(array[i])
}

// Завдання 14 - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи.

for (let i=0; i<array.length; i++) {
    if (typeof array[i] == 'string')
    console.log(array[i])
}
// Завдання 15- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arrr = [];
arrr[0] = 'covid';
arrr[1] = 'Lviv';
arrr[2] = 911;
arrr[3] = 'Opera';
arrr[4] = true;
arrr[5] = false;
arrr[6] = 'Bandera';
arrr[7] = 2020;
arrr[8] = 'Karpaty';
arrr[9] = 'Hoverla';

for (let i = 0; i < arrr.length-1; i++) {
    console.log(arrr[i]);
}
// Завдання 16 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i=0; i<10;i+=1){
    console.log(i), document.write(i+'<br>');
}
// Завдання 17 - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write.

for (let i=0; i<100;i+=1) {
    console.log(i), document.write(i + '<br>');
}
// Завдання 18- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i=0; i<100;i+=2) {
    console.log(i), document.write(i + '<br>');
}
// Завдання 19- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write.

for(let i=0; i<100;i+=1) {
    if (i % 2 === 0) {
        console.log(i), document.write(i + '<br>');
    }
}
// Завдання 20- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for(let i=0; i<100;i+=1) {
    if (i % 2 === 1) {
        console.log(i), document.write(i + '<br>');
    }
}

// Завдання 21 - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

///





// Додатково
// 1. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let abcArr = [ 'a', 'b', 'c'];
let allArr = [];
for (let i = 0; i < abcArr.length; i++) {
    allArr += abcArr[i];
}
console.log(allArr);

// 2. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let cccArr = [ 'a', 'b', 'c'];
let aaaArr = [];
let i=0;
while (i < cccArr.length)
{aaaArr = aaaArr+cccArr[i];i++}
console.log(aaaArr);

// 3. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let abc123 = ['a', 'b', 'c'];
let summAbc = '';
for (element of abc123) {
        summAbc += element;
}
console.log(summAbc);

