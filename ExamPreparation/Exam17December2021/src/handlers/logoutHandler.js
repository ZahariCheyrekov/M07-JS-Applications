import * as requestService from '../services/requestService.js';

export const logoutHandler = (ctx) => {
    requestService.logout()
        .then(() => ctx.page.redirect('/'));
}