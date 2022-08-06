import * as requestService from '../../../services/requestService.js';
import { ALL_FIELDS_ARE_REQUIRED_MESSAGE, PASSWRODS_MUST_MATCH_MESSAGE } from '../../../constants/messages/alertMessages.js';
import { inputValidator } from '../../../validators/inputValidator.js';
import { passwordEqualityValidator } from '../../../validators/passwordEqualityValidator.js';
import { registerTemplate } from '../../../templates/auth/register/registerTemplate.js';

export const registerView = (ctx) => {
    const onSubmit = (ev) => {
        ev.preventDefault();

        const data = Object.fromEntries(new FormData(ev.currentTarget));

        const isValid = inputValidator(data);

        if (!isValid) {
            alert(ALL_FIELDS_ARE_REQUIRED_MESSAGE);
            return;
        }

        const isEqual = passwordEqualityValidator(data.password, data['re-password']);

        if (!isEqual) {
            alert(PASSWRODS_MUST_MATCH_MESSAGE);
            return;
        }

        requestService.register(data.email, data.password)
            .then(() => ctx.page.redirect('/dashboard'));
    }

    ctx.render(registerTemplate(onSubmit));
}