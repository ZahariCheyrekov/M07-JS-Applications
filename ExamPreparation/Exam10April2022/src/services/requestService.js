import * as request from '../api/requester.js';
import * as userService from '../services/userService.js';

const baseUrl = 'http://localhost:3030';
const url = `${baseUrl}/users`;

export const login = (email, password) =>
    request.post(`${url}/login`, { email, password })
        .then(user => userService.saveUser(user));