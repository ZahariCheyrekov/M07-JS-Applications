export const request = (methhod, url, data) => {
    let options = {};

    if (methhod != 'GET') {
        options.headers = {
            'Content-Type': 'applications/json'
        };

        options.body = JSON.stringify(data);
    }

    fetch(url, options).then(res => res.json());
}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const patch = request.bind({}, 'PATCH');
export const del = request.bind({}, 'DELETE');