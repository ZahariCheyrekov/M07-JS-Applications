import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as requestService from '../services/requesterService.js';

const catalogTemplate = (albums) => html`
    <section id="catalogPage">
        <h1>All Albums</h1>
    
        ${albums.length == 0
        ? html`<p> No Albums in Catalog!</p>`
        : albums.map(albumTemplate)}
    </section>
`;

const albumTemplate = (album) => html`
    <div class="card-box">
        <img src="${album.imgUrl}">
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            <div class="btn-group">
                <a href="#" id="details">Details</a>
            </div>
        </div>
    </div>
`;

// artist: "Pink Floyd"
// description: "The Dark Side of the Moon is the eighth studio album by the English rock band Pink Floyd, released on 1 March 1973 by Harvest Records."
// genre: "Rock Music"
// imgUrl: "/images/pinkFloyd.jpg"
// name: "The Dark Side of the Moon"
// price: "28.75"
// releaseDate: "March 1, 1973"
// _createdOn: 1617194295474
// _id: "126777f5-3277-42ad-b874-76d043b069cb"
// _ownerId: "847ec027-f659-4086-8032-5173e2f

export const catalogView = (ctx) => {
    requestService.getAllAlbums()
        .then(albums => {
            ctx.render(catalogTemplate(albums));
        });
}