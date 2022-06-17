import { html } from '../node_modules/lit-html/lit-html.js';

export const template = (cats) => html`<ul>${cats.map(catTemplate)}</ul>`;

const catTemplate = ({ id, statusCode, statusMessage, imageLocation }) => html`
    <li>
        <img src="./images/${imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button @click=${showDetails} class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="${id}">
                <h4>Status Code: ${statusCode}</h4>
                <p>${statusMessage}</p>
            </div>
        </div>
    </li>
`;

function showDetails(ev) {
    const statusDiv = document.querySelector('.status');

    if (ev.target.textContent.includes('Show')) {
        statusDiv.style.display = 'block';
        ev.target.textContent = 'Hide status code';
    } else {
        statusDiv.style.display = 'none';
        ev.target.textContent = 'Show status code';
    }
}