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

export const editPostById = (postId, data) =>
    request.put(`${baseUrl}/data/posts/${postId}`, data);

export const getPostById = (postId) =>
    request.get(`${baseUrl}/data/posts/${postId}`);

export const getPosts = () =>
    request.get(`${baseUrl}/data/posts?sortBy=_createdOn%20desc`);

export const getUserPosts = (userId) =>
    request.get(`${baseUrl}/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);

export const create = (data) =>
    request.post(`${baseUrl}/data/posts`, data);

export const deletePost = (postId) =>
    request.del(`${baseUrl}/data/posts/${postId}`);