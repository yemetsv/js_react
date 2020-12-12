'use strict';

//filter()

// const names = ['Ivan', 'Nikolay', 'Roxolana', 'Alex'];

// const shortNames = names.filter((name) => {
//     return name.length < 5;
// });

// map()

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// console.groupCollapsed(result);


// let answers = ['IvAn', 'AnnA', 'Hello'];

// answers = answers.map(item => item.toLowerCase());

// console.groupCollapsed(answers);

//every  / some

// const some = [4, 'qwqwqw', 'dffdsfdfdf'];

// //console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));

//reduce
// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current);

// console.log(res);

// const arr = ['orange', 'apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum},  ${current}`);

// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);