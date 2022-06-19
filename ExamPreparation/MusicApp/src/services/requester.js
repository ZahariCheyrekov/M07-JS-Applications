import * as authService from './authService.js';

export const request = (method, url, data) => {
    let options = {};
    // let token = authService.getToken();

    if (method != 'GET') {
        options.method = method;
        options.headers = {
            'Content-Type': 'applications/json',
        };
        options.body = JSON.stringify(data);
    }

    // if (token) {
    //     options.headers['X-Authorization'] = token;
    // }

    return fetch(url, options).then(res => res.json());
}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const patch = request.bind({}, 'PATCH');
export const del = request.bind({}, 'DELETE');