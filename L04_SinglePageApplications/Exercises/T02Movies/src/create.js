import { loadSection } from './utils.js';

const addMovieSection = document.querySelector('#add-movie');

export function createPage() {
    loadSection(addMovieSection);
}