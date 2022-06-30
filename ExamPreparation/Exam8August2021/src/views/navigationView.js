import { html } from '../../node_modules/lit-html/lit-html.js';

const navigationTemplate = () => html`
    <nav class="navbar">
        <section class="navbar-dashboard">
            <a href="#">Dashboard</a>
            <!-- Guest users -->
            <div id="guest">
                <a class="button" href="#">Login</a>
                <a class="button" href="#">Register</a>
            </div>
            <!-- Logged-in users -->
            <div id="user">
                <span>Welcome, {email}</span>
                <a class="button" href="#">My Books</a>
                <a class="button" href="#">Add Book</a>
                <a class="button" href="#">Logout</a>
            </div>
        </section>
    </nav>
`;


export const navigationView = (ctx) => {
    return navigationTemplate(ctx);
}