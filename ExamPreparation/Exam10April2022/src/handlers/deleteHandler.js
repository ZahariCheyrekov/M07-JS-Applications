import * as requestService from '../services/requestService.js';

export const deleteHandler = (ctx) => {
    const postId = ctx.params.id;

    requestService.deletePost(postId)
        .then(() => ctx.page.redirect('/'));
}