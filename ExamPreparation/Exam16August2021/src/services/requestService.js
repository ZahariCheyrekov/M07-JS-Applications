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

export const getGameById = (gameId) =>
    request.get(`${baseUrl}/data/games/${gameId}`);

export const getAllGames = () =>
    request.get(`${baseUrl}/data/games?sortBy=_createdOn%20desc`);

export const getNewGames = () =>
    request.get(`${baseUrl}/data/games?sortBy=_createdOn%20desc&distinct=category`);

export const createNewGame = (data) =>
    request.post(`${baseUrl}/data/games`, data);

export const editGame = (gameId, gameData) =>
    request.put(`${baseUrl}/data/games/${gameId}`, gameData);

export const deleteGame = (gameId) =>
    request.del(`${baseUrl}/data/games/${gameId}`);

export const getCommentsForGame = (gameId) =>
    request.get(`${baseUrl}/data/comments?where=gameId%3D%22${gameId}%22`);

export const addNewComment = (gameId, comment) =>
    request.post(`${baseUrl}/data/comments`, { gameId, comment });