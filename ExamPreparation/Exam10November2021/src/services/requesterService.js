import * as request from '../api/requester.js';
import * as userService from './userService.js';

const url = 'http://localhost:3030';
const baseUrl = `${url}/users`;

export const login = (username, password) =>
    request.post(`${baseUrl}/login`, { username, password })
        .then(user => userService.saveUser(user));

export const register = (username, password) =>
    request.post(`${baseUrl}/register`, { username, password })
        .then(user => userService.saveUser(user));

export const logout = () =>
    request.get(`${baseUrl}/logout`, { headers: { 'X-Authorization': userService.getAccessToken() } })
        .then(() => userService.removeUser());