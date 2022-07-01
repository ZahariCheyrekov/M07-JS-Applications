import { html } from '../../node_modules/lit-html/lit-html.js';

import { inputValidator } from '../validators/inputValidator.js';

import * as alertConsole from '../messages/alertMessage.js';
import * as requestService from '../services/requesterService.js';

const loginTemplate = (onSubmit) => html`
    <section id="login">
        <form @submit=${onSubmit} id="login-form">
            <div class="container">
                <h1>Login</h1>
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn button" value="Login">
                <div class="container signin">
                    <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                </div>
            </div>
        </form>
    </section>
`;

export const loginView = (ctx) => {
    const onSubmit = (ev) => {
        ev.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(ev.currentTarget));

        const isInputValid = inputValidator([email, password]);

        if (!isInputValid) {
            alertConsole.ALL_FIELDS_ARE_REQUIRED_MESSAGE();
            return;
        }

        requestService.login(email, password)
            .then(() => ctx.page.redirect('/catalog'));
    }

    ctx.render(loginTemplate(onSubmit));
}