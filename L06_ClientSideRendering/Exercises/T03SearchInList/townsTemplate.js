import { html } from 'lit-html';

export const template = (towns) => html`<ul>${towns.map(townTemplate)}</ul>`;

const townTemplate = (town) => html`<li>${town}</li>`;