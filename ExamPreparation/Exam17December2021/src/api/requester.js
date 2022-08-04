import * as userService from '../services/userService.js';
import { notificationHandler } from '../handlers/notificationHandler.js';

export const request = async (method, url, data) => {
    const options = {
        method,
        headers: {}
    };

    const token = userService.getAccessToken();

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';

        if (method != 'GET') {
            options.body = JSON.stringify(data);
        }
    }

    return fetch(url, options)
        .then(res => {
            console.log(res)

            if (!res.ok) {
                throw new Error(res.statusText);
            }
            
            return res.json();
        })
        .catch(error => {
            notificationHandler(error);
        });
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const del = request.bind(null, 'DELETE');