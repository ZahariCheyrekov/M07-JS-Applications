import * as requestService from '../services/requestService.js';

export const applicationHandler = (ctx) => {
    const offerId = ctx.params.id;

    requestService.addNewApplicationToOffer(offerId)
        .then(() => ctx.page.redirect(`/data/offers/${offerId}`));
}