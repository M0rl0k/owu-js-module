// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


    const text = document.getElementById('text');

const button = document.getElementById('btn');

button.onclick = function () {
    text.style.display = 'none'
};