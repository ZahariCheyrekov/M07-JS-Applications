import * as userService from '../services/userService.js';
import * as requestService from '../services/requestService.js';
import { detailsTemplate } from '../templates/detailsTemplate.js';

export const detailsView = async (ctx) => {
    const user = userService.getUser();
    const offerId = ctx.params.id;

    const [offer, applications, hasApplication] = await Promise.all([
        requestService.getOfferById(offerId),
        requestService.getTotalApplicationsForOffer(offerId),
        user ? requestService.getNumberOfApplicationsForSpecificUser(offerId, user._id) : 0
    ]);

    const isOwner = user && user._id == offer._ownerId;
    const hasApplicationBtn = user && !isOwner && hasApplication === 0;

    ctx.render(detailsTemplate(ctx, isOwner, offer, applications, hasApplicationBtn));
}