import { html } from '../../node_modules/lit-html/lit-html.js';

import * as requestService from '../services/requestService.js';
import { ALL_FIELDS_ARE_REQUIRED_MESSAGE, PASSWRODS_MUST_MATCH_MESSAGE } from '../messages/alertMessages.js';
import { inputValidator } from '../validators/inputValidator.js';
import { passwordEqualityValidator } from '../validators/passwordEqualityValidator.js';

const registerTemplate = (onSubmit) => html`
    <section id="register">
        <form @submit=${onSubmit} id="register-form">
            <div class="container">
                <h1>Register</h1>
                <label for="username">Username</label>
                <input id="username" type="text" placeholder="Enter Username" name="username">
                <label for="email">Email</label>
                <input id="email" type="text" placeholder="Enter Email" name="email">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <label for="repeatPass">Repeat Password</label>
                <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                <div class="gender">
                    <input type="radio" name="gender" id="female" value="female">
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="male" value="male" checked>
                    <label for="male">Male</label>
                </div>
                <input type="submit" class="registerbtn button" value="Register">
                <div class="container signin">
                    <p>Already have an account?<a href="/login">Sign in</a>.</p>
                </div>
            </div>
        </form>
    </section>
`;

export const registerView = (ctx) => {
    const onSubmit = (ev) => {
        ev.preventDefault();

        const data = Object.fromEntries(new FormData(ev.currentTarget));

        const isValid = inputValidator(data);

        if (!isValid) {
            alert(ALL_FIELDS_ARE_REQUIRED_MESSAGE);
            return;
        }

        const isEqual = passwordEqualityValidator(data.password, data.repeatPass);

        if (!isEqual) {
            alert(PASSWRODS_MUST_MATCH_MESSAGE);
            return;
        }

        requestService.register(data.email, data.password)
            .then(() => ctx.page.redirect('/all-memes'));
    }

    ctx.render(registerTemplate(onSubmit));
}