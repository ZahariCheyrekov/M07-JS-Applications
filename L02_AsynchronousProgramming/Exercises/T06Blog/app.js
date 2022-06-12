function attachEvents() {
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostsBtn = document.getElementById('btnViewPost');
    const posts = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const commentsUl = document.getElementById('post-comments');
    let loaded = false;

    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    loadPostsBtn.addEventListener('click', () => {
        if (loaded) {
            return;
        }

        fetch(postsUrl)
            .then(res => res.json())
            .then(data => {
                Object.keys(data).forEach(key => {
                    const option = createComponent(data, key);
                    posts.appendChild(option);
                });
            });
        loaded = true;
    });

    viewPostsBtn.addEventListener('click', async () => {
        const selected = Array.from(posts.querySelectorAll('option')).find(o => o.selected);

        const res = await fetch(postsUrl + `/${selected.value}`);
        const data = await res.json();

        postTitle.textContent = data.title;
        postBody.textContent = data.body;

        const resComments = await fetch(commentsUrl);
        const dataComments = await resComments.json();

        Object.keys(dataComments).forEach(key => {
            console.log(key, selected.value)
            if (key == selected.value) {
                const li = document.createElement('li');
                li.id = commentsData[key].id;
                li.textContent = commentsData[key].text;
                commentsUl.appendChild(li);
                console.log(li)
            }
        });
    });
}

function createComponent(data, key) {
    const component = document.createElement('option');
    component.setAttribute('value', key);
    component.setAttribute('id', data[key].id);
    component.textContent = data[key].title.toUpperCase();
    return component;
}

attachEvents();