import * as request from '../api/requester.js';
import * as userService from './userService.js';

const url = 'http://localhost:3030';
const baseUrl = `${url}/users`;
const createUrl = `${url}/data/memes`;
const allMemesUrl = `${url}/data/memes?sortBy=_createdOn%20desc`;

export const login = (email, password) =>
    request.post(`${baseUrl}/login`, { email, password })
        .then(user => userService.saveUser(user));

export const register = (data) =>
    request.post(`${baseUrl}/register`, data)
        .then(user => userService.saveUser(user));

export const logout = () =>
    request.get(`${baseUrl}/logout`, { headers: { 'X-Authorization': userService.getAccessToken() } })
        .then(() => userService.removeUser());

export const createMeme = (data) => request.post(createUrl, data);

export const getAllMemes = () => request.get(allMemesUrl);