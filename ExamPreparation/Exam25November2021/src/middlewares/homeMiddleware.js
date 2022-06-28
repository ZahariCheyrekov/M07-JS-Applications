import { render } from '../../node_modules/lit-html/lit-html.js';

const root = document.querySelector('main');

export const homeMiddleware = (ctx, next) => {
    ctx.render = (content) => render(content, root);
    next();
}