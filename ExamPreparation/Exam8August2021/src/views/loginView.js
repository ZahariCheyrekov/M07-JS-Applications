import { html } from '../../node_modules/lit-html/lit-html.js';
import { inputValidator } from '../validators/inputValidator.js';
import * as alert from '../messages/alertMessages.js';

const loginTemplate = (onSubmit) => html`
    <section id="login-page" class="login">
        <form @submit=${onSubmit} id="login-form" action="" method="">
            <fieldset>
                <legend>Login Form</legend>
                <p class="field">
                    <label for="email">Email</label>
                    <span class="input">
                        <input type="text" name="email" id="email" placeholder="Email">
                    </span>
                </p>
                <p class="field">
                    <label for="password">Password</label>
                    <span class="input">
                        <input type="password" name="password" id="password" placeholder="Password">
                    </span>
                </p>
                <input class="button submit" type="submit" value="Login">
            </fieldset>
        </form>
    </section>
`;

export const loginView = (ctx) => {
    const onSubmit = (ev) => {
        ev.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(ev.currentTarget));

        const areFieldsEmpty = inputValidator([email, password]);

        if (areFieldsEmpty) {
            alert.ALL_FIELDS_ARE_REQUIRED_MESSAGE();
            return;
        }

        
    }

    ctx.render(loginTemplate(onSubmit));
}