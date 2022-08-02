import { html } from '../../node_modules/lit-html/lit-html.js';

import * as requestService from '../services/requestService.js';
import { inputValidator } from '../validators/inputValidator.js';
import { ALL_FIELDS_ARE_REQUIRED_MESSAGE } from '../messages/alertMessages.js';

const editTemplate = (onSubmit, post) => html`
    <section id="edit-page" class="auth">
        <form @submit=${onSubmit} id="edit">
            <h1 class="title">Edit Post</h1>
    
            <article class="input-group">
                <label for="title">Post Title</label>
                <input type="title" name="title" id="title" value="${post.title}">
            </article>
    
            <article class="input-group">
                <label for="description">Description of the needs </label>
                <input type="text" name="description" id="description" value="${post.description}">
            </article>
    
            <article class="input-group">
                <label for="imageUrl"> Needed materials image </label>
                <input type="text" name="imageUrl" id="imageUrl" value="${post.imageUrl}">
            </article>
    
            <article class="input-group">
                <label for="address">Address of the orphanage</label>
                <input type="text" name="address" id="address" value="${post.address}">
            </article>
    
            <article class="input-group">
                <label for="phone">Phone number of orphanage employee</label>
                <input type="text" name="phone" id="phone" value="${post.phone}">
            </article>
    
            <input type="submit" class="btn submit" value="Edit Post">
        </form>
    </section>
`;

export const editView = (ctx) => {
    const postId = ctx.params.id;

    const onSubmit = (ev) => {
        ev.preventDefault();

        const data = Object.fromEntries(new FormData(ev.currentTarget));

        const isValid = inputValidator(data);
        if (!isValid) {
            alert(ALL_FIELDS_ARE_REQUIRED_MESSAGE);
            return;
        }

        requestService.editPostById(postId, data)
            .then(() => ctx.page.redirect(`/data/posts/${postId}`));
    }

    requestService.getPostById(postId)
        .then(post => ctx.render(editTemplate(onSubmit, post)));
}