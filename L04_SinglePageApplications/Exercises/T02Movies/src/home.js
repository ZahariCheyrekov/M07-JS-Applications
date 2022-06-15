import { loadSection } from './utils.js';
import { loading } from './utils.js';

const homeSection = document.getElementById('home-page');
const movieCatalog = homeSection.querySelector('.card-deck.d-flex.justify-content-center');

export function homePage() {
    loadSection(homeSection);
    showMovies();
}

async function showMovies() {
    movieCatalog.replaceChildren(loading());
    const movies = await getMovies();

    movieCatalog.replaceChildren(...movies.map(createMovieTemplate));
}

function createMovieTemplate(movie) {
    const element = document.createElement('div');
    element.className = 'card mb-4';
    element.innerHTML = `
        <img class="card-img-top" src="${movie.img}"
            alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${movie.title}</h4>
        </div>
        <div class="card-footer">
            <a href="/details/${movie._id}">
                <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
            </a>
        </div>`;

    return element;
}

async function getMovies() {
    homeSection
    const res = await fetch('http://localhost:3030/data/movies');
    const movies = await res.json();

    return movies;
}