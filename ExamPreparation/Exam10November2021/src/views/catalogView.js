import { html } from '../../node_modules/lit-html/lit-html.js';

import * as requestService from '../services/requesterService.js';

const catalogTemplate = (adds) => html`
    <section id="car-listings">
        <h1>Car Listings</h1>
        <div class="listings">
    
        ${adds.length > 0 
        ? adds.map(add => addTemplate(add))
        : html `<p class="no-cars">No cars in database.</p>`}
            
        </div>
    </section>
`;

const addTemplate = (add) => html`
   <div class="listing">
        <div class="preview">
            <img src="${add.imageUrl}">
        </div>
        <h2>${add.brand} ${add.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${add.year}</h3>
                <h3>Price: ${add.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href="/data/cars/${add._id}" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>
`;

export const catalogView = (ctx) => {
    requestService.getAdds()
        .then(adds => ctx.render(catalogTemplate(adds)));
}