import { loadSection } from './utils.js';

const homeSection = document.getElementById('home-page');

export function homePage() {
    loadSection(homeSection);
    showMovies();
}

async function showMovies() {
    
    const movies = await getMovies();
}

async function getMovies() {
    const res = await fetch('http://localhost:3030/data/movies');
    const movies = await res.json();

    return movies;
}