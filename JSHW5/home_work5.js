console.log(5)

// 1.-  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function tag(titleOfTag, action, titleOfAttr1, ActionOfAttr1, titleOfAttr2, ActionOfAttr2) {

    this.titleOfTag = titleOfTag;
    this.action = action;
    this.arraysOfAtr = [{titleOfAttr1, ActionOfAttr1}, {titleOfAttr2, ActionOfAttr2}];

    console.log(this);
}
const tagA = new tag('a', ' устанавливает ссылку или якорь', 'href',
    'Задает адрес документа, на который следует перейти.', 'name',
    'Устанавливает имя якоря внутри документа.');

const tagDiv = new tag('div','является блочным элементом','align',
    'Задает выравнивание содержимого тега <div>.','title',
    'Добавляет всплывающую подсказку к содержимому.')
