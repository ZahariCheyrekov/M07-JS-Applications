import * as requestService from '../services/requesterService.js';

import { DELETE_ADD_CONFIRM_MESSAGE } from '../messages/confirmMessage.js';

export const deleteHandler = (ctx) => {
    const confirmed = DELETE_ADD_CONFIRM_MESSAGE();

    if (confirmed) {
        const addById = ctx.params.id;

        requestService.deleteAddById(addById)
            .then(() => ctx.page.redirect('/catalog'));
    }
}