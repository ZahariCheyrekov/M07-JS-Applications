import { html } from '../../node_modules/lit-html/lit-html.js';

import { inputValidator } from '../validators/inputValidator.js';

import * as alertConsole from '../messages/alertMessage.js';
import * as requestService from '../services/requesterService.js';

const loginTemplate = (onSubmit) => html`
    <section id="login">
        <div class="container">
            <form @submit=${onSubmit} id="login-form" action="#" method="post">
                <h1>Login</h1>
                <p>Please enter your credentials.</p>
                <hr>
    
                <p>Username</p>
                <input placeholder="Enter Username" name="username" type="text">
    
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn" value="Login">
            </form>
            <div class="signin">
                <p>Dont have an account?
                    <a href="/register">Sign up</a>.
                </p>
            </div>
        </div>
    </section>
`;

export const loginView = (ctx) => {
    const onSubmit = (ev) => {
        ev.preventDefault();

        const { username, password } = Object.fromEntries(new FormData(ev.currentTarget));

        const isInputValid = inputValidator([username, password]);

        if (!isInputValid) {
            alertConsole.ALL_FIELDS_ARE_REQUIRED_MESSAGE();
            return;
        }

        requestService.login(username, password)
            .then(() => ctx.page.redirect('/catalog'));
    }

    ctx.render(loginTemplate(onSubmit));
}