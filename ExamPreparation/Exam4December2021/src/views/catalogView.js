import { html } from '../../node_modules/lit-html/lit-html.js';

const catalogTemplate = (albums) => html`
    <section id="catalogPage">
        <h1>All Albums</h1>
    
        ${albums.length > 0
            ? albums.map(albumTemplate)
            : html`<p>No Albums in Catalog!</p>`
        }        
    
    </section>
`;

const albumTemplate = (album) => html`
    <div class="card-box">
        <img src="./images/Lorde.jpg">
        <div>
            <div class="text-center">
                <p class="name">Name: Melodrama</p>
                <p class="artist">Artist: Lorde</p>
                <p class="genre">Genre: Pop Music</p>
                <p class="price">Price: $7.33</p>
                <p class="date">Release Date: June 16, 2017</p>
            </div>
            <div class="btn-group">
                <a href="#" id="details">Details</a>
            </div>
        </div>
    </div>
`;

export const catalogView = (ctx) => {
    ctx.render(catalogTemplate());
}