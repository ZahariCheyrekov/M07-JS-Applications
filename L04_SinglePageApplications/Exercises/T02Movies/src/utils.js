const sections = document.querySelectorAll('.hidden-section');
const userLinks = document.querySelectorAll('.user');
const guestLinks = document.querySelectorAll('.guest');
const welcomeText = document.querySelector('.welcome-text .nav-link.user');
const addMovieBtn = document.querySelector('#add-movie-button');

export function loadSection(section) {
    hideSections();
    showSection(section);
}

function hideSections() {
    sections.forEach(s => hideSection(s));
}

function showSection(section) {
    section.style.display = '';
}

function hideSection(section) {
    section.style.display = 'none';
}

export function loading() {
    const el = document.createElement('p');
    el.textContent = 'Loading...';
    return el;
}

export function updateNavigation() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        userLinks.forEach(link => link.style.display = 'inline-block');
        guestLinks.forEach(link => link.style.display = 'none');
        welcomeText.textContent = `Welcome, ${user.email}`;
        addMovieBtn.style.display = 'block';
    } else {
        userLinks.forEach(link => link.style.display = 'none');
        guestLinks.forEach(link => link.style.display = 'inline-block');
        welcomeText.textContent = ``;
        addMovieBtn.style.display = 'none';
    }
}