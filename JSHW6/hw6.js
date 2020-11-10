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

