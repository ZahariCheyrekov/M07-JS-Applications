import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as albumService from '../services/albumService.js';
import { albumTemplate } from './templates/albumTemplate.js';

const searchTemplate = (searchHandler, albums) => html`
    <section id="searchPage">
        <h1>Search by Name</h1>
    
        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
            <button class="button-list" @click=${searchHandler}>Search</button>
        </div>
    
        <h2>Results:</h2>
        ${albums.length > 0
            ? albums.map(x => albumTemplate(x))
            : html`<p class="no-result">No result.</p>`}
        </div >
    </section >
`;

export const searchView = (ctx) => {

    const searchHandler = (ev) => {
        const searchInput = document.getElementById('search-input');

        albumService.search(searchInput.value)
            .then(albums => {
                ctx.render(searchTemplate(searchHandler, albums));
            });
    }

    ctx.render(searchTemplate(searchHandler, []));
}