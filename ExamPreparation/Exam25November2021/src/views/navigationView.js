import { html } from '../../node_modules/lit-html/lit-html.js';

export const navigationTemplate = () => html`
    <nav>
        <a href="#">All Memes</a>
        <!-- Logged users -->
        <div class="user">
            <a href="/create">Create Meme</a>
            <div class="profile">
                <span>Welcome, {email}</span>
                <a href="#">My Profile</a>
                <a href="/logout">Logout</a>
            </div>
        </div>
        <!-- Guest users -->
        <div class="guest">
            <div class="profile">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
            <a class="active" href="/">Home Page</a>
        </div>
    </nav>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}