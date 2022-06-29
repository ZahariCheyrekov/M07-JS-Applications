import * as request from './requester.js';
import * as userService from './userService.js';

const baseUrl = 'http://localhost:3030/users';
const albumsUrl = 'http://localhost:3030/data/albums?sortBy=_createdOn%20desc&distinct=name'
const albumIdUrl = 'http://localhost:3030/data/albums/'

export const login = (email, password) =>
    request.post(`${baseUrl}/login`, { email, password })
        .then(user => userService.saveUser(user));

export const logout = () =>
    fetch(`${baseUrl}/logout`,
        { headers: { 'X-Authorization': userService.getAccessToken() } })
        .then(() => userService.removeUser());

export const register = (email, password) =>
    request.post(`${baseUrl}/register`, { email, password })
        .then(user => userService.saveUser(user));

export const getAllAlbums = () =>
    request.get(albumsUrl);

export const getAlbumById = (albumId) =>
    request.get(`${albumIdUrl}` + albumId);