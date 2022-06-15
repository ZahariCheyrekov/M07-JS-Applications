import { homePage } from './home.js';
import { loginPage } from './login.js';
import { registerPage } from './register.js';
import { createPage } from './create.js';
import { updateNavigation } from './utils.js';

const routes = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logout,
    '/register': registerPage,
    '/create': createPage,
};

const navigation = document.querySelector('.navbar');
navigation.addEventListener('click', onNavigate);

const addMovieBtn = document.querySelector('.btn');
addMovieBtn.addEventListener('click', onNavigate);

function onNavigate(ev) {
    if (ev.target.tagName == 'A' && ev.target.href) {
        ev.preventDefault();

        const url = new URL(ev.target.href);
        const view = routes[url.pathname];

        if (typeof view == 'function') {
            view();
        }
    }
}

function logout() {
    localStorage.removeItem('user');
    updateNavigation();
}

updateNavigation();
homePage();