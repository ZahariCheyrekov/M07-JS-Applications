import { html } from '../../../../node_modules/lit-html/lit-html.js';

export const registerTemplate = (onSubmit) => html`
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form @submit=${onSubmit} class="login-form">
                <input type="text" name="email" id="register-email" placeholder="email" />
                <input type="password" name="password" id="register-password" placeholder="password" />
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
        </div>
    </section>
`;