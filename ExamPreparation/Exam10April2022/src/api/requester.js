import { getAccessToken } from '../services/userService.js';

export const requester = (method, url, data) => {
    const options = {
        method,
        headers: {}
    };

    const token = getAccessToken();

    if (token) {
        options.headers['X-Athorization'] = token;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';

        if (method !== 'GET') {
            options.body = JSON.stringify(data);
        }
    }

    return fetch(url, options)
        .then(res => res.json());
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const patch = requester.bind(null, 'PATCH');
export const del = requester.bind(null, 'DELETE');