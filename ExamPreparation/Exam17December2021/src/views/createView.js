import { html } from '../../node_modules/lit-html/lit-html.js';

import { inputValidator } from '../validators/inputValidator.js';

import * as alertConsole from '../messages/alertMessage.js';
import * as requestService from '../services/requesterService.js';

const createTemplate = (onSubmit) => html`
    <section id="create-meme">
        <form @submit=${onSubmit} id="create-form">
            <div class="container">
                <h1>Create Meme</h1>
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title">
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                <label for="imageUrl">Meme Image</label>
                <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                <input type="submit" class="registerbtn button" value="Create Meme">
            </div>
        </form>
    </section>
`;

export const createView = (ctx) => {
    const onSubmit = (ev) => {
        ev.preventDefault();

        const data = Object.fromEntries(new FormData(ev.currentTarget));

        const isInputValid = inputValidator(Object.values(data));

        if (!isInputValid) {
            alertConsole.ALL_FIELDS_ARE_REQUIRED_MESSAGE();
            return;
        }

        requestService.createMeme(data)
            .then(() => ctx.page.redirect('/catalog'));
    }

    ctx.render(createTemplate(onSubmit));
}