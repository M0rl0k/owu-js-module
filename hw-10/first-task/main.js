//Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const form = document.forms.form;

const btn = form.btn;

const userBlock = document.createElement('div');


btn.onclick = function (e) {
    e.preventDefault()

    userBlock.innerText = ''

    const userObj = {
        name: form.name.value,
        surname: form.surname.value,
        age: form.age.value
    };

    userBlock.innerText = JSON.stringify(userObj);
    document.body.appendChild(userBlock);

    form.name.value = '';
    form.surname.value = '';
    form.age.value = 0;
}