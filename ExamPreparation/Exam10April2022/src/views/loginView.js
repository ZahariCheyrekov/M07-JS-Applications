import { html } from '../../node_modules/lit-html/lit-html.js';

import * as requestService from '../services/requestService.js';
import { inputValidator } from '../validators/inputValidator.js';
import { ALL_FIELDS_ARE_REQUIRED_MESSAGE } from '../messages/alertMessages.js';

const loginTemplate = (onSubmit) => html`
    <section id="login-page" class="auth">
        <form @submit=${onSubmit} id="login">
            <h1 class="title">Login</h1>
    
            <article class="input-group">
                <label for="login-email">Email: </label>
                <input type="email" id="login-email" name="email">
            </article>
    
            <article class="input-group">
                <label for="password">Password: </label>
                <input type="password" id="password" name="password">
            </article>
    
            <input type="submit" class="btn submit-btn" value="Log In">
        </form>
    </section>
`;

export const loginView = (ctx) => {
    const onSubmit = (ev) => {
        ev.preventDefault();

        const data = Object.fromEntries(new FormData(ev.currentTarget));

        const isValid = inputValidator(data);

        if (!isValid) {
            alert(ALL_FIELDS_ARE_REQUIRED_MESSAGE);
            return;
        }

        requestService.login(data.email, data.password)
            .then(() => ctx.page.redirect('/'));
    }

    ctx.render(loginTemplate(onSubmit));
}