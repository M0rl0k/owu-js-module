//є сторінка, на якій є блок, я кому знаходиьтся цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1


const block = document.getElementById('block');
block.innerText = sessionStorage.getItem('number');

window.onload = function () {
    let blockNumber = +block.innerText;
    blockNumber++

    sessionStorage.setItem('number', blockNumber.toString());
}
