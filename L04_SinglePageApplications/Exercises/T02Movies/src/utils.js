const sections = document.querySelectorAll('.hidden-section');
const userLinks = document.querySelectorAll('.user');
const guestLinks = document.querySelectorAll('.guest');
const welcomeText = document.querySelector('.welcome-item');

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

function updateNavigation() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        userLinks.forEach(link => link.style.display = 'inline-block');
        guestLinks.forEach(link => link.style.display = 'none');
        welcomeText.textContent = `Welcome, ${user.email}`;
    } else {
        userLinks.forEach(link => link.style.display = 'none');
        guestLinks.forEach(link => link.style.display = 'inline-block');
        welcomeText.textContent = ``;
    }
}