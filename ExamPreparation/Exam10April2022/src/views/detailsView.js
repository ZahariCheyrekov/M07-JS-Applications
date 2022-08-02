import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import { inputValidator } from '../validators/inputValidator.js';

import * as userService from '../services/userService.js';
import * as requestService from '../services/requestService.js';

const detailsTemplate = (user, post) => html`
    <section id="details-page">
        <h1 class="title">Post Details</h1>
    
        <div id="container">
            <div id="details">
                <div class="image-wrapper">
                    <img src="${post.imageUrl}" alt="Material Image" class="post-image">
                </div>
                <div class="info">
                    <h2 class="title post-title">${post.title}</h2>
                    <p class="post-description">Description: ${post.description}</p>
                    <p class="post-address">Address: ${post.address}</p>
                    <p class="post-number">Phone number: ${post.phone}</p>
                    <p class="donate-Item">Donate Materials: 0</p>
                    <!-- TODO: check donate material -->
    
                    <!--Edit and Delete are only for creator-->
                    <div class="btns">
                        <a href="#" class="edit-btn btn">Edit</a>
                        <a href="#" class="delete-btn btn">Delete</a>
    
                        <!--Bonus - Only for logged-in users ( not authors )-->
                        <a href="#" class="donate-btn btn">Donate</a>
                    </div>
    
                </div>
            </div>
        </div>
    </section>
`;

export const detailsView = (ctx) => {
    const user = userService.getUser();

    requestService.getPostById(ctx.params.id)
        .then(post => ctx.render(detailsTemplate(user, post)));
}