import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../services/userService.js';
import * as requestService from '../services/requestService.js';

const detailsTemplate = (meme, isOwner) => html`
    <section id="meme-details">
        <h1>Meme Title: ${meme.title}</h1>
        <div class="meme-details">
            <div class="meme-img">
                <img alt="meme-alt" src="${meme.imageUrl}">
            </div>
            <div class="meme-description">
                <h2>Meme Description</h2>
                <p>${meme.description}</p>
    
                ${isOwner
                ? html`
                <a class="button warning" href="/data/memes/${meme._id}/edit">Edit</a>
                <button class="button danger">Delete</button>
                `
                : nothing
                }
            </div>
        </div>
    </section>
`;

export const detailsView = (ctx) => {
    const memeId = ctx.params.id;

    requestService.getMemeById(memeId)
        .then(meme => {
            const user = userService.getUser();
            const isOwner = user
                ? user._id === meme.ownerId
                : false;

            ctx.render(detailsTemplate(meme, isOwner));
        });
}