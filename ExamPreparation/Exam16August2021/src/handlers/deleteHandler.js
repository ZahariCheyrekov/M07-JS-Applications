import { DELETE_GAME_CONFIRM_MESSAGE } from '../messages/confirmMessages.js';
import * as requestService from '../services/requestService.js';

export const deleteHandler = (ctx) => {
    const gameId = ctx.params.id;
    const confirmed = confirm(DELETE_GAME_CONFIRM_MESSAGE);

    if (confirmed) {
        requestService.deleteGame(gameId)
            .then(() => ctx.page.redirect('/'));
    }
}