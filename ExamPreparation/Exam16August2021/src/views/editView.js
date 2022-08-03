import { html } from '../../node_modules/lit-html/lit-html.js';

import * as requestService from '../services/requestService.js';
import { inputValidator } from '../validators/inputValidator.js';
import { ALL_FIELDS_ARE_REQUIRED_MESSAGE } from '../messages/alertMessages.js';

const editTemplate = (onSubmit, game) => html`
    <section id="edit-page" class="auth">
        <form @submit=${onSubmit} id="edit">
            <div class="container">
                <h1>Edit Game</h1>
                <label for="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" value="${game.title}">
    
                <label for="category">Category:</label>
                <input type="text" id="category" name="category" value="${game.category}">
    
                <label for="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" value="${game.maxLevel}">
    
                <label for="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" value="${game.imageUrl}">
    
                <label for="summary">Summary:</label>
                <textarea name="summary" id="summary" .value="${game.summary}"></textarea>
                <input class="btn submit" type="submit" value="Edit Game">
            </div>
        </form>
    </section>
`;

export const editView = (ctx) => {
    const gameId = ctx.params.id;

    const onSubmit = (ev) => {
        ev.preventDefault();

        const data = Object.fromEntries(new FormData(ev.currentTarget));

        const isValid = inputValidator(data);
        if (!isValid) {
            alert(ALL_FIELDS_ARE_REQUIRED_MESSAGE);
            return;
        }

        requestService.editGame(gameId, data)
            .then(() => ctx.page.redirect(`/data/games/${gameId}`));
    }

    requestService.getGameById(gameId)
        .then(game => ctx.render(editTemplate(onSubmit, game)));
}