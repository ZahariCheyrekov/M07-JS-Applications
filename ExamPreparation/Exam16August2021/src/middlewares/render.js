import { html, render } from '../../node_modules/lit-html/lit-html.js'

const root = document.getElementById('main-content');

const navTemplate = () => html`
    <h1><a class="home" href="/">GamesPlay</a></h1>
    <nav>
        <a href="/catalog">All games</a>
        <!-- Logged-in users -->
        <div id="user">
            <a href="/create">Create Game</a>
            <a href="/logout">Logout</a>
        </div>
        <!-- Guest users -->
        <div id="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
    </nav>
`;

function ctxRender(content) {
    render(content, root)
}

export function addRender(ctx, next) {
    ctx.render = ctxRender;
    next();
}