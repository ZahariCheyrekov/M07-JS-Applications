import * as request from './requester.js';

const baseUrl = 'htttp://localhost:3030/users';

export const login = (email, password) => {
    return request.post(`${baseUrl}/login`, { email, password });
}