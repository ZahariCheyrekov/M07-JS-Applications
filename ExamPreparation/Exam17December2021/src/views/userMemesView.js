import { html } from '../../node_modules/lit-html/lit-html.js';
import { notify } from '../handlers/notificationHandler.js';

import * as requestService from '../services/requesterService.js';

const userMemesTemplate = (memes) => html`
    <section id="user-profile-page" class="user-profile">
        <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
            <div class="user-content">
                <p>Username: Mary</p>
                <p>Email: mary@abv.bg</p>
                <p>My memes count: 2</p>
            </div>
        </article>
        <h1 id="user-listings-title">User Memes</h1>
        <div class="user-meme-listings">
       
            ${memes.length > 0 ? 
            memes.map(meme => memeTemplate(meme))
            : html`<p class="no-memes">No memes in database.</p>`}
            
        </div>
    </section>
`;

const memeTemplate = (meme) => html`
    <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
        <a class="button" href="/data/memes/${meme._id}">Details</a>
    </div>
`;

export const userMemesView = (ctx) => {
    requestService.getUserMemems(ctx.user._id)
        .then(memes => ctx.render(userMemesTemplate(memes)))
        .catch(err => notify(err));
}