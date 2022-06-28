import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';

const root = document.querySelector('#container');

export const navigationMiddleware = (ctx, next) => {
    render(navigationView(ctx), root);
    next();
};