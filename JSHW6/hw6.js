console.log(18)
// -- создать массив с 20 числами.

let array20 = [8,18,34,5,68,442,7878,12,254,24,66,178,53,888,78,22,11,7756,39,1990]

// -- при помощи метода sort и колбека  отсортировать массив.

let sort = array20.sort((a, b) => a-b);
console.log(sort);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

let sort1 = array20.sort((a, b) => b - a);
console.log(sort1);

// -- при помощи filter получить числа кратные 3

let filter3 = array20.filter ((value) => value%3===0);
console.log(filter3)

// -- при помощи filter получить числа кратные 10

let filter10 = array20.filter ((value) => value%10===0);
console.log(filter10)

// -- перебрать (проитерировать) массив при помощи foreach()

array20.forEach(console.log)

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let map = array20.map(value =>value*3)
console.log(map)

// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.

let arrayA = [ 'okten','abc','lviv','karpaty','acdc','ufc','wbo','javascript','kyiv','apple','python','hello','bye']
console.log(arrayA.sort())

// -- отсортировать его по алфавиту  в нисходящем порядке.

let arrayB = [ 'okten','abc','lviv','karpaty','acdc','ufc','wbo','javascript','kyiv','apple','python','hello','bye']
console.log(arrayB.sort().reverse())

// -- отфильтровать слова длиной менее 4х символов

let filter = arrayA.filter (value => value.length < 4)
console.log(filter)

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

console.log(arrayB.map(value => value + '!'))

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

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
    {name: 'max', age: 31, status: true}
    ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)

let sortU = users.sort((a, b) => a.age - b.age);
console.log(sortU);
let sortUs = users.sort((a, b) => b.age - a.age);
console.log(sortUs);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

let usersJSON = JSON.stringify(users)
let newUsers = JSON.parse(usersJSON)
let sortU1 = newUsers.sort((a, b) => a.name.length - b.name.length);
console.log(sortU1);


let usersJSON2 = JSON.stringify(newUsers)
let newUsers2 = JSON.parse(usersJSON2)
let sortUs2 = newUsers2.sort((a, b) => b.name.length - a.name.length);
console.log(sortUs2);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)





// - відсортувати його за індентифікатором
//
//
// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком
//


