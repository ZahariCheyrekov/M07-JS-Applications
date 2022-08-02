import { html } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../services/userService.js';
import * as requestService from '../services/requestService.js';

const myPostsTemplate = (posts) => html`
    <section id="my-posts-page">
        <h1 class="title">My Posts</h1>
    
        ${posts.length > 0
        ? html`
        <div class="my-posts">
            ${posts.map(post => postTemplate(post))}
        </div>
        `
        : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}
    </section>
`;

const postTemplate = (post) => html`
    <div class="post">
        <h2 class="post-title">${post.title}</h2>
        <img class="post-image" src="${post.imageUrl}" alt="Material Image">
        <div class="btn-wrapper">
            <a href="/data/posts/${post._id}" class="details-btn btn">Details</a>
        </div>
    </div>
`;

export const myPostsView = (ctx) => {
    const userId = userService.getUser()._id;

    requestService.getUserPosts(userId)
        .then(posts => ctx.render(myPostsTemplate(posts)));
}