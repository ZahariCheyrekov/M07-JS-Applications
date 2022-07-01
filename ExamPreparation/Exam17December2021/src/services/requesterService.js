import * as request from '../api/requester.js';
import * as userService from './userService.js';

const url = 'http://localhost:3030';
const baseUrl = `${url}/users`;

export const login = (email, password) =>
    request.post(`${baseUrl}/login`, { email, password })
        .then(user => userService.saveUser(user));

export const register = (email, password) =>
    request.post(`${baseUrl}/register`, { email, password })
        .then(user => userService.saveUser(user));

export const logout = () =>
    request.get(`${baseUrl}/logout`, { headers: { 'X-Authorization': userService.getAccessToken() } })
        .then(() => userService.removeUser());
