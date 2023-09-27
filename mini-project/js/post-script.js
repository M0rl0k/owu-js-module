const wrap = document.getElementById('global-wrapper');

const url = new URL(location.href);
const postId = url.searchParams.get('post');

const postBlock = document.getElementById('post-block');
const commentsBlock = document.getElementById('comments-block');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(post => {
        const postTitle = document.createElement('h3');
        postTitle.classList.add('post-block-title');
        postTitle.innerText = `
                ID: ${post.id} 
                Title: ${post.title} 
                User ID: ${post.userId}`;

        const postBody = document.createElement('p');
        postBody.classList.add('post-block-body');
        postBody.innerText = `${post.body}`;

        postBlock.append(postTitle, postBody);

        document.wrap.appendChild(postBlock);
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(value => value.json())
    .then(comments => {
            for (const comment of comments) {
                    const commentBox = document.createElement('div');
                    commentBox.classList.add(`comment-block-item`);

                    const commentTitle = document.createElement('h4');
                    commentTitle.classList.add('comment-block-item-title');
                    commentTitle.innerText = `
                        Post ID: ${comment.postId}
                        Comment ID: ${comment.id}
                        Comment name: ${comment.name}`

                    const commentBody = document.createElement('p');
                    commentBody.classList.add('comment-block-item-body');
                    commentBody.innerText = comment.body;

                    commentBox.append(commentTitle, commentBody);

                    commentsBlock.appendChild(commentBox);

            }
    })

