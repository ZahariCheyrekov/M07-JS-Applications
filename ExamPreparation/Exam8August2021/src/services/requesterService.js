import * as request from '../api/requester.js';
import * as userService from '../services/userService.js';

const baseUrl = 'http://localhost:3030/users';

export const loginUser = (email, password) =>
    request.post(`${baseUrl}/login`, { email, password })
        .then(user => userService.saveUser(user));

export const logout = () => request.get(`${baseUrl}/logout`,
    { headers: { 'X-Authorization': userService.getAccessToken() } })
    .then(() => userService.removeUser());