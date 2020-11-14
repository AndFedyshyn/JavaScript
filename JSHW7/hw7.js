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

