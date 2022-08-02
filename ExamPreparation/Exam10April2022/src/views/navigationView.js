import { html } from '../../node_modules/lit-html/lit-html.js';

const navigationTemplate = (user) => html`
    <h1><a href="/">Orphelp</a></h1>
    
    <nav>
        <a href="/">Dashboard</a>
        ${user ? userNavigation() : guestNavigation()}
    </nav>
`;

const userNavigation = () => html`
    <div id="user">
        <a href="/my-posts">My Posts</a>
        <a href="/create">Create Post</a>
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