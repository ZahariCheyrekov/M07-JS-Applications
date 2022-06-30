import { html } from '../../node_modules/lit-html/lit-html.js';

const navigationTemplate = (user) => html`
    <nav class="navbar">
        <section class="navbar-dashboard">
            <a href="#">Dashboard</a>
            ${user ? userLinks() : guestLinks()}
        </section>
    </nav>
`;

const userLinks = (email) => html`
    <div id="user">
        <span>Welcome, ${email}</span>
        <a class="button" href="#">My Books</a>
        <a class="button" href="/create">Add Book</a>
        <a class="button" href="/logout">Logout</a>
    </div>
`;

const guestLinks = () => html`
    <div id="guest">
        <a class="button" href="/login">Login</a>
        <a class="button" href="/register">Register</a>
    </div>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}