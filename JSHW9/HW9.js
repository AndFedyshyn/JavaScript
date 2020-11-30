// Треба реалізувати свій розпорядок дня.
// Колбеками, промісами та асинк авейт.
//
// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.

// Виконання за допомогою callback
const myRing = cb => {
    console.log("Задзвонив будильник!")
    setTimeout(() => {
        cb(null, 'Я прокинувся і відклав його на 5хв.');
    }, 2000);
}
function myRing2(ringing,cb) {
    setTimeout(() => {
        if (!ringing) {
            cb('Пішло все...');
            return;
        }
        cb(null, 'Знову задзвонив будильник!');
    }, 3000);
}
function wakeMeUp(wakeup,cb) {
    setTimeout(() => {
        if (!wakeup) {
            cb('Пішло все...');
            return ;
        }
        cb(null, 'Блін.Я прокинувся.');
    }, 2500);
}
function pisPis(wc,cb){
    setTimeout(()=>{
        if (!wc){
            cb('Пішов спати.');
            return;
        }
        cb(null, 'Пішов в туалет.');
    },2000);
}
function brushMyTeeth(cb){
    setTimeout(()=>{
        cb(null,'Почистив зуби.');
    }, 2000);
}
function gettingDressed(cb){
    setTimeout(()=>{
        cb(null,'Пішов вдягнутись.');
    }, 2500);
}
function boilWater(cb){
    setTimeout(()=>{
        cb(null,'Наставив чайник.');
    }, 2000);
}
function makingCoffee(cb){
    setTimeout(()=>{
        cb(null,'Зробив каву.');
    }, 3000);
}
function end(cb){
    setTimeout(()=>{
        cb(null,'Поснідав.');
    }, 5000);
}

myRing((err, data) => {
    console.log(data);
    myRing2(data,(err, data) =>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
        wakeMeUp(data,(err, data) =>{
            if(err){
                console.log(err);
                return;
            }
            console.log(data);
            pisPis(data,(err, data) =>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(data);
                brushMyTeeth((err, data) =>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    console.log(data);
                    gettingDressed((err, data) =>{
                        if(err){
                            console.log(err);
                            return;
                        }
                        console.log(data);
                        boilWater((err, data) =>{
                            if(err){
                                console.log(err);
                                return;
                            }
                            console.log(data);
                            makingCoffee( (err, data) => {
                                console.log(data);
                                end( (err, data) => {
                                    console.log(data);
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

// Виконання за допомогою promise

// const morning = ms =>{
//     return new Promise(resolve => {
//         setTimeout(() =>resolve(),ms)
//     })
// }
// morning(2000).then(()=> console.log('Я прокинувся і відклав його на 5хв.'))
// morning(3000).then(()=> console.log('Знову задзвонив будильник!'))
// morning(6000).then(()=> console.log('Пішов в туалет...'))
// morning(16000).then(()=> console.log('Поснідав!'))
// morning(8000).then(()=> console.log('Почистив зуби'))
// morning(12000).then(()=> console.log('Наставив чайник'))
// morning(4000).then(()=> console.log('Блін.Я прокинувся.'))
// morning(14000).then(()=> console.log('Зробив каву'))
// morning(1000).then(()=> console.log('Задзвонив будильник!'))
// morning(10000).then(()=> console.log('Пішов вдягнутись.'))

// Виконання за допомогою async await

// function myRing (ringing) {
//     return new Promise((resolve,reject) => {
//         console.log('Задзвонив будильник!');
//         setTimeout(() => {
//             if (!ringing) {
//                 reject('Пішло все...');
//             }
//             resolve('Я прокинувся і відклав його на 5хв.');
//         }, 1000);
//     });
// };
// function myRing2(ringing2){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!ringing2) {
//                 reject('Пішло все...');
//             }
//             resolve('Знову задзвонив будильник!');
//         }, 2000);
//     });
// };
// function wakeMeUp(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Блін.Я прокинувся.');
//         }, 1500);
//     });
// };
// function pisPis(){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Пішов в туалет.');
//         }, 1500);
//     });
// };
// function brushMyTeeth(){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Почистив зуби.');
//         }, 2000);
//     });
// };
// function gettingDressed(){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Пішов вдягнутись.');
//         }, 2000);
//     });
// };
// function boilWater (boil){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (boil) {
//                 reject('Чайник згорів,все згоріло...');
//             }
//             resolve('Наставив чайник.');
//         }, 3000);
//     });
// };
// function makingCoffee (coffee){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (coffee < 1) {
//                 reject('Нема кави 000%');
//             }
//             resolve('Зробив каву.');
//         }, 1500);
//     });
// };
// function end(){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Поснідав.');
//         }, 5000);
//     });
// };
//
// async function myMorning(){
//     try {
//         const ismyRing = await myRing(true);
//         console.log(ismyRing);
//         const ismyRing2 = await myRing2(true);
//         console.log(ismyRing2);
//         const iswakeMeUp = await wakeMeUp();
//         console.log(iswakeMeUp);
//         const ispisPis = await pisPis();
//         console.log(ispisPis);
//         const isbrushMyTeeth = await brushMyTeeth();
//         console.log(isbrushMyTeeth);
//         const isgettingDressed = await gettingDressed();
//         console.log(isgettingDressed);
//         const isboilWater = await boilWater(false);
//         console.log(isboilWater);
//         const ismakingCoffee = await makingCoffee(1000);
//         console.log(ismakingCoffee);
//         const imhappy = await end();
//         console.log(imhappy);
//     } catch (err){
//         console.log(err);
//     }
// }
// myMorning();