import { loadSection } from './utils.js';

const loginSection = document.getElementById('form-login');
const form = loginSection.querySelector('.text-center.border.border-light.p-5');
form.addEventListener('submit', getData);

export function loginPage() {
    loadSection(loginSection);
}

function getData(ev) {
    ev.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    loginUser(email, password);
}
