import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import * as gameService from '../services/gameService.js';
import * as commentsService from '../services/commentsService.js';
import { commentsView } from './commentsView.js';
import { commentFormView } from './commentsFormView.js';

const detailsTemplate = (game, commentsSection, commentForSection, onDelete) => html`
    <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">
    
            <div class="game-header">
                <img class="game-img" src="${game.imageUrl}" />
                <h1>${game.title}</h1>
                <span class="levels">MaxLevel: ${game.maxLevel}</span>
                <p class="type">${game.category}</p>
            </div>
    
            <p class="text">${game.summary}</p>
    
            ${commentsSection}
    
            ${game.isOwner ? html`
            <div class="buttons">
                <a href="/edit/${game._id}" class="button">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
            </div>` : nothing}
    
        </div>
    
        ${commentForSection}
    </section>
`;

export async function detailsPage(ctx) {
    const gameId = ctx.params.id;
    const [game, commentsSection] = await Promise.all([
        gameService.getById(gameId),
        commentsView(gameId)
    ]);

    const commentForSection = commentFormView(ctx);

    if (ctx.user) {
        game.isOwner = ctx.user._id == game._ownerId;
    }

    ctx.render(detailsTemplate(game, commentsSection, commentForSection, onDelete));

    async function onDelete() {
        const result = confirm('Are you sure you want to delete this game?');

        if (result) {
            await gameService.deleteById(gameId);
            ctx.page.redirect('/');
        }
    }
}