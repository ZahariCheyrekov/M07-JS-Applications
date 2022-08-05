import * as requestService from '../services/requestService.js';

export const donationHandler = (ctx, petId) => {
    requestService.addDonation(petId)
        .then(() => ctx.page.redirect(`/data/pets${petId}`));
}