const url = 'http://localhost:3030/jsonstore/collections/books/';

export async function getAllBooks() {
    try {
        const res = await fetch(url);
        validateResponse(res);

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getBookById = async (id) => await fetch(url + id);

export const createBook = async (data) => await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});

export const editBook = async (id, data) => await fetch(url + id, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});

export const deleteBook = async (id) => await fetch(url + id, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
});

function validateResponse(res) {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
}