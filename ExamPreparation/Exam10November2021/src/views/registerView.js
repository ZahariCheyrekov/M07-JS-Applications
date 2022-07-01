import { html } from '../../node_modules/lit-html/lit-html.js';

import { inputValidator } from '../validators/inputValidator.js';
import { passwordValidator } from '../validators/passwordValidator.js';

import * as alertConsole from '../messages/alertMessage.js';
import * as requestService from '../services/requesterService.js';

const registerTemplate = (onSubmit) => html`
    <section id="register">
        <div class="container">
            <form @submit=${onSubmit} id="register-form">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
    
                <p>Username</p>
                <input type="text" placeholder="Enter Username" name="username" required>
    
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" required>
    
                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                <hr>
    
                <input type="submit" class="registerbtn" value="Register">
            </form>
            <div class="signin">
                <p>Already have an account?
                    <a href="/login">Sign in</a>.
                </p>
            </div>
        </div>
    </section>
`;

export const registerView = (ctx) => {
    const onSubmit = (ev) => {
        ev.preventDefault();

        const { username, password, repeatPass } = Object.fromEntries(new FormData(ev.currentTarget));

        const isInputValid = inputValidator([username, password, repeatPass]);

        if (!isInputValid) {
            alertConsole.ALL_FIELDS_ARE_REQUIRED_MESSAGE();
            return;
        }

        const isValidPass = passwordValidator(password, repeatPass);

        if (!isValidPass) {
            alertConsole.PASSWORDS_MUST_MATCH_MESSAGE();
            return;
        }

        requestService.register(username, password)
            .then(() => ctx.page.redirect('/'));
    }

    ctx.render(registerTemplate(onSubmit));
}