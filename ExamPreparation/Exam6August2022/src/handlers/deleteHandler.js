import { DELETE_OFFER_CONFIRM_MESSAGE } from '../constants/messages/confirmMessages.js';
import * as requestService from '../services/requestService.js';

export const deleteHandler = (ctx) => {
    const offerId = ctx.params.id;
    const confirmed = confirm(DELETE_OFFER_CONFIRM_MESSAGE);

    if (confirmed) {
        requestService.deleteOfferById(offerId)
            .then(() => ctx.page.redirect('/dashboard'));
    }
}