// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.


const str = "Привіт";
const num = 123;
const flag = true;
const txt = "true";

console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(flag));
console.log(typeof(txt));

// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

// let a1;
// let a2;
// let a3;
// let a4;

//     a1 = 5 + 3;
//     a2 = 5 - 3;
//     a3 = 5 * 3;
//     a4 = 5 / 3;

// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);

// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);

//4. Напишите скрипт, который находит площадь прямоугольника высота 23см. (в числовую переменную height), шириной 10см
// (в числовую переменную width), значение площади должно хранится в числовой переменной s.

const height = 23;
const width = 10;
let s = (height * width)
console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

    let height1 = 10;
    let dC = 4;
    const pi = 3.14;
    let v = pi * Math.pow(dC/2,2) * height1;
    console.log(v);

 // 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

    let n = 3;
    let m = 4;
    let k = ( n**2 + m**2 ) ** 0.5;
    console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log.

    const str11 = 'Hello world';
    document.write(str11 + '<br/>');
    alert(str11);
    console.log(str11);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

alert('Andrii\nFedyshyn\n30\nfootball')

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

let str1115 = 'Кто'
let str2225 = 'ты'
let str3335 = 'такой?'
let concatenation = str1115 + str2225 + str3335
document.write(concatenation)

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

let str9 = '20'
let a = 5
document.write(str9 + a + '<br/>') // 205
document.write(str9 - a + '<br/>') //15
document.write(str9 * '2' + '<br/>') //err
document.write(str9 / 2 + '<br/>') //10

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?

parseInt("3.14")
parseInt("-7.875")
parseInt("435")
parseInt("Вася")

console.log(parseInt('3.14')) // 3
console.log(parseInt('-7.875')) //-7
console.log(parseInt('435')) // 435
console.log(parseInt('Вася')) // NaN

