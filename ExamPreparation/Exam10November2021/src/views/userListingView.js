import { html } from '../../node_modules/lit-html/lit-html.js';

import * as requestService from '../services/requesterService.js';
import { listingTemplate } from '../templates/listingTemplate.js';

const userListingTemplate = (adds) => html`
    <section id="my-listings">
        <h1>My car listings</h1>
        <div class="listings">
    
            ${adds
                ? adds.map(add => listingTemplate(add))
                : html`<p class="no-cars"> You haven't listed any cars yet.</p>`
            }
        </div>
    </section>
`;

export const userListingView = (ctx) => {
    requestService.getAddsByUserId(ctx.user._id)
        .then(adds => ctx.render(userListingTemplate(adds)));
}