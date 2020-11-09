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
const tagA = new tag('<a>', ' устанавливает ссылку или якорь', 'href',
    'Задает адрес документа, на который следует перейти.', 'name',
    'Устанавливает имя якоря внутри документа.');

const tagDiv = new tag('div','является блочным элементом','align',
    'Задает выравнивание содержимого тега <div.','title',
    'Добавляет всплывающую подсказку к содержимому.');

const tagH1 = new tag('<h1>','Заголовок першого рівня','<h2>',
    'Заголовок другого рівня','align',
    'Определяет выравнивание заголовка.');

const tagSpan = new tag('<span>','Предназначен для определения строчных элементов документа.',
    'class','Определяет имя класса, которое позволяет связать тег со стилевым оформлением',
    'id','Указывает имя стилевого идентификатора.');

const tagInput = new tag('<input>','предназначен для создания текстовых полей,' +
    'различных кнопок, переключателей и флажков.',
    'accept','Устанавливает фильтр на типы файлов, которые вы можете отправить' +
    ' через поле загрузки файлов',
    'alt','Альтернативный текст для кнопки с изображением.');

const tagForm = new tag('<form>','Тег устанавливает форму на веб-странице.',
    'target','Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.',
    'novalidate','Отменяет встроенную проверку данных формы на корректность ввода.');

const tagOption = new tag('<option>','определяет отдельные пункты списка, создаваемого с помощью контейнера',
    '<disabled>','Заблокировать для доступа элемент списка.',
    'selected','Заранее устанавливает определенный пункт списка выделенным.');

const tagSelect = new tag('select','позволяет создать элемент интерфейса в виде раскрывающегося списка,' +
    ' а также список с одним или множественным выбором.',
    'accesskey','Позволяет перейти к списку с помощью некоторого сочетания клавиш.',
    'size','Количество отображаемых строк списка.')

// ==============================================
//     -  Створити класс  для об'єкту який описує теги
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

class Tag {
    constructor(titleOfTag, action, titleOfAttr1, ActionOfAttr1,
                titleOfAttr2, ActionOfAttr2) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attributes = [{titleOfAttr1, ActionOfAttr1}, {titleOfAttr2, ActionOfAttr2}];
        console.log(this);
    }
}

const tagA1 = new Tag('<a>', ' устанавливает ссылку или якорь', 'href',
    'Задает адрес документа, на который следует перейти.', 'name',
    'Устанавливает имя якоря внутри документа.');

const tagDiv1 = new Tag('div','является блочным элементом','align',
    'Задает выравнивание содержимого тега <div.','title',
    'Добавляет всплывающую подсказку к содержимому.');

const TagH1 = new Tag('<h1>','Заголовок першого рівня','<h2>',
    'Заголовок другого рівня','align',
    'Определяет выравнивание заголовка.');

const tagSpan1 = new Tag('<span>','Предназначен для определения строчных элементов документа.',
    'class','Определяет имя класса, которое позволяет связать тег со стилевым оформлением',
    'id','Указывает имя стилевого идентификатора.');

const tagInput1 = new Tag('<input>','предназначен для создания текстовых полей,' +
    'различных кнопок, переключателей и флажков.',
    'accept','Устанавливает фильтр на типы файлов, которые вы можете отправить' +
    ' через поле загрузки файлов',
    'alt','Альтернативный текст для кнопки с изображением.');

const tagForm1 = new Tag('<form>','Тег устанавливает форму на веб-странице.',
    'target','Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.',
    'novalidate','Отменяет встроенную проверку данных формы на корректность ввода.');

const tagOption1 = new Tag('<option>','определяет отдельные пункты списка, создаваемого с помощью контейнера',
    '<disabled>','Заблокировать для доступа элемент списка.',
    'selected','Заранее устанавливает определенный пункт списка выделенным.');

const tagSelect1 = new Tag('select','позволяет создать элемент интерфейса в виде раскрывающегося списка,' +
    ' а также список с одним или множественным выбором.',
    'accesskey','Позволяет перейти к списку с помощью некоторого сочетания клавиш.',
    'size','Количество отображаемых строк списка.')

// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//     додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


const car = {
    model: 'BMW X6',
    country: 'Germany',
    year: 2018,
    max_speed: 250,
    engine: '3.0L I6 24V GDI DOHC Turbo',

    drive: function(){console.log(`їдемо зі швидкістю ${this.max_speed} км на годину`)
    },
    info: function(){console.log(`Модель: ${this.model}, Країна виробник:${this.country}, 
    Рiк випуску:${this.year}, Максимальна швидкість:${this.max_speed}, Обєм двигуна :${this.engine}`)
    },

    increaseMaxSpeed: function(newSpeed){
        this.max_speed+=newSpeed;
        console.log(`${this.max_speed}`)
    },
    changeYear: function(newValue){
        this.year=newValue;
        console.log(`${this.year}`)
    },
    addDriver: function (driver){
        this.driver = driver
        console.log(`${this.driver.name}`)
    },
}

car.drive()
car.info()
car.increaseMaxSpeed(10)
car.changeYear(2020)
car.addDriver ({name: 'Andrii'});
console.log(car)


// ==============================================
//    - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
//     рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


function Cars( model, country, year, max_speed, engine ){
    this.model = model;
    this.country = country;
    this.year = year;
    this.max_speed = max_speed;
    this.engine = engine;

    this.drive = function (){ console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)};
    this.info = function(){ console.log(`Модель: ${this.model},Країна виробник:${this.country}, 
    Рiк випуску:${this.year}, Максимальна швидкість:${this.max_speed}, Обєм двигуна :${this.engine}`)};

    this.increaseMaxSpeed = function(newSpeed){
        this.max_speed=newSpeed;
        console.log(`${this.max_speed}`)
    }
    this.changeYear = function(newValue){
        this.year=newValue;
        console.log(`${this.year}`)
    }
    this.addDriver = function (driver){this.driver = driver
        console.log(`${this.driver}`)
    }
}

let lambo = new Cars ( 'Lamborghini', 'Urus','2020','305','V8 4.0 FSI');

lambo.drive()
lambo.info()
lambo.increaseMaxSpeed('Max city speed: 50')
lambo.changeYear('License to: 2022')
lambo.addDriver('Driver: Andrii')
