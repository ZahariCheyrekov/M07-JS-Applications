import { html, render } from '../../node_modules/lit-html/lit-html.js'

const root = document.getElementById('main-content');

const userNav = () => html`
    <div id="user">
        <a href="/create">Create Game</a>
        <a href="/logout">Logout</a>
    </div>
`;

const noUserNav = () => html`
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
`;

const navTemplate = (user) => html`
    <h1><a class="home" href="/">GamesPlay</a></h1>
    <nav>
        <a href="/catalog">All games</a>
        ${user ? userNav : noUserNav}
    </nav>
`;

function ctxRender(content) {
    render(content, root)
}

export function addRender(ctx, next) {
    ctx.render = ctxRender;
    next();
}