import { html } from '../../node_modules/lit-html/lit-html.js';

import * as requestService from '../services/requestService.js';
import { ALL_FIELDS_ARE_REQUIRED_MESSAGE, PASSWRODS_MUST_MATCH_MESSAGE } from '../messages/alertMessages.js';
import { inputValidator } from '../validators/inputValidator.js';
import { passwordEqualityValidator } from '../validators/passwordEqualityValidator.js';

const registerTemplate = (onSubmit) => html`
    <section id="registerPage">
        <form @submit=${onSubmit} class="registerForm">
            <img src="./images/logo.png" alt="logo" />
            <h2>Register</h2>
            <div class="on-dark">
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
            </div>
    
            <div class="on-dark">
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="">
            </div>
    
            <div class="on-dark">
                <label for="repeatPassword">Repeat Password:</label>
                <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
            </div>
    
            <button class="btn" type="submit">Register</button>
    
            <p class="field">
                <span>If you have profile click <a href="#">here</a></span>
            </p>
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

        const isEqual = passwordEqualityValidator(data.password, data.repeatPassword);

        if (!isEqual) {
            alert(PASSWRODS_MUST_MATCH_MESSAGE);
            return;
        }

        requestService.register(data.email, data.password)
            .then(() => ctx.page.redirect('/'));
    }

    ctx.render(registerTemplate(onSubmit));
}