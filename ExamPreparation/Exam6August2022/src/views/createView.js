import * as requestService from '../services/requestService.js';
import { inputValidator } from '../validators/inputValidator.js';
import { ALL_FIELDS_ARE_REQUIRED_MESSAGE } from '../constants/messages/alertMessages.js';
import { createTemplate } from '../templates/createTemplate.js';

export const createView = (ctx) => {
    const onSubmit = (ev) => {
        ev.preventDefault();

        const data = Object.fromEntries(new FormData(ev.currentTarget));

        const isValid = inputValidator(data);

        if (!isValid) {
            alert(ALL_FIELDS_ARE_REQUIRED_MESSAGE);
            return;
        }

        requestService.addNewOffer(data)
            .then(() => ctx.page.redirect('/dashboard'));
    }

    ctx.render(createTemplate(onSubmit));
}