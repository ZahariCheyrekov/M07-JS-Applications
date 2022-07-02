import { html } from '../../node_modules/lit-html/lit-html.js';

import * as requestService from '../services/requesterService.js';

const detailsTemplate = (theater, isOwner) => html`
    <section id="detailsPage">
        <div id="detailsBox">
            <div class="detailsInfo">
                <h1>Title: ${theater.title}</h1>
                <div>
                    <img src="${theater.imageUrl}" />
                </div>
            </div>
    
            <div class="details">
                <h3>Theater Description</h3>
                <p>${theater.desciption}</p>
                <h4>Date: ${theater.date}</h4>
                <h4>Author: ${theater.author}</h4>
    
                <div class="buttons">
                    ${isOwner ? html`
                    <a class="btn-delete" href="/data/theaters/${theater._id}/delete">Delete</a>
                    <a class="btn-edit" href="/data/theaters/${theater._id}/edit">Edit</a>
                    `
                    : html`<a class="btn-like" href="#">Like</a>`}    
                </div>
    
                <p class="likes">Likes: 0</p>
            </div>
        </div>
    </section>
`;

export const detailsView = (ctx) => {
    const theaterId = ctx.params.id;

    requestService.getTheaterDetails(theaterId)
        .then(theater => {
            const user = ctx.user;
            let isOwner = false;

            if (user) {
                isOwner = ctx.user._id == theater._ownerId;
            }

            ctx.render(detailsTemplate(theater, isOwner))
        });
}