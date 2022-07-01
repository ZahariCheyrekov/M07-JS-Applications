import { html } from '../../node_modules/lit-html/lit-html.js';

export const listingTemplate = (add) => html`
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
    </div>`;