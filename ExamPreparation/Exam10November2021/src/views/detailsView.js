import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as requestService from '../services/requesterService.js';

const detailsTemplate = (add, isOwner) => html`
    <section id="listing-details">
        <h1>Details</h1>
        <div class="details-info">
            <img src="${add.imageUrl}">
            <hr>
            <ul class="listing-props">
                <li><span>Brand:</span>${add.brand}</li>
                <li><span>Model:</span>${add.model}</li>
                <li><span>Year:</span>${add.year}</li>
                <li><span>Price:</span>${add.price}$</li>
            </ul>
    
            <p class="description-para">${add.description}</p>
    
            ${isOwner ? html`
            <div class="listings-buttons">
                <a href="/data/cars/${add._id}/edit" class="button-list">Edit</a>
                <a href="/data/cars/${add._id}/delete" class="button-list">Delete</a>
            </div>` : nothing}
        </div>
    </section>
`;

export const detailsView = (ctx) => {
    const addId = ctx.params.id;

    requestService.getAddById(addId)
        .then(add => {
            const user = ctx.user;
            let isOwner = false;

            if (user) {
                isOwner = ctx.user._id == add._ownerId;
            }

            ctx.render(detailsTemplate(add, isOwner))
        });
}