function attachEvents() {
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostsBtn = document.getElementById('btnViewPost');

    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    loadPostsBtn.addEventListener('click', async () => {

    });

    viewPostsBtn.addEventListener('click', async () => {
        
    });
}

attachEvents();