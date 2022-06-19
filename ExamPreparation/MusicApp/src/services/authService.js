import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/users';

const saveUser = (user) => {
    if (user.accessToken) {
        localStorage.setItem(JSON.stringify(user));
    }
}

export const login = (email, password) => {
    return request.post(`${baseUrl}/login`, { email, password })
        .then(user => { saveUser(user) });
}