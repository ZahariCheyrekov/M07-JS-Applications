import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';

const headerRoot = document.getElementById('header-content');

export const navigationMiddleware = (ctx, next) => {
    render(navigationView(ctx), headerRoot);
    next();
}