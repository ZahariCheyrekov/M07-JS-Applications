import * as api from '../api/api.js';

const endpoints = {
    allGames: '/data/books?sortBy=_createdOn%20desc',
};

export async function getAllBooks() {
    return api.get(endpoints.allGames);
}