import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from '../utils.js';
import * as commentsService from '../services/commentsService.js';

const formTemplate = () => html`
    <article class="create-comment">
        <label>Add new comment:</label>
        <form class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>
`;

export function commentFormView(ctx, gameId) {
    if (ctx.user) {
        return formTemplate();
    } else {
        return nothing;
    }
}