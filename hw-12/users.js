const userList = document.createElement('ul');
userList.classList.add('user-list');

fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            const userListItem = document.createElement('li');
            userListItem.classList.add('user-list-item')
            userListItem.innerText = `ID: ${user.id} | Name: ${user.name}`

            const link = document.createElement('a');
            link.href = `user-details.html?id=${user.id}`
            link.innerText = 'User details'

            userList.append(userListItem, link);

            document.body.appendChild(userList)
        }
    })


