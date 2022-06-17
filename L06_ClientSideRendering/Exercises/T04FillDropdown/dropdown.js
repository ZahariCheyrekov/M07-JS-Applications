import { render } from 'lit-html';
import { html } from 'lit-html';
import { getData } from './api.js';
import { addOption } from './api.js';

const menu = document.getElementById('menu');
const form = document.getElementById('form');
const itemText = document.getElementById('itemText');
form.addEventListener('submit', addItem);

async function loadOptions() {
    const dataOptions = await getData();
    render(html`${Object.values(dataOptions)
        .map(o => html`<option value=${o._id}>${o.text}</option>`)}`, menu);
}

async function addItem(ev) {
    ev.preventDefault();

    if (!itemText.value.trim()) {
        alert('Enter valid option value!');
        return;
    }

    await addOption(itemText.value.trim());
    await loadOptions();
    itemText.value = '';
}

loadOptions()