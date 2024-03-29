import { html } from '../../node_modules/lit-html/lit-html.js';

const navigationTemplate = (user) => html`
    <nav>
        <a href="/all-memes">All Memes</a>
        ${user ? userNavigation(user.email) : guestNavigation()}
    </nav>
`;

const userNavigation = (email) => html`
    <div class="user">
        <a href="/create">Create Meme</a>
        <div class="profile">
            <span>Welcome, ${email}</span>
            <a href="/my-profile">My Profile</a>
            <a href="/logout">Logout</a>
        </div>
    </div>
`;

const guestNavigation = () => html`
    <div class="guest">
        <div class="profile">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
        <a class="active" href="/">Home Page</a>
    </div>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}