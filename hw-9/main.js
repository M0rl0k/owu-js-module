//
// - створити блок,
const startDiv = document.createElement('div');

//     - додати йому класи wrap, collapse, alpha, beta
startDiv.classList.add('wrap');
startDiv.classList.add('collapse');
startDiv.classList.add('alpha');
startDiv.classList.add('beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
startDiv.style.backgroundColor = 'silver';
startDiv.style.color = 'blue';
startDiv.style.fontSize = '24px';

// - додати цей блок в body.
document.body.appendChild(startDiv);

// - клонувати його повністю, та додати клон в body.
const divClone = startDiv.cloneNode();

document.body.appendChild(divClone);
//
// - Є масив:
const array = ['Main','Products','About us','Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//

const ul = document.createElement('ul');

for (const el of array) {
    const listItem = document.createElement('li');
    listItem.innerText = el;
    ul.appendChild(listItem);
}

document.body.appendChild(ul);

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    const block = document.createElement('div');
    block.innerText = `Course: ${course.title} | Duration: ${course.monthDuration}`
    document.body.appendChild(block);
}
//
// =========================
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//

for (const course of coursesAndDurationArray) {
    const block = document.createElement('div');
    block.classList.add('item');

    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.innerText = course.title;

    const par = document.createElement('p');
    par.classList.add('description');
    par.innerText = course.monthDuration;

    block.append(heading, par);
    document.body.appendChild(block);
}
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const member of simpsons) {
    const memberBlock = document.createElement('div');
    memberBlock.classList.add('member');
    memberBlock.style.width = '500px'
    memberBlock.style.padding = '15px 30px'
    memberBlock.style.marginBottom = '10px'
    memberBlock.style.display = 'flex';
    memberBlock.style.flexDirection = 'column';
    memberBlock.style.justifyContent = 'space-between';
    memberBlock.style.alignItems = 'center';
    memberBlock.style.border = '2px solid black';
    memberBlock.style.borderRadius = '15px';

    const image = document.createElement('img');
    image.src = member.photo;

    const heading = document.createElement('h3');
    heading.innerText = `${member.name} ${member.surname}`;

    const ageOfMember = document.createElement('p');
    ageOfMember.classList.add('age')
    ageOfMember.innerText = `Age: ${member.age}`;

    const info = document.createElement('p');
    info.classList.add('info');
    info.innerText = member.info;

    memberBlock.append(image, heading, ageOfMember, info);

    document.body.appendChild(memberBlock)

}



// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {
    const courseBlock = document.createElement('div');
    courseBlock.classList.add('course-block');

    const heading = document.createElement('h4');
    heading.classList.add('course-block-heading');
    heading.innerText = course.title;

    const monthDurationInfo = document.createElement('span');
    monthDurationInfo.classList.add('course-block-month-duration-info');
    monthDurationInfo.innerText = `Duration (months): ${course.monthDuration}`;

    const hourDurationInfo = document.createElement('span');
    hourDurationInfo.classList.add('course-block-hour-duration-info');
    hourDurationInfo.innerText = `Duration (hours): ${course.hourDuration}`;

    const modulesCluster = document.createElement('ul');
    modulesCluster.classList.add('course-block-modules-cluster');

    for (const module of course.modules) {
        const moduleItem = document.createElement('li');
        moduleItem.classList.add('course-block-modules-cluster-module');
        moduleItem.innerText = module
        modulesCluster.appendChild(moduleItem)
    }

    courseBlock.append(heading, monthDurationInfo, hourDurationInfo, modulesCluster);
    document.body.appendChild(courseBlock);
}