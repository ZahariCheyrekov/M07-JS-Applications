import { html } from '../../node_modules/lit-html/lit-html.js';

import * as requestService from '../services/requesterService.js';
import { listingTemplate } from '../templates/listingTemplate.js';

const catalogTemplate = (adds) => html`
    <section id="car-listings">
        <h1>Car Listings</h1>
        <div class="listings">
    
        ${adds.length > 0 
        ? adds.map(add => listingTemplate(add))
        : html `<p class="no-cars">No cars in database.</p>`}
            
        </div>
    </section>
`;

export const catalogView = (ctx) => {
    requestService.getAdds()
        .then(adds => ctx.render(catalogTemplate(adds)));
}