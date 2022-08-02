import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../services/userService.js';
import * as requestService from '../services/requestService.js';

const detailsTemplate = (post, donataions, isOwner, showDonateBtn, onLike) => html`
    <!-- <section id="details-page">
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
                    <p class="donate-Item">Donate Materials: ${donataions}</p>
    
                    <div class="btns">
                    ${isOwner 
                    ? html`
                        <a href="/data/posts/${post._id}/edit" class="edit-btn btn">Edit</a>
                        <a href="/data/posts/${post._id}/delete" class="delete-btn btn">Delete</a>
                        `
                    : nothing
                    }
                        
                    ${showDonateBtn
                    ? html`<a href="#" class="donate-btn btn" @click=${onLike}>Donate</a>`
                    : null
                    }
                    </div>
                </div>
            </div>
        </div>
    </section> -->
`;

export const detailsView = async (ctx) => {
    // const user = userService.getUser();
    // const postId = ctx.params.id;

    // const onLike = () => {
    //     requestService.makeDonation(postId)
    //         .then(() => ctx.page.redirect(`/data/posts/${postId}`));
    // }

    // const [post, donations, hasDonation] = await Promise.all([
    //     requestService.getPostById(postId),
    //     requestService.getPostDonations(postId),
    //     user ? requestService.getUserDonation(user._id, postId) : 0 
    // ]);

    // const isOwner = user && user._id == post._ownerId;
    // const showDonateBtn = user && !isOwner && hasDonation == 0;

    // ctx.render(detailsTemplate(post, donations, isOwner, showDonateBtn, onLike));
}