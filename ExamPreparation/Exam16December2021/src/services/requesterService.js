import * as request from '../api/requester.js';
import * as userService from './userService.js';

const url = 'http://localhost:3030';
const baseUrl = `${url}/users`;
const theatersUrl = `${url}/data/theaters?sortBy=_createdOn%20desc&distinct=title`;
const theatersAllUrl = `${url}/data/theaters`;
const theaterDetailsUrl = (theaterId) => `${theatersAllUrl}/${theaterId}`;

export const login = (email, password) =>
    request.post(`${baseUrl}/login`, { email, password })
        .then(user => userService.saveUser(user));

export const register = (email, password) =>
    request.post(`${baseUrl}/register`, { email, password })
        .then(user => userService.saveUser(user));

export const logout = () =>
    request.get(`${baseUrl}/logout`, { headers: { 'X-Authorization': userService.getAccessToken() } })
        .then(() => userService.removeUser());

export const getAllTheaters = () => request.get(theatersUrl);

export const createTheater = (data) => request.post(theatersAllUrl, data);

export const getTheaterDetails = (theaterId) => request.get(theaterDetailsUrl(theaterId));