import * as requestService from '../services/requestService.js';
import { inputValidator } from '../validators/inputValidator.js';
import { ALL_FIELDS_ARE_REQUIRED_MESSAGE } from '../constants/messages/alertMessages.js';
import { editTemplate } from '../templates/editTemplate.js';

export const editView = (ctx) => {
    const offerId = ctx.params.id;

    const onSubmit = (ev) => {
        ev.preventDefault();

        const data = Object.fromEntries(new FormData(ev.currentTarget));

        const isValid = inputValidator(data);
        if (!isValid) {
            alert(ALL_FIELDS_ARE_REQUIRED_MESSAGE);
            return;
        }
 
        requestService.editOfferById(offerId, data)
            .then(() => ctx.page.redirect(`/data/offers/${offerId}`));
    }

    requestService.getOfferById(offerId)
        .then(offer => ctx.render(editTemplate(onSubmit, offer)));
}