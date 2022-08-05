import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../services/userService.js';
import * as requestService from '../services/requestService.js';

const detailsTemplate = (pet, user) => html`
    <section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src="${pet.image}">
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${pet.name}</h1>
                    <h3>Breed: ${pet.breed}</h3>
                    <h4>Age: ${pet.age}</h4>
                    <h4>Weight: ${pet.weight}</h4>
                    <h4 class="donation">Donation: 0$</h4>
                </div>
                <!-- TODO: Check donations!!! (Bonus points)-->
    
                ${user 
                ? html`
                  <div class="actionBtn">
                    <!-- Only for registered user and creator of the pets-->
    
                    <a href="/data/pets/${pet._id}/edit" class="edit">Edit</a>
                    <a href="/data/pets/${pet._id}/delete" class="remove">Delete</a>
    
                    <!--(Bonus Part) Only for no creator and user-->
                    <a href="#" class="donate">Donate</a>
                </div>
                `
                : nothing
                }
            </div>
        </div>
    </section>
`;

export const detailsView = async (ctx) => {
    const user = userService.getUser();
    const petId = ctx.params.id;

    requestService.getPetById(petId)
        .then(pet => ctx.render(detailsTemplate(pet, user)));
}