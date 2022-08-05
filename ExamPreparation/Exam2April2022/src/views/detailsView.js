import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../services/userService.js';
import * as requestService from '../services/requestService.js';
import { donationHandler } from '../handlers/donationHandler.js';

const detailsTemplate = (pet, user, isOwner, donations, hasDonationBtn, ctx) => html`
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
                    <h4 class="donation">Donation: ${Number(donations) * 100}$</h4>
                </div>
    
                ${user &&    
                html`
                <div class="actionBtn">
                ${isOwner
                ? html`
                    <a href="/data/pets/${pet._id}/edit" class="edit">Edit</a>
                    <a href="/data/pets/${pet._id}/delete" class="remove">Delete</a>`
                : nothing
                }
                ${hasDonationBtn
                ? html`<a href="#" class="donate" @click=${() => donationHandler(ctx, pet._id)}>Donate</a>`
                : nothing
                }   
                </div>`
                }
            </div>
        </div>
    </section>
`;

export const detailsView = async (ctx) => {
    const user = userService.getUser();
    const petId = ctx.params.id;

    const [pet, donations, hasDonation] = await Promise.all([
        requestService.getPetById(petId),
        requestService.getDonationsForPet(petId),
        user ? requestService.getUserDonationForPet(petId, user._id) : 0
    ]);

    const isOwner = user && user._id == pet._ownerId;
    const hasDonationBtn = user && !isOwner && hasDonation === 0;

    ctx.render(detailsTemplate(pet, user, isOwner, donations, hasDonationBtn, ctx));
}