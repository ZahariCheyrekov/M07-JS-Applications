import { html } from '../../node_modules/lit-html/lit-html.js';

const navigationTemplate = (user) => html`
    <h1><a class="home" href="#">GamesPlay</a></h1>
    <nav>
        <a href="#">All games</a>
        ${user ? userNavigation() : guestNavigation()}
    </nav>
`;

const userNavigation = () => html`
    <div id="user">
        <a href="/create">Create Game</a>
        <a href="/logout">Logout</a>
    </div>
`;

const guestNavigation = () => html`
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}