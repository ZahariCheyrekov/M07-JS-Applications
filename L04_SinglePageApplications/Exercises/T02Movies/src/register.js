import { loadSection } from './utils.js';

const registerSection = document.querySelector('#form-sign-up');
const form = registerSection.querySelector('.text-center.border.border-light.p-5');
form.addEventListener('submit', getData);

export function registerPage() {
    loadSection(registerSection);
}

function getData(ev) {
    ev.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    validateInput(email, password, repeatPassword);
    registerUser(email, password, repeatPassword);

    
}

function validateInput(email, password, repeatPassword) {
    if (!email || !password || !repeatPassword) {
        alert('All fields are required!');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }

    if (password != repeatPassword) {
        alert('Passwords should match!');
        return;
    }
}

function registerUser(email, password, repeatPassword) {

}