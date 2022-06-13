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
                    tbody.appendChild(addBook(book));
                });
            })
            .catch(error => console.log(error));
    });

    function addBook({ author, title }) {
        const tr = document.createElement('tr');

        const authorName = createComponent('td', author);
        const titleName = createComponent('td', title);
        const buttonsTd = createComponent('td', '');
        const editBtn = createComponent('button', 'Edit');
        const deleteBtn = createComponent('button', 'Delete');

        buttonsTd.appendChild(editBtn, deleteBtn);
        tr.appendChild(authorName);
        tr.appendChild(titleName);
        tr.appendChild(buttonsTd);

        return tr;
    }

    function createComponent(type, value) {
        const td = document.createElement(type);
        td.textContent = value;
        return td;
    }
}

solve();