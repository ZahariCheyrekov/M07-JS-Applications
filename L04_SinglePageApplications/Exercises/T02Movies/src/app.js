import { homePage } from './home.js';
import { loginPage } from './login.js';

const routes = {
    '/': homePage,
    '/login': loginPage,
};

const navigation = document.querySelector('navbar');

navigation.addEventListener('click', onNavigate);


homePage();