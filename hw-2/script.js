// Task 1.1

let trashArr = [
    'string', 12, 99, false, true, 'maybe))', 'seven', 8, -9, 'ten'
];

console.log(trashArr[0]);
console.log(trashArr[1]);
console.log(trashArr[2]);
console.log(trashArr[3]);
console.log(trashArr[4]);
console.log(trashArr[5]);
console.log(trashArr[6]);
console.log(trashArr[7]);
console.log(trashArr[8]);
console.log(trashArr[9]);

// Task 1.2

const philosopherStone = {
    title: 'Гаррі Поттер і філософський камінь',
    pageCount: 248,
    genre: 'Казки'
};

const secretChamber = {
    title: 'Гаррі Поттер і таємна кімната',
    pageCount: 272,
    genre: 'Казкт'
};

const halfBloodPrince = {
    title: 'Гаррі Поттер і напівкровний Принц',
    pageCount: 576,
    genre: 'Казки'
};

//Task 1.3

const book1 = {
    title: 'book1',
    pageCount: 325,
    genre: 'action',
    authors: [
        {
            name: 'author1',
            age: 33
        },
        {
            name: 'author2',
            age: 44
        }
    ]
}
const book2 = {
    title: 'book2',
    pageCount: 123,
    genre: 'fantasy',
    authors: [
        {
            name: 'author3',
            age: 85
        },
        {
            name: 'author4',
            age: 40
        }
    ]
}
const book3 = {
    title: 'book3',
    pageCount: 444,
    genre: 'tales',
    authors: [
        {
            name: 'author5',
            age: 65
        },
        {
            name: 'author6',
            age: 56
        }
    ]
}

//Task 1.4

const users = [
    {name: 'anya', username: 'AnYa', password: 'Aa13Nya'},
    {name: 'kolya', username: 'kalyan', password: 'qwerty'},
    {name: 'sam', username: 'uncleSam', password: 'usaGreatAgain'},
    {name: 'david', username: 'dav1d', password: 'zxcvbn'},
    {name: 'vasya', username: 'pupkins', password: 'iAmVasylyi1337'},
    {name: 'igor', username: 'IGOR', password: 'erfquake'},
    {name: 'john', username: 'genericName', password: 'genericPassword'},
    {name: 'abby', username: 'littleStar', password: '12a23b345'},
    {name: 'lisa', username: 'pes-da-lis', password: '69696969'},
    {name: 'tom', username: 'jerry', password: 'loveMilkAndCheese'}
]

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);
console.log(users[6]);
console.log(users[7]);
console.log(users[8]);
console.log(users[9]);


// Task 2.1

let x = 0;
// x = 1;
// x = -3;

if (x !== 0) {
    console.log(true)
} else {
    console.log(false)
}

//Task 2.2

let time = 15;


if (0 <= time && time <= 14) {
    console.log('First quarter');
}
else if (15 <= time && time <= 29) {
    console.log('Second quarter');
}
else if (30 <= time && time <= 44) {
    console.log('Third quarter')
}
else if (45 <= time && time <= 59){
    console.log('Fourth quarter')
}

//Task 2.3

let day = 13;

if (day <= 10) {
    console.log('First dacade of the month')
}   else if (day > 10 && day <= 20) {
    console.log('Second dacade of the month')
}   else if (day > 20 && day <= 31) {
    console.log('Third dacade of the month')
}

//Task 2.4

let toDoDay = +prompt('Введіть номер дня тижня');

switch (toDoDay) {
    case 1:
        console.log('here is what tou are doing on the Monday');
        break;
    case 2:
        console.log('here is what tou are doing on the Tuesday');
        break;
    case 3:
        console.log('here is what tou are doing on the Wednesday');
        break;
    case 4:
        console.log('here is what tou are doing on the Thursday');
        break;
    case 5:
        console.log('here is what tou are doing on the Friday');
        break;
    case 6:
        console.log('here is what tou are doing on the Saturday');
        break;
    case 7:
        console.log('here is what tou are doing on the Sunday');
        break;
    default:
        console.log('Error')
}

//Task 2.5

let firstNum = +prompt('Введіть перше число для порівняння');
let secondNum = +prompt('Введіть друге число для порівняння');

if (firstNum > secondNum) {
    console.log(`${firstNum} - це число більше`);
} else if (firstNum < secondNum) {
    console.log(`${secondNum} - це число більше`);
} else {
    console.log('Числа рівні')
}

//Task 2.6

let y = null;

if (y === '' || y === null || y === undefined || isNaN(y) || y === 0) {
    y = 'default';
}

// Task 2.7

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super')
}

// Or just cycle through the arr

for (const course of coursesAndDurationArray) {
    if (course.monthDuration > 5){
        console.log('Super')
    }
}
