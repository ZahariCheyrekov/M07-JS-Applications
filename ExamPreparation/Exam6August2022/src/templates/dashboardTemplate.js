import { html } from '../../node_modules/lit-html/lit-html.js';

export const dashboardTemplate = (offers) => html`
    <section id="dashboard">
        <h2>Job Offers</h2>
    
        ${offers.length > 0
        ? offers.map(offer => offerTemplate(offer))
        : html`<h2>No offers yet.</h2>`
        }
    </section>
`;

const offerTemplate = (offer) => html`
    <div class="offer">
        <img src="./images/example1.png" alt="example1" />
        <p>
            <strong>Title: </strong><span class="title">${offer.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
        <a class="details-btn" href="/data/offers/${offer._id}">Details</a>
    </div>
`;