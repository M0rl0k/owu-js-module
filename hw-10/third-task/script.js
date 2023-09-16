//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

const sessions = localStorage.getItem('sessions');
const sessionsArr = JSON.parse(sessions);

sessionsArr.forEach(item => {
    const sessionBlock = document.createElement('div');
    sessionBlock.classList.add('session-block');
    sessionBlock.innerText = `Session: ${item}`;

    document.body.appendChild(sessionBlock);
})