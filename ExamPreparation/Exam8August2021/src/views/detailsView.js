import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as requestService from '../services/requesterService.js';

const detailsTemplate = (book, isOwner) => html`
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${book.title}</h3>
            <p class="type">Type: ${book.type}</p>
            <p class="img"><img src="${book.imageUrl}"></p>
            <div class="actions">
    
                ${isOwner ? html`
                <a class="button" href="/data/books/${book._id}/edit">Edit</a>
                <a class="button" href="#">Delete</a>
                ` : nothing}
    
                <div class="likes">
                    <img class="hearts" src="/images/heart.png">
                    <span id="total-likes">Likes: 0</span>
                </div>
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${book.description}</p>
        </div>
    </section>
`;

export const detailsView = (ctx) => {
    requestService.getBookById(ctx.params.id)
        .then(book => {
            const isOwner = ctx.user._id == book._ownerId;
            ctx.render(detailsTemplate(book, isOwner))
        });
}