// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.


// let element = document.querySelector(`#text`)
// element.onclick = () => {
//     element.style.display = 'none'
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// btnNoth.onclick = (event) =>{
//     // console.log(event.target)
//     btnNoth.style.display = 'none'
// }

    // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let inputForm =document.querySelector('#age')
// let inputbtn = document.querySelector('#btn-age')
// inputbtn.onclick = () => {
//     inputForm.value >= 18 ? console.log('ok') : console.log('ne ok');
// }

// - Создайте меню, которое раскрывается/сворачивается при клике.

// let elementIdmenu = document.querySelector('#menu')
// let elementClassmenu = document.querySelector('.dropDownMenu')
//
// elementIdmenu.onclick = () => {
//     elementClassmenu.style.display = elementClassmenu.style.display === 'none' ? 'block': 'none' ;
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
    // Вывести список комментариев в документ, каждый в своем блоке.
    // Добавьте каждому комментарию по кнопке для сворачивания его body.

// let commentsArray = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// ]
//
// const content = document.getElementById('content')
//  commentsArray.forEach(item =>{
//
//      const div = document.createElement('div');
//      const h2 = document.createElement('h2');
//      const p = document.createElement('p');
//      const button = document.createElement('button');
//      button.innerText = 'Hide'
//      h2.innerText = item.title;
//      p.innerText = item.body;
//      button.onclick = () =>{
//          p.hidden ? p.hidden = false
//          :p.hidden = true
//      }
//      div.appendChild(h2);
//      div.appendChild(p);
//      div.appendChild(button);
//      content.appendChild(div);
//
//      });

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const btn = document.getElementById('btn');
// const input1 = document.getElementById('input1');
// const input2 = document.getElementById('input2');
// const input21 = document.getElementById('input21');
// const input22 = document.getElementById('input22');

// btn.onclick =  ev => {
// //     console.log(input1.value);
// //     console.log(input2.value);
// //     console.log(input21.value);
// //     console.log(input22.value);
// // }
//     console.log(document.forms.form1.input1.value);
//     console.log(document.forms.form1.input2.value);
//     console.log(document.forms.form2.input21.value);
//     console.log(document.forms.form2.input22.value);
//
// }


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати

const content = document.getElementById('btn');
function createTable(rows,cols,tag) {
    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.innerText = i +' '+j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tag.appendChild(table);

}
createTable(4,5,content)