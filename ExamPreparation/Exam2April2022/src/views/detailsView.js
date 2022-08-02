import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../services/userService.js';
import * as requestService from '../services/requestService.js';

const detailsTemplate = (pet, isOwner, onDonation, donations, hasDonationBtn) => html`
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
                    <h4 class="donation">Donation: ${donations}$</h4>
                </div>
    
                <div class="actionBtn">
                    ${isOwner 
                    ? html`
                     <a href="/data/pets/${pet._id}/edit" class="edit">Edit</a>
                    <a href="/data/pets/${pet._id}/delete" class="remove">Delete</a>`
                    : nothing
                    }
                    
                    ${hasDonationBtn
                    ? html`<a href="#" class="donate" @click=${onDonation}>Donate</a>`
                    : nothing
                    }
                </div>
            </div>
        </div>
    </section>
`;

export const detailsView = async (ctx) => {
    const user = userService.getUser();
    const userId = user._id;
    const petId = ctx.params.id;

    const onDonation = () => {
        requestService.addDonation(petId)
            .then(() => ctx.page.redirect(`/data/pets/${petId}`));
    }

    const [pet, donations, hasDonation] = await Promise.all([
        requestService.getPetById(petId),
        requestService.getPetDonations(petId),
        user ? requestService.getDonationForPet(petId, userId) : 0
    ]);

    const isOwner = user && userId == pet._ownerId;
    const hasDonationBtn = user && !isOwner && hasDonation === 0;

    ctx.render(detailsTemplate(pet, isOwner, onDonation, donations, hasDonationBtn));
}