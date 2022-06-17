import { html } from '../node_modules/lit-html/lit-html.js';

export const template = (towns) => html`<ul>${towns.map(createLi)}</ul>`;

const createLi = (town) => html`<li>${town}</li>`;