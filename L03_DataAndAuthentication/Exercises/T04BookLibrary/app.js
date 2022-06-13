const loadBooksBtn = document.getElementById('loadBooks');
const tbody = document.querySelector('tbody');
const url = 'http://localhost:3030/jsonstore/collections/books';

loadBooksBtn.addEventListener('click', () => {
    tbody.replaceChildren();

    fetch(url)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(book => {

            });
        })
        .catch(error => console.log(error));
});

