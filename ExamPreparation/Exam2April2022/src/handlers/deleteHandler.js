import * as requestService from '../services/requestService.js';

export const deleteHandler = (ctx) => {
    const petId = ctx.params.id;

    requestService.deletePet(petId)
        .then(() => ctx.page.redirect('/'));
}