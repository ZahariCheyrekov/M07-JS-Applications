import * as requestService from '../services/requestService.js';
import { DELETE_MEME_CONFIRM_MESSAGE } from '../messages/confirmMessages.js';

export const deleteHandler = (ctx) => {
    const confirmed = confirm(DELETE_MEME_CONFIRM_MESSAGE);

    if (confirmed) {
        const memeId = ctx.params.id;
        
        requestService.deleteMeme(memeId)
            .then(() => ctx.page.redirect('/all-memes'));
    }
}
