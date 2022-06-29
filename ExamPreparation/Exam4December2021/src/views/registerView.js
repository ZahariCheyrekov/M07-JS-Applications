import { html } from '../../node_modules/lit-html/lit-html.js';

const loginTemplate = (onSubmit) => html`    
    
`;

export const loginView = (ctx) => {
    const onSubmit = (ev) => {
        ev.preventDefault();
    }

    ctx.render(loginTemplate(onSubmit));
}