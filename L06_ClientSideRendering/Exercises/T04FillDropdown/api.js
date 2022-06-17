const url = 'http://localhost:3030/jsonstore/advanced/dropdown/';

export async function getData() {
    const res = await fetch(url);
    validateResponse(res);

    return await res.json();
}

export async function addOption(data) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: data
        })
    });

    validateResponse(res);
    return await res.json();
}

function validateResponse(res) {
    if (!res.ok) {
        throw new Error(res.status);
    }
}