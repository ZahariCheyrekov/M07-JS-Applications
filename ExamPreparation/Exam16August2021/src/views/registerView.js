import { html } from '../../node_modules/lit-html/lit-html.js';


import * as requestService from '../services/requestService.js';
import { ALL_FIELDS_ARE_REQUIRED_MESSAGE, PASSWRODS_MUST_MATCH_MESSAGE } from '../messages/alertMessages.js';
import { inputValidator } from '../validators/inputValidator.js';
import { passwordEqualityValidator } from '../validators/passwordEqualityValidator.js';

const registerTemplate = (onSubmit) => html`
    <section id="register-page" class="content auth">
        <form @submit=${onSubmit} id="register">
            <div class="container">
                <div class="brand-logo"></div>
                <h1>Register</h1>
    
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com">
    
                <label for="pass">Password:</label>
                <input type="password" name="password" id="register-password">
    
                <label for="con-pass">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password">
    
                <input class="btn submit" type="submit" value="Register">
    
                <p class="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </div>
        </form>
    </section>
`;

export const registerView = (ctx) => {
    const onSubmit = (ev) => {
        ev.preventDefault();

        const { email, password, ['confirm-password']: confPass } = Object.fromEntries(new FormData(ev.currentTarget));

        const isValid = inputValidator({ email, password, confPass });

        if (!isValid) {
            alert(ALL_FIELDS_ARE_REQUIRED_MESSAGE);
            return;
        }

        const isEqual = passwordEqualityValidator(password, confPass);

        if (!isEqual) {
            alert(PASSWRODS_MUST_MATCH_MESSAGE);
            return;
        }

        requestService.register(email, password)
            .then(() => ctx.page.redirect('/'));
    }

    ctx.render(registerTemplate(onSubmit));
}