import * as request from '../api/requester.js';
import * as userService from '../services/userService.js';


const baseUrl = 'http://localhost:3030';
const url = `${baseUrl}/users`;


export const login = (email, password) =>
    request.post(`${url}/login`, { email, password })
        .then(user => userService.saveUser(user));

export const register = (email, password) =>
    request.post(`${url}/register`, { email, password })
        .then(user => userService.saveUser(user));

export const logout = () =>
    request.get(`${url}/logout`)
        .then(() => userService.removeUser());

export const createMeme = (data) =>
    request.post(`${baseUrl}/data/memes`, data);

export const getMemeById = (memeId) =>
    request.get(`${baseUrl}/data/memes/${memeId}`);

export const getAllMemes = () =>
    request.get(`${baseUrl}/data/memes?sortBy=_createdOn%20desc`);