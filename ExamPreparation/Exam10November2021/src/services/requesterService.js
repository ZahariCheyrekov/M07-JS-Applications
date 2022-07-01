import * as request from '../api/requester.js';
import * as userService from './userService.js';

const url = 'http://localhost:3030';
const baseUrl = `${url}/users`;
const allAddsUrl = `${url}/data/cars?sortBy=_createdOn%20desc`;
const createUrl = `${url}/data/cars`;
const addByIdUrl = `${url}/data/cars`;

export const login = (username, password) =>
    request.post(`${baseUrl}/login`, { username, password })
        .then(user => userService.saveUser(user));

export const register = (username, password) =>
    request.post(`${baseUrl}/register`, { username, password })
        .then(user => userService.saveUser(user));

export const logout = () =>
    request.get(`${baseUrl}/logout`, { headers: { 'X-Authorization': userService.getAccessToken() } })
        .then(() => userService.removeUser());

export const getAdds = () => request.get(allAddsUrl);

export const createListing = (data) => request.post(createUrl, data);

export const getAddById = (addId) => request.get(`${addByIdUrl}/${addId}`);

export const editListing = (addId, data) => request.put(`${addByIdUrl}/${addId}`, data);