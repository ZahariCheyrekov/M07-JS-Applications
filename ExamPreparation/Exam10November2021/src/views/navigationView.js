import { html } from '../../node_modules/lit-html/lit-html.js';

const navigationTemplate = (user) => html`
    <nav>
        <a class="active" href="/">Home</a>
        <a href="/catalog">All Listings</a>
        <a href="/search">By Year</a>
    
        ${user ? userLinks(user) : guestLinks()}
    </nav>
`;

const userLinks = (user) => html`
    <div id="profile">
        <a>Welcome ${user.username}</a>
        <a href="/data/cars">My Listings</a>
        <a href="/create">Create Listing</a>
        <a href="/logout">Logout</a>
    </div>
`;

const guestLinks = () => html`
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}