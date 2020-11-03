console.log(18)

// 1.- створити функцію яка виводить масив.

function conArr(arr) {
    console.log(arr);
}
conArr([878, false, 2020, true, 'function',2018,'Lviv','Kyiv','Odesa',85512 ]);

// 2.- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

function random(x) {
    let a = [];
    for (i = 0; i < x; i++) {
        a[i] = Math.floor(Math.random() * x);
    }
    return conArr(a);
}
randomArray = random(20);

// 3.- створити функцію яка приймає три числа та виводить та повертає найменьше.

function getMin(x, y, z) {
    return Math.min(x, y, z)

}
console.log(getMin(222, 777, 50));
