import { html } from '../../node_modules/lit-html/lit-html.js';

import { inputValidator } from '../validators/inputValidator.js';
import { positiveNumberValidator } from '../validators/positiveNumberValidator.js';

import * as alertConsole from '../messages/alertMessage.js';
import * as requestService from '../services/requesterService.js';

const createTemplate = (onSubmit) => html`
    <section id="create-listing">
        <div class="container">
            <form @submit=${onSubmit} id="create-form">
                <h1>Create Car Listing</h1>
                <p>Please fill in this form to create an listing.</p>
                <hr>
    
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand">
    
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model">
    
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description">
    
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year">
    
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl">
    
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price">
    
                <hr>
                <input type="submit" class="registerbtn" value="Create Listing">
            </form>
        </div>
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

        const isValidNumber = positiveNumberValidator([data.year, data.price]);
        
        if (!isValidNumber) {
            alertConsole.POSITIVE_PRICE_NUMBERS_MESSAGE();
            return;
        }

        requestService.createListing(data)
            .then(() => ctx.page.redirect('/catalog'));
    }

    ctx.render(createTemplate(onSubmit));
}