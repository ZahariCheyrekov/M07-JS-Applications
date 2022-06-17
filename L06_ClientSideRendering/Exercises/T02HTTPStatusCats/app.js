import { render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';
import { template } from './template.js';

const allCats = document.getElementById('allCats');

render(template(cats), allCats);