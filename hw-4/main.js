// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a, b) {
    return a * b;
}
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r) {
    return 2*Math.PI*Math.pow(r, 2);
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(h, r) {
    return (2*Math.PI*r*h)+(2*Math.PI*Math.pow(r, 2))
}

// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayLogger(arr) {
    for (const el of arr) {
        console.log(el)
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphMaker(text) {
    document.write(`<p>${text}</p>`)
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulMaker(text) {
    document.write(
        `<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>`
    )
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function customUlMaker(text, quantity) {
    document.write(`<ul>`)
    for (let i= 0; i < quantity; i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrToList(arr) {
    document.write(`<ul>`)
    for (const el of arr) {
        document.write(`<li>${el}</li>`)
    }
    document.write(`</ul>`)
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function userCardMaker(arrOfUsers) {
    for (const user of arrOfUsers) {
        document.write(
            `<div class="user-card">
                <h4 class="user-name">${user.name}</h4>
                <p class="user-info">ID: ${user.id} | Name: ${user.name}</p>
            </div>`
        )
    }
}

// - створити функцію яка повертає найменьше число з масиву
function minNumberInArray(arr) {
    let minNum = arr[0];

    for (const el of arr) {
        if (el < minNum) {
            minNum = el;
        }
    }

    return minNum
}


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = 0;

    for (const el of arr) {
        sum += el;
    }

    return sum
}


// - створити функцію swap(arr,index1,index2). Функція міняє місцями занчення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let swapArr = [...arr];

    swapArr[index1] = arr[index2];
    swapArr[index2] = arr[index1];

    return swapArr
}
//Цікаво чи правильно так робити :))


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const el of currencyValues) {
        if (el.currency === exchangeCurrency) {
            return sumUAH/el.value
        }
    }
}
