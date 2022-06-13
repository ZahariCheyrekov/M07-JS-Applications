function solve() {

    const loadBooksBtn = document.getElementById('loadBooks');
    const tbody = document.querySelector('tbody');
    const url = 'http://localhost:3030/jsonstore/collections/books';

    loadBooksBtn.addEventListener('click', () => {
        tbody.replaceChildren();

        fetch(url)
            .then(res => res.json())
            .then(data => {
                Object.values(data).forEach(book => {
                    console.log(book)
                    // tbody.appendChild(createBook(book));
                });
            })
            .catch(error => console.log(error));
    });

    function createBook({ author, title }) {
        const tr = document.createElement('tr');

        const authorName = createTableData(tr, author);
        const titleName = createTableData(tr, title);
    }

    function createTableData(value) {
        const td = document.createElement('td');
        td.textContent = value;
        return td;
    }
}

solve();