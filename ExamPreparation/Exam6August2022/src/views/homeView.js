import { homeTemplate } from '../templates/homeTemplate.js';

export const homeView = (ctx) => {
    ctx.render(homeTemplate());
}