import * as requestService from '../services/requestService.js';
import { dashboardTemplate } from '../templates/dashboardTemplate.js';

export const dashboardView = (ctx) => {
    requestService.getAllOffers()
        .then(offers => ctx.render(dashboardTemplate(offers)));
}