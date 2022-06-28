import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';

const root = document.getElementById('site-header');

// const renderContent = (templateResult) => {
//     render(templateResult, root);
// };

export const navigationMiddleware = (ctx, next) => {
    render(navigationView(ctx), root);
    next();
}

// export const navigationMiddleware = (ctx, next) => {
    // ctx.render = renderContent;
    // next();
// }