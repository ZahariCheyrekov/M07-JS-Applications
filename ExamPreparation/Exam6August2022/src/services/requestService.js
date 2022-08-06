import * as request from '../api/requester.js';
import * as userService from '../services/userService.js';
import { baseUrl, url } from '../constants/urls/applicationUrls.js';

export const login = (email, password) =>
    request.post(`${url}/login`, { email, password })
        .then(user => userService.saveUser(user));

export const register = (email, password) =>
    request.post(`${url}/register`, { email, password })
        .then(user => userService.saveUser(user));

export const logout = () =>
    request.get(`${url}/logout`)
        .then(() => userService.removeUser());

export const getAllOffers = () =>
    request.get(`${baseUrl}/data/offers?sortBy=_createdOn%20desc`);

export const addNewOffer = (data) =>
    request.post(`${baseUrl}/data/offers`, data);

export const getOfferById = (offerId) =>
    request.get(`${baseUrl}/data/offers/${offerId}`);

export const editOfferById = (offerId, offerData) =>
    request.put(`${baseUrl}/data/offers/${offerId}`, offerData);

export const deleteOfferById = (offerId) =>
    request.del(`${baseUrl}/data/offers/${offerId}`);

export const addNewApplicationToOffer = (offerId) =>
    request.post(`${baseUrl}/data/applications`, { offerId });

export const getTotalApplicationsForOffer = (offerId) =>
    request.get(`${baseUrl}/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`);

export const getNumberOfApplicationsForSpecificUser = (offerId, userId) =>
    request.get(`${baseUrl}/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`);