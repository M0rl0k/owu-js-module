const wrap = document.getElementById('global-wrapper');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            const userBlock = document.createElement('div');
            userBlock.classList.add('user-block');

            const nameOfUser = document.createElement('h3');
            nameOfUser.classList.add('user-block-name-of-user');
            nameOfUser.innerText = `Name: ${user.name}`;

            const userId = document.createElement('p');
            userId.classList.add('user-bock-id-of-user');
            userId.innerText = `ID: ${user.id}`;

            const userLink = document.createElement('a');
            userLink.classList.add('user-block-details-link');
            userLink.innerText = 'Get details';
            userLink.href = `user-details.html?user=${user.id}`

            userBlock.append(nameOfUser, userId, userLink);

            wrap.appendChild(userBlock);
        }
    })