import { loadSection } from './utils.js';

const addMovieSection = document.querySelector('#add-movie');
const form = document.querySelector('.text-center.border.border-light.p-5');
form.addEventListener('submit', getData);

export function createPage() {
    loadSection(addMovieSection);
}

function getData(ev) {
    ev.preventDefault();

    const formData = new FormData(form);
    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('imageUrl');

    validateInput(title, description, img);
    createMovie(title, description, img);
}

