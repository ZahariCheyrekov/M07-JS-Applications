import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { applicationHandler } from '../handlers/applicationHandler.js';

export const detailsTemplate = (ctx, isOwner, offer, applications, hasApplicationBtn) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src="${offer.imageUrl}" alt="example1" />
            <p id="details-title">${offer.title}</p>
            <p id="details-category">
                Category: <span id="categories">${offer.category}</span>
            </p>
            <p id="details-salary">
                Salary: <span id="salary-number">${offer.salary}</span>
            </p>
            <div id="info-wrapper">
                <div id="details-description">
                    <h4>Description</h4>
                    <span>${offer.description}</span>
                </div>
                <div id="details-requirements">
                    <h4>Requirements</h4>
                    <span>${offer.requirements}</span>
                </div>
            </div>
            <p>Applications: <strong id="applications">${applications}</strong></p>
    
            <div id="action-buttons">
                ${isOwner
                ? html`
                <a href="/data/offers/${offer._id}/edit" id="edit-btn">Edit</a>
                <a href="/data/offers/${offer._id}/delete" id="delete-btn">Delete</a>`
                : nothing
                }
    
                ${hasApplicationBtn
                ? html`<a href="" id="apply-btn" @click=${()=> applicationHandler(ctx)}>Apply</a>`
                : nothing
                }
            </div>
        </div>
    </section>
`;