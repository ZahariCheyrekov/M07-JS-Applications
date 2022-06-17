import { html } from '../node_modules/lit-html/lit-html.js';

export const template = (towns) => html`<ul>${towns.map(townTemplate)}</ul>`;

const townTemplate = (town) => html`<li>${town}</li>`;