//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

const form = document.forms.form;
const button = document.querySelector('#form-button');

button.onclick = function (e) {
    e.preventDefault()

    if (+form.age.value < 18) {
        alert('Less than 18.')
    } else {
        alert('Good to go.')
    }
}