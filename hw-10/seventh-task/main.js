//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const table = document.forms.table;
const tableBox = document.createElement('table');

table.onsubmit = (e) => {
    e.preventDefault();

    tableBox.innerText = '';

    for (let i = 0; i < table.rowCounter.value; i++){
        const trTag = document.createElement('tr');
        tableBox.appendChild(trTag);
        for (let j = 0; j < table.columnsCounter.value; j++){
            const tdTag = document.createElement('td');
            tdTag.innerText = table.content.value;
            tableBox.appendChild(tdTag);
        }
    }
    document.body.appendChild(tableBox);
}