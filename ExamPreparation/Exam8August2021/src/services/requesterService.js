import * as request from '../api/requester.js';
import * as userService from '../services/userService.js';

const baseUrl = 'http://localhost:3030/users';
const allBooksUrl = 'http://localhost:3030/data/books?sortBy=_createdOn%20desc';
const createBookUrl = 'http://localhost:3030/data/books';

export const loginUser = (email, password) =>
    request.post(`${baseUrl}/login`, { email, password })
        .then(user => userService.saveUser(user));

export const registerUser = (email, password) =>
    request.post(`${baseUrl}/register`, { email, password })
        .then(user => userService.saveUser(user));

export const logout = () => request.get(`${baseUrl}/logout`,
    { headers: { 'X-Authorization': userService.getAccessToken() } })
    .then(() => userService.removeUser());

export const getAllBooks = () => request.get(allBooksUrl);

export const getBookById = (bookId) => request.get(`${createBookUrl}/${bookId}`);

export const createBook = (data) => request.post(createBookUrl, data);

export const editBook = (bookId, data) => request.put(`${createBookUrl}/${bookId}`, data);