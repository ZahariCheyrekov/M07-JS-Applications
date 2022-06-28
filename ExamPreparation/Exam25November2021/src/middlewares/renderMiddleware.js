import { render } from '../../node_modules/lit-html/lit-html.js';

const root = document.getElementById('container');

function ctxRender(content) {
    render(content, root)
}

export function addRender(ctx, next) {
    render(navTemplate(ctx.user), root);
    ctx.render = ctxRender;
    next();
}