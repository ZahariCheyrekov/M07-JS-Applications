import { render } from './node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js';
import { template } from './template.js';

const root = document.getElementById('contacts');
const result = contacts.map(template);
root.addEventListener('click', showDetails);

function showDetails(ev) {
    const isContaining = ev.target.classList.contains('detailsBtn');

    if (isContaining) {
        const element = ev.target.parentNode;

        const styleEl = element.querySelector('.details').style.display;

        if (styleEl == 'block') {
            element.querySelector('.details').style.display = 'none';
        } else {
            element.querySelector('.details').style.display = 'block';
        }
    }
}

render(result, root);
