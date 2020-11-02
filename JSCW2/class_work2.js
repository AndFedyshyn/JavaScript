console.log(88)

// 1.- Дано масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.


let array1 =['a', 'b', 'c'];

for (let i = 1; i<=3;i++){
    array1.push(i);

}
console.log(array1);

// 2.- Дано масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let arr123=[1,2,3]
let newarr=[];
for (let i = arr123.length - 1; i>=0; i--){
    newarr.push(arr123[i]);
}
console.log(newarr);

// 3.- Дано масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

let arr3=[1,2,3]
for (let i = 4; i<=6; i++){
    arr3.push(i);
}
console.log(arr3);

// 4.- Дано масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

let arr4=[1,2,3]
for (let i = 6; i>=4; i--){
    arr4.unshift(i);
}
console.log(arr4);

// 5.- Дано масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

let arr5=['js', 'css', 'jq'];
console.log(arr5.shift(1));

// 6.- Дано масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

let arr6=['js', 'css', 'jq']
let j3 = arr6.pop(1 - arr6.length);

console.log(j3);

// 7- Дано масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

const arr7= [1, 2, 3, 4, 5];
const arr45 = [arr7.slice(3)]
console.log(arr45);

// 8.- Дано масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

const arr8= [1, 2, 3, 4, 5];
const arr12 = [arr8.slice(0,2)]
console.log(arr12);

// 9.- Дано масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

const a9= [1, 2, 3, 4, 5];
const b9 = [a9.splice(1,2)]

console.log(a9);

// 10.- Дано масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

