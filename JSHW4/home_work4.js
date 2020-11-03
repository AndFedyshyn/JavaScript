console.log(18)

// 1.- створити функцію яка виводить масив.

function conArr(arr) {
    console.log(arr);
}
conArr([878, false, 2020, true, 'function',2018,'Lviv','Kyiv','Odesa',85512 ]);

// 2.- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

function random(x) {
    let a = [];
    for (let i = 0; i < x; i++) {
        a[i] = Math.floor(Math.random() * x);
    }
    return conArr(a);
}
conArr = random(20);

// 3.- створити функцію яка приймає три числа та виводить та повертає найменьше.

function getMin(x, y, z) {
    return Math.min(x, y, z)

}
console.log(getMin(222, 777, 50));

// 4.- створити функцію яка приймає три числа та виводить та повертає найбільше.

const getMax = (x2, y2, z2) => Math.max(x2, y2, z2);

console.log(getMax(199, 1999, 19));

// 5.- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше.

function returnMinMax(numbersArray) {
    let minValue = numbersArray[0];
    let maxValue = numbersArray[0];

    for(let i=0; i<numbersArray.length; i++) {
        if(numbersArray[i] > maxValue) {
            maxValue = numbersArray[i];
        }

        if(numbersArray[i] < minValue) {
            minValue = numbersArray[i];
        }
    }

    console.log(maxValue);
    return minValue;
}

console.log(returnMinMax([1, 5, 23, 6, 7, 43, 3, 6, 7, 234]));

// 6.- створити функцію яка виводить масив.

function arrayConsole(array) {
    console.log(array);
}

arrayConsole([2020, 2021,2022,2023,2024]);

// 7.- створити функцію яка повертає найбільше число з масиву.
