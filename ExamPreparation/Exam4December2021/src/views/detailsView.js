import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as requestService from '../services/requesterService.js';

const detailsTemplate = (album, user) => html`
    <section id="detailsPage">
        <div class="wrapper">
            <div class="albumCover">
                <img src="${album.imgUrl}">
            </div>
            ${albumTemplate(album, user)}
        </div>
    </section>
`;

const albumTemplate = (album, user) => html`
    <div class="albumInfo">
        <div class="albumText">
            <h1>Name: ${album.name}</h1>
            <h3>Artist: ${album.artist}</h3>
            <h4>Genre: ${album.genre}</h4>
            <h4>Price: $${album.price}</h4>
            <h4>Date: ${album.releaseDate}</h4>
            <p>${album.description}</p>
        </div>
    
        ${user ? html`
        <div class="actionBtn">
            <a href="#" class="edit">Edit</a>
            <a href="#" class="remove">Delete</a>
        </div>`: nothing}
    
    </div>
`;

export const detailsView = (ctx) => {
    requestService.getAlbumById(ctx.params.id)
        .then(album => {
            ctx.render(detailsTemplate(album, ctx.user));
        });
}