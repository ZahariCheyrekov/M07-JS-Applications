import { homePage } from './home.js';
import { loadSection } from './utils.js';

const addMovieSection = document.querySelector('#add-movie');
const form = document.querySelector('.text-center.border.border-light.p-5');
form.addEventListener('submit', getData);

export function createPage() {
    loadSection(addMovieSection);
}

async function getData(ev) {
    ev.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('imageUrl');

    validateInput(title, description, img);
    await createMovie(title, description, img);

    form.reset();
    homePage();
}

function validateInput(title, description, img) {
    if (!title || !description || !img) {
        alert('All fields are required!');
    }
}

async function createMovie(title, description, img) {
    const user = JSON.parse(localStorage.getItem('user'));

    await fetch('http://localhost:3030/data/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': user.accessToken
        },
        body: JSON.stringify({ title, description, img })
    })
}