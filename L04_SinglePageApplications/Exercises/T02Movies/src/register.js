import { loadSection } from './utils.js';
import { homePage } from './home.js';
import { updateNavigation } from './utils.js';

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
    registerUser(email, password);


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

async function registerUser(email, password) {
    try {
        const res = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            'Content-Type': 'application/json',
            body: JSON.stringify({ email, password })
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const user = await res.json();
        localStorage.setItem('user', JSON.stringify(user));

    } catch (error) {
        alert(error.message);
        throw error;
    }

    homePage();
    updateNavigation();
}