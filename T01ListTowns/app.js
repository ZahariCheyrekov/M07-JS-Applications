import { render } from '../node_modules/lit-html/lit-html.js';
import { template } from './template.js';

const root = document.getElementById('root');
const form = document.querySelector('form');

form.addEventListener('submit', loadTowns);

function loadTowns(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const towns = formData.get('towns').split(/[, ]+/);
    ev.target.reset();

    render(template(towns), root);
}