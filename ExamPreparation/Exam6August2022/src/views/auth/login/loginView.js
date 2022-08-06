import * as requestService from '../../../services/requestService.js';
import { inputValidator } from '../../../validators/inputValidator.js';
import { ALL_FIELDS_ARE_REQUIRED_MESSAGE } from '../../../constants/messages/alertMessages.js';
import { loginTemplate } from '../../../templates/auth/login/loginTemplate.js';

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
            .then(() => ctx.page.redirect('/dashboard'));
    }

    ctx.render(loginTemplate(onSubmit));
}