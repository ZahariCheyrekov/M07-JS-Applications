import { html } from '../../node_modules/lit-html/lit-html.js';

const navigationTemplate = (user) => html`
    <nav>
        <a href="/">Theater</a>
        <ul>
            ${user ? userLinks(user) : guestLinks()}
        </ul>
    </nav>
`;

const userLinks = (user) => html`
    <li><a href="#">Profile</a></li>
    <li><a href="/create">Create Event</a></li>
    <li><a href="/logout">Logout</a></li>
`;

const guestLinks = () => html`
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}