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