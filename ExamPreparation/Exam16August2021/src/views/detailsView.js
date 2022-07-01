import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as requestService from '../services/requesterService.js';

const detailsTemplate = (game, isOwner) => html`
    <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">
    
            <div class="game-header">
                <img class="game-img" src="${game.imageUrl}" />
                <h1>Bright</h1>
                <span class="levels">${game.title}</span>
                <p class="type">${game.category}</p>
            </div>
    
            <p class="text">${game.summary}</p>
    
            ${isOwner ? html`
            <div class="buttons">
                <a href="#" class="button">Edit</a>
                <a href="#" class="button">Delete</a>
            </div>
            `: nothing}
    
            <!-- Bonus ( for Guests and Users ) -->
            <!-- <div class="details-comments">
                        <h2>Comments:</h2>
                               <ul> -->
            <!-- list all comments for current game (If any) -->
            <!-- <li class="comment">
                                           <p>Content: I rate this one quite highly.</p>
                               </li>
                                       <li class="comment">
                                <p>Content: The best game.</p>
                        </li>
                           </ul> -->
            <!-- Display paragraph: If there are no games in the database -->
            <!-- <p class="no-comment">No comments.</p>
                      </div> -->
    
            <!-- Edit/Delete buttons ( Only for creator of this game )  -->
            <!-- <div class="buttons">
                             <a href="#" class="button">Edit</a>
                                        <a href="#" class="button">Delete</a>
                           </div>
                          </div> -->
    
            <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            <!-- <article class="create-comment">
                       <label>Add new comment:</label>
                        <form class="form">
                                <textarea name="comment" placeholder="Comment......"></textarea>
                                    <input class="btn submit" type="submit" value="Add Comment">
                                   </form>
                                </article> -->
    </section>
`;

export const detailsView = (ctx) => {
    requestService.gameDetails(ctx.params.id)
        .then(game => {
            const isOwner = ctx.user && ctx.user._id == game._ownerId;
            ctx.render(detailsTemplate(game, isOwner));
        });
}