import { html } from '../../node_modules/lit-html/lit-html.js';


import * as requestService from '../services/requestService.js';
import { ALL_FIELDS_ARE_REQUIRED_MESSAGE, PASSWRODS_MUST_MATCH_MESSAGE } from '../messages/alertMessages.js';
import { inputValidator } from '../validators/inputValidator.js';
import { passwordEqualityValidator } from '../validators/passwordEqualityValidator.js';

const registerTemplate = (onSubmit) => html`
    <section id="register-page" class="auth">
        <form @submit=${onSubmit} id="register">
            <h1 class="title">Register</h1>
    
            <article class="input-group">
                <label for="register-email">Email: </label>
                <input type="email" id="register-email" name="email">
            </article>
    
            <article class="input-group">
                <label for="register-password">Password: </label>
                <input type="password" id="register-password" name="password">
            </article>
    
            <article class="input-group">
                <label for="repeat-password">Repeat Password: </label>
                <input type="password" id="repeat-password" name="repeatPassword">
            </article>
    
            <input type="submit" class="btn submit-btn" value="Register">
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