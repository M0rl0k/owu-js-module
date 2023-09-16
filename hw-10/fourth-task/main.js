//зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const arrayOfObjects = [
    { name: 'Person 1', age: 25, status: true },
    { name: 'Person 2', age: 42, status: false },
    { name: 'Person 3', age: 18, status: true },
    { name: 'Person 4', age: 31, status: false },
    { name: 'Person 5', age: 54, status: true },
    { name: 'Person 6', age: 29, status: false },
    { name: 'Person 7', age: 37, status: true },
    { name: 'Person 8', age: 22, status: false },
    { name: 'Person 9', age: 45, status: true },
    { name: 'Person 10', age: 19, status: false },
    { name: 'Person 11', age: 28, status: true },
    { name: 'Person 12', age: 36, status: false },
    { name: 'Person 13', age: 42, status: true },
    { name: 'Person 14', age: 56, status: false },
    { name: 'Person 15', age: 29, status: true },
    { name: 'Person 16', age: 33, status: false },
    { name: 'Person 17', age: 27, status: true },
    { name: 'Person 18', age: 39, status: false },
    { name: 'Person 19', age: 48, status: true },
    { name: 'Person 20', age: 23, status: false },
    { name: 'Person 21', age: 31, status: true },
    { name: 'Person 22', age: 42, status: false },
    { name: 'Person 23', age: 19, status: true },
    { name: 'Person 24', age: 38, status: false },
    { name: 'Person 25', age: 45, status: true },
    { name: 'Person 26', age: 28, status: false },
    { name: 'Person 27', age: 36, status: true },
    { name: 'Person 28', age: 51, status: false },
    { name: 'Person 29', age: 24, status: true },
    { name: 'Person 30', age: 30, status: false },
    { name: 'Person 31', age: 41, status: true },
    { name: 'Person 32', age: 22, status: false },
    { name: 'Person 33', age: 27, status: true },
    { name: 'Person 34', age: 35, status: false },
    { name: 'Person 35', age: 47, status: true },
    { name: 'Person 36', age: 29, status: false },
    { name: 'Person 37', age: 38, status: true },
    { name: 'Person 38', age: 33, status: false },
    { name: 'Person 39', age: 26, status: true },
    { name: 'Person 40', age: 44, status: false },
    { name: 'Person 41', age: 52, status: true },
    { name: 'Person 42', age: 21, status: false },
    { name: 'Person 43', age: 37, status: true },
    { name: 'Person 44', age: 31, status: false },
    { name: 'Person 45', age: 19, status: true },
    { name: 'Person 46', age: 38, status: false },
    { name: 'Person 47', age: 45, status: true },
    { name: 'Person 48', age: 29, status: false },
    { name: 'Person 49', age: 36, status: true },
    { name: 'Person 50', age: 49, status: false },
    { name: 'Person 51', age: 23, status: true },
    { name: 'Person 52', age: 34, status: false },
    { name: 'Person 53', age: 27, status: true },
    { name: 'Person 54', age: 41, status: false },
    { name: 'Person 55', age: 55, status: true },
    { name: 'Person 56', age: 20, status: false },
    { name: 'Person 57', age: 39, status: true },
    { name: 'Person 58', age: 30, status: false },
    { name: 'Person 59', age: 47, status: true },
    { name: 'Person 60', age: 28, status: false },
    { name: 'Person 61', age: 36, status: true },
    { name: 'Person 62', age: 32, status: false },
    { name: 'Person 63', age: 25, status: true },
    { name: 'Person 64', age: 42, status: false },
    { name: 'Person 65', age: 18, status: true },
    { name: 'Person 66', age: 31, status: false },
    { name: 'Person 67', age: 54, status: true },
    { name: 'Person 68', age: 29, status: false },
    { name: 'Person 69', age: 37, status: true },
    { name: 'Person 70', age: 22, status: false },
    { name: 'Person 71', age: 45, status: true },
    { name: 'Person 72', age: 19, status: false },
    { name: 'Person 73', age: 28, status: true },
    { name: 'Person 74', age: 36, status: false },
    { name: 'Person 75', age: 42, status: true },
    { name: 'Person 76', age: 56, status: false },
    { name: 'Person 77', age: 29, status: true },
    { name: 'Person 78', age: 33, status: false },
    { name: 'Person 79', age: 27, status: true },
    { name: 'Person 80', age: 39, status: false },
    { name: 'Person 81', age: 48, status: true },
    { name: 'Person 82', age: 23, status: false },
    { name: 'Person 83', age: 31, status: true },
    { name: 'Person 84', age: 42, status: false },
    { name: 'Person 85', age: 19, status: true },
    { name: 'Person 86', age: 38, status: false },
    { name: 'Person 87', age: 45, status: true },
    { name: 'Person 88', age: 28, status: false },
    { name: 'Person 89', age: 36, status: true },
    { name: 'Person 90', age: 51, status: false },
    { name: 'Person 91', age: 24, status: true },
    { name: 'Person 92', age: 30, status: false },
    { name: 'Person 93', age: 41, status: true },
    { name: 'Person 94', age: 22, status: false },
    { name: 'Person 95', age: 27, status: true },
    { name: 'Person 96', age: 35, status: false },
    { name: 'Person 97', age: 47, status: true },
    { name: 'Person 98', age: 29, status: false },
    { name: 'Person 99', age: 38, status: true },
    { name: 'Person 100', age: 33, status: false },
];
const itemsPerPage = 10;
let currentPage = 1;

const itemsContainer = document.getElementById('items-container');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

function render() {
    //Очищуємо вміст при рендері нової сторінки, щоб елементи перезаписувались, а не просто додавались.
    itemsContainer.innerText = '';

    const firstIndex = (currentPage - 1) * 10;
    const lastIndex = firstIndex + itemsPerPage;

    //Ми повинні ітерувати до останнього індексу при цьому зупинятись, якщо ми дійшли до останнього елементу масиву
    for (let i = firstIndex; i < lastIndex && i < arrayOfObjects.length; i++) {
        const object = arrayOfObjects[i];

        const objectBlock = document.createElement('div');
        objectBlock.classList.add('items-container-object-block');
        objectBlock.innerText = `Name ${object.name} | Age: ${object.age} | Status: ${object.status}`

        itemsContainer.appendChild(objectBlock);
    }
}

//Тут без GPT було важко розібратись, тому прибіг до його допомоги.
// Перевіряємо чи номер поточної сторніки менший, ніж загальна к-сть сторінок необхідна для рендеру всіх елементів.
//Якщо отримуємо true, то маємо ще сторінки в запасі і перемикаємось на наступну, запускаючи новий рендер.
//Якщо отримуємо false, то значить ми знаходимось на останній сторінці і ми не робимо нічого.
nextButton.addEventListener('click', () => {
    if (currentPage < Math.ceil(arrayOfObjects.length / itemsPerPage)) {
        currentPage++;
        render();
    }
})

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        render();
    }
})

render();