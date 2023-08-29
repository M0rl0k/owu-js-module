// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangleArea = (a, b) => console.log(a*b);

rectangleArea(3, 5)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const circleArea = (r) => console.log(2*Math.PI*Math.pow(r, 2));

circleArea(10);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinderArea = (h, r) => console.log((2*Math.PI*r*h)+(2*Math.PI*Math.pow(r, 2)));

cylinderArea(5, 10)

// - створити функцію яка приймає масив та виводить кожен його елемент
const arrayLogger = (arr) => {
    for (const el of arr) {
        console.log(el)
    }
}

arrayLogger([1, 2, 3, 4, 5]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const paragraphMaker = (text) => {
    document.write(`<p>${text}</p>`)
}

paragraphMaker('lorem')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const ulMaker = (text) => {
    document.write(
        `<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>`
    )
}

ulMaker('lorem ipsum');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const customUlMaker = (text, quantity) => {
    document.write(`<ul>`)
    for (let i= 0; i < quantity; i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

customUlMaker('list item', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arrToList = (arr) => {
    document.write(`<ul>`)
    for (const el of arr) {
        document.write(`<li>${el}</li>`)
    }
    document.write(`</ul>`)
}

arrToList(['oleh', 'igor', 'vasya', 'zack']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const userCardMaker = (arrOfUsers) => {
    for (const user of arrOfUsers) {
        document.write(
            `<div class="user-card">
                <h4 class="user-name">${user.name}</h4>
                <p class="user-info">ID: ${user.id} | Name: ${user.name}</p>
            </div>`
        )
    }
}

userCardMaker([
    {name: 'vasya', id: 1, age: 11},
    {name: 'ilya', id: 2, age: 22},
    {name: 'henry', id: 3, age: 33},
]);

// - створити функцію яка повертає найменьше число з масиву
const minNumberInArray = (arr) => {
    let minNum = arr[0];

    for (const el of arr) {
        if (el < minNum) {
            minNum = el;
        }
    }

    return minNum
}

console.log(minNumberInArray([1, 3, -2, 0.3, -2.5, 100, 99]));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let sum = 0;

    for (const el of arr) {
        sum += el;
    }

    return sum
}

console.log(sum([1, 3, 5, 6, 1, 3, 5, 100, 25, 33]));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями занчення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    let swapArr = [...arr];

    swapArr[index1] = arr[index2];
    swapArr[index2] = arr[index1];

    return swapArr
}

console.log(swap([2, 3, 5, 7, 9, 11, 13, 15], 3, 5));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const el of currencyValues) {
        if (el.currency === exchangeCurrency) {
            return sumUAH/el.value
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
