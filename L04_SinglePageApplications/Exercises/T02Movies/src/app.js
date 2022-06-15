import { homePage } from './home.js';
import { loginPage } from './login.js';
import { registerPage } from './register.js';

const routes = {
    '/': homePage,
    '/login': loginPage,
    '/register': registerPage
};

const navigation = document.querySelector('.navbar');

navigation.addEventListener('click', onNavigate);

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

homePage();