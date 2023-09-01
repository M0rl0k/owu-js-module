// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length, str2.length, str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str1Up = 'HELLO WORLD';
let str2Up = 'LOREM IPSUM';
let str3Up = 'JAVASCRIPT IS COOL';

console.log(str1Up.toLowerCase(), str2Up.toLowerCase(), str3Up.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//

let str = ' dirty string   ';

console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let string = 'Ревуть воли як ясла повні';
const stringToArray = (str) => {
  return str.split(' ');
}

console.log(stringToArray(string));

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const numArr = [10,8,-7,55,987,-1011,0,1050,0];

console.log(numArr.map(num => num+''));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
const sortNums = (arr, direction) => {
  if (direction === 'ascending') {
      arr.sort((a, b) => a - b);
  }

  if (direction === 'descending') {
      arr.sort((a, b) => b - a);
  }

  return arr
}

console.log(sortNums(nums,'descending'));
console.log(sortNums(nums,'ascending'));

//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => {
    return  b.monthDuration - a.monthDuration;
}));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log(coursesAndDurationArray.map((value, index) => {
    value = {
        id: index,
        title: value.title,
        monthDuration: value.monthDuration
    }

    return value
}));


// =========================
//     описати колоду карт (від 6 до туза без джокерів)

const deck = [
    {cardSuit: 'spade', value : '6', color : 'black'},
    {cardSuit: 'spade', value : '7', color : 'black'},
    {cardSuit: 'spade', value : '8', color : 'black'},
    {cardSuit: 'spade', value : '9', color : 'black'},
    {cardSuit: 'spade', value : '10', color : 'black'},
    {cardSuit: 'spade', value : 'ace', color : 'black'},
    {cardSuit: 'spade', value : 'jack', color : 'black'},
    {cardSuit: 'spade', value : 'queen', color : 'black'},
    {cardSuit: 'spade', value : 'king', color : 'black'},
    {cardSuit: 'clubs', value : '6', color : 'black'},
    {cardSuit: 'clubs', value : '7', color : 'black'},
    {cardSuit: 'clubs', value : '8', color : 'black'},
    {cardSuit: 'clubs', value : '9', color : 'black'},
    {cardSuit: 'clubs', value : '10', color : 'black'},
    {cardSuit: 'clubs', value : 'ace', color : 'black'},
    {cardSuit: 'clubs', value : 'jack', color : 'black'},
    {cardSuit: 'clubs', value : 'queen', color : 'black'},
    {cardSuit: 'clubs', value : 'king', color : 'black'},
    {cardSuit: 'diamond', value : '6', color : 'red'},
    {cardSuit: 'diamond', value : '7', color : 'red'},
    {cardSuit: 'diamond', value : '8', color : 'red'},
    {cardSuit: 'diamond', value : '9', color : 'red'},
    {cardSuit: 'diamond', value : '10', color : 'red'},
    {cardSuit: 'diamond', value : 'ace', color : 'red'},
    {cardSuit: 'diamond', value : 'jack', color : 'red'},
    {cardSuit: 'diamond', value : 'queen', color : 'red'},
    {cardSuit: 'diamond', value : 'king', color : 'red'},
    {cardSuit: 'heart', value : '6', color : 'red'},
    {cardSuit: 'heart', value : '7', color : 'red'},
    {cardSuit: 'heart', value : '8', color : 'red'},
    {cardSuit: 'heart', value : '9', color : 'red'},
    {cardSuit: 'heart', value : '10', color : 'red'},
    {cardSuit: 'heart', value : 'jack', color : 'red'},
    {cardSuit: 'heart', value : 'queen', color : 'red'},
    {cardSuit: 'heart', value : 'ace', color : 'red'},
    {cardSuit: 'heart', value : 'king', color : 'red'},
];
// - знайти піковий туз
console.log(deck.filter(card => card.value === 'ace' && card.cardSuit === 'spade'));

// - всі шістки
console.log(deck.filter(card => card.value === '6'));

// - всі червоні карти
console.log(deck.filter(card => card.color === 'red'));

// - всі буби
console.log(deck.filter(card => card.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
console.log(deck.filter(card => card.cardSuit === 'clubs' && card.value >= '9'));

//
//
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log(deck.reduce(function (acc, card) {
    if (card.cardSuit === 'spade') {
        acc.spades.push(card)
    }
    if (card.cardSuit === 'diamond') {
        acc.diamonds.push(card)
    }
    if (card.cardSuit === 'heart') {
        acc.hearts.push(card)
    }
    if (card.cardSuit === 'clubs') {
        acc.clubs.push(card)
    }

    return acc

}, {spades: [], diamonds: [], hearts: [], clubs: []}));

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'git',
            'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter(course => course.modules.includes('sass')));

// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter(course => course.modules.includes('docker')));

