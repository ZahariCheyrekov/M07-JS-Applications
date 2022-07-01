import { html } from '../../node_modules/lit-html/lit-html.js';

import { inputValidator } from '../validators/inputValidator.js';
import { positiveNumberValidator } from '../validators/positiveNumberValidator.js';

import * as alertConsole from '../messages/alertMessage.js';
import * as requestService from '../services/requesterService.js';

const editTemplate = (add, onSubmit) => html`
    <section id="edit-listing">
        <div class="container">
    
            <form @submit=${onSubmit} id="edit-form">
                <h1>Edit Car Listing</h1>
                <p>Please fill in this form to edit an listing.</p>
                <hr>
    
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand" value="${add.brand}">
    
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model" value="${add.model}">
    
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description" value="${add.description}">
    
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year" value="${add.year}">
    
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${add.imageUrl}">
    
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price" value="${add.price}">
    
                <hr>
                <input type="submit" class="registerbtn" value="Edit Listing">
            </form>
        </div>
    </section>
`;

export const editView = (ctx) => {
    const addId = ctx.params.id;

    const onSubmit = (ev) => {
        ev.preventDefault();

        const data = Object.fromEntries(new FormData(ev.currentTarget));
        data.year = Number(data.year);
        data.price = Number(data.price);

        const isInputValid = inputValidator(Object.values(data));

        if (!isInputValid) {
            alertConsole.ALL_FIELDS_ARE_REQUIRED_MESSAGE();
            return;
        }

        const isValidNumber = positiveNumberValidator([data.year, data.price]);

        if (!isValidNumber) {
            alertConsole.POSITIVE_PRICE_NUMBERS_MESSAGE();
            return;
        }

        requestService.editListing(addId, data)
            .then(() => ctx.page.redirect(`/data/cars/${addId}`));
    }

    requestService.getAddById(addId)
        .then(add => ctx.render(editTemplate(add, onSubmit)));
}