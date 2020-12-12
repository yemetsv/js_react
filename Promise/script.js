'use strict';

// console.log('Запрос данных...');

// const req = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log('Подготовка...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });

  
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// });



const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// 
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});

