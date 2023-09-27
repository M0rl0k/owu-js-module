const wrap = document.getElementById('global-wrapper');



const url = new URL(location.href);
const userId = url.searchParams.get('user');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(user => {
        const {
            id,
            name,
            username,
            email,
            address: {street, suite, city, zipcode, geo: {lat, lng}},
            phone,
            website,
            company: {name:companyName, catchPhrase, bs}
        } = user;

        const userBlock = document.createElement('div');
        userBlock.classList.add('user-block');

        const userTitle = document.createElement('h3');
        userTitle.classList.add('user-block-title');
        userTitle.innerText = `Name: ${name} | ID: ${id} | User Name: ${username}`

        const userInfo = document.createElement('p');
        userInfo.classList.add('user-block-details');
        userInfo.innerText = `
            Email: ${email}
            Phone: ${phone}
            Website: ${website}
            Address: 
                Street: ${street}
                Suite: ${suite}
                City: ${city}
                Zipcode: ${zipcode}
            Geo: 
                lat: ${lat}
                lng: ${lng}
            Company:
                Company name: ${companyName}
                Company catch phrase: ${catchPhrase}
                Company bs: ${bs}`;


        const userButton = document.createElement('button');
        userButton.classList.add('user-block-button');
        userButton.innerText = 'Post of current user';

        userBlock.append(userTitle, userInfo);

        userButton.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(value => value.json())
                .then(posts => {
                    const postsContainer = document.createElement('div');
                    postsContainer.classList.add('posts-container');
                    wrap.appendChild(postsContainer)

                    for (const post of posts) {
                        const postBlock = document.createElement('div');
                        postBlock.classList.add('posts-container-post-block');

                        const postTitle = document.createElement('h3');
                        postTitle.classList.add('posts-container-post-block-title');
                        postTitle.innerText = post.title;

                        const postLink = document.createElement('a');
                        postLink.classList.add('posts-container-post-block-link');
                        postLink.innerText = 'Get post details';
                        postLink.href = `post-details.html?post=${post.id}`

                        postBlock.append(postTitle, postLink);

                        postsContainer.appendChild(postBlock);
                    }
                })
        }


        wrap.append(userBlock, userButton)
    })