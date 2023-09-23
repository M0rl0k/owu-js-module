const userBlock = document.createElement('div');
userBlock.classList.add('user-block');

const url = new URL(location.href);
const id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(user => {
        console.log(user);

        const userList = document.createElement('ul');
        userList.classList.add('user-block-list');
        userList.innerText = 'User Details';

        const name = document.createElement('li');
        name.classList.add('user-block-list-item');
        name.innerText = `Name: ${user.name}`;

        const userName = document.createElement('li');
        userName.classList.add('user-block-list-item');
        userName.innerText = `Username: ${user.username}`;

        const email = document.createElement('li');
        email.classList.add('user-block-list-item');
        email.innerText = `Email: ${user.email}`;

        const id = document.createElement('li');
        id.classList.add('user-block-list-item');
        id.innerText = `ID: ${user.id}`;

        const phone = document.createElement('li');
        phone.classList.add('user-block-list-item');
        phone.innerText = `Phone: ${user.phone}`;

        const website = document.createElement('li');
        website.classList.add('user-block-list-item');
        website.innerText = `Website: ${user.website}`;

        const address = document.createElement('ul');
        address.classList.add('user-block-list-inner-list');
        address.innerText = 'Address:';

            const city = document.createElement('li');
            city.classList.add('user-block-list-inner-list-item');
            city.innerText = user.address.city;

            const street = document.createElement('li');
            street.classList.add('user-block-list-inner-list-item');
            street.innerText = user.address.street;

            const suite = document.createElement('li');
            suite.classList.add('user-block-list-inner-list-item');
            suite.innerText = user.address.suite;

            const zipcode = document.createElement('li');
            zipcode.classList.add('user-block-list-inner-list-item');
            zipcode.innerText = user.address.zipcode;

            const geo = document.createElement('ul');
            geo.classList.add('user-block-list-inner-list')
            geo.innerText = 'Geo:'

                const lat = document.createElement('li');
                lat.classList.add('user-block-list-inner-list-item');
                lat.innerText = user.address.geo.lat;

                const lng = document.createElement('li');
                lng.classList.add('user-block-list-inner-list-item');
                lng.innerText = user.address.geo.lng;

                geo.append(lat, lng);

            address.append(city, street, suite, zipcode, geo);

        const company = document.createElement('ul');
        company.classList.add('user-block-list-inner-list');
        company.innerText = 'Company:';

            const companyName = document.createElement('li');
            companyName.classList.add('user-block-list-inner-list-item');
            companyName.innerText = user.company.name;

            const catchPhrase = document.createElement('li');
            catchPhrase.classList.add('user-block-list-inner-list-item');
            catchPhrase.innerText = user.company.catchPhrase;

            const bs = document.createElement('li');
            bs.classList.add('user-block-list-inner-list-item');
            bs.innerText = user.company.bs;

            company.append(companyName, catchPhrase, bs);

        userList.append(userName, name, id, phone, email, address, company, website)

        document.body.appendChild(userList);

    })
