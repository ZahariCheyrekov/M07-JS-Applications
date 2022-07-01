import { html } from '../../node_modules/lit-html/lit-html.js';

import * as requestService from '../services/requesterService.js';

import { listingTemplate } from '../templates/listingTemplate.js';

import { YEAR_SEARCH_MESSAGE } from '../messages/alertMessage.js';
import { yearValidator } from '../validators/yearValidator.js';

const searchTemplate = (adds, onSearch) => html`
    <section id="search-cars">
        <h1>Filter by year</h1>
    
        <div class="container">
            <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
            <button @click=${onSearch} class="button-list">Search</button>
        </div>
    
        <h2>Results:</h2>
        <div class="listings">
    
            ${adds.length > 0
                ? adds.map(add => listingTemplate(add))
                : html`<p class="no-cars"> No results.</p>`
            }
    
        </div>
    </section>
`;

export const serachView = (ctx) => {
    const onSearch = async (ev) => {
        const input = document.getElementById('search-input');

        const isValidInput = yearValidator(input.value);

        if (!isValidInput) {
            YEAR_SEARCH_MESSAGE();
            return;
        }

        const adds = await requestService.getCarsByYear(input.value.trim());
        ctx.render(searchTemplate(adds));4
    }

    ctx.render(searchTemplate([], onSearch));
}