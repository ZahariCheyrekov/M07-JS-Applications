function attachEvents() {
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostsBtn = document.getElementById('btnViewPost');
    const posts = document.getElementById('posts');
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

    });

    function createComponent(data, key) {
        const component = document.createElement('option');
        component.setAttribute('value', key);
        component.setAttribute('id', data[key].id);
        component.textContent = data[key].title.toUpperCase();
        return component;
    }
}

attachEvents();