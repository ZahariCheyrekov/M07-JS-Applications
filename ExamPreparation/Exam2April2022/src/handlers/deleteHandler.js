import { DELETE_PET_CONFIRM_MESSAGE } from '../messages/confirmMessages.js';
import * as requestService from '../services/requestService.js';

export const deleteHandler = (ctx) => {
    const petId = ctx.params.id;
    const confirmed = confirm(DELETE_PET_CONFIRM_MESSAGE);

    if (confirmed) {
        requestService.deletePet(petId)
            .then(() => ctx.page.redirect('/'));
    }
}