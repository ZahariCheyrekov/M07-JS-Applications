import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../services/userService.js';
import * as requestService from '../services/requestService.js';

const detailsTemplate = (game, user, isOwner, comments, onComment) => html`
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
    
            <div class="details-comments">
                <h2>Comments:</h2>
                ${comments.length > 0
                ? html`
                <ul>
                    ${comments.map(comment => commentTemplate(comment))}
                </ul>`
                : html`<p class="no-comment">No comments.</p>`
                }
            </div>
    
            ${isOwner 
            ? html`
            <div class="buttons">
                <a href="/data/games/${game._id}/edit" class="button">Edit</a>
                <a href="/data/games/${game._id}/delete" class="button">Delete</a>
            </div>
            `
            : nothing
            }
        </div>
    
        ${(user && !isOwner)
            ? html` 
            <article class="create-comment">
                <label>Add new comment:</label>
                <form @submit=${onComment} class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>`
            : nothing
        }
    </section>
`;

const commentTemplate = (comment) => html`
    <li class="comment">
        <p>Content: ${comment.comment}</p>
    </li>
`;

export const detailsView = async (ctx) => {
    const user = userService.getUser();
    const gameId = ctx.params.id;

    const onComment = (ev) => {
        ev.preventDefault();

        const { comment } = Object.fromEntries(new FormData(ev.currentTarget));
       
        requestService.addNewComment(gameId, comment)
            .then(() => ctx.page.redirect(`/data/games/${gameId}`));
        
        ev.currentTarget.reset();
    }
    
    const [comments, game] = await Promise.all([
        requestService.getCommentsForGame(gameId),
        requestService.getGameById(gameId)
    ]);

    const isOwner = user && user._id === game._ownerId;

    ctx.render(detailsTemplate(game, user, isOwner, comments, onComment));
}