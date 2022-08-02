import { html } from '../../node_modules/lit-html/lit-html.js';

import * as requestService from '../services/requestService.js';
import { inputValidator } from '../validators/inputValidator.js';
import { ALL_FIELDS_ARE_REQUIRED_MESSAGE } from '../messages/alertMessages.js';

const createTemplate = (onSubmit) => html`
    <section id="createPage">
        <form @submit=${onSubmit} class="createForm">
            <img src="./images/cat-create.jpg">
            <div>
                <h2>Create PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" placeholder="Max">
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" placeholder="2 years">
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" placeholder="5kg">
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
                </div>
                <button class="btn" type="submit">Create Pet</button>
            </div>
        </form>
    </section>
`;

export const createView = (ctx) => {
    const onSubmit = (ev) => {
        ev.preventDefault();

        const data = Object.fromEntries(new FormData(ev.currentTarget));

        const isValid = inputValidator(data);

        if (!isValid) {
            alert(ALL_FIELDS_ARE_REQUIRED_MESSAGE);
            return;
        }

        requestService.createPet(data)
            .then(() => ctx.page.redirect('/'));
    }

    ctx.render(createTemplate(onSubmit));
}