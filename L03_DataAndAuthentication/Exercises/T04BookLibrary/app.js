function solve() {
    const loadBooksBtn = document.getElementById('loadBooks');
    const submitBtn = document.querySelector('form button');
    const inputFields = document.querySelectorAll('form input');
    const tbody = document.querySelector('tbody');
    const url = 'http://localhost:3030/jsonstore/collections/books';

    loadBooksBtn.addEventListener('click', () => {
        tbody.replaceChildren();

        fetch(url)
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach(([id, book]) => {
                    tbody.appendChild(addBook(id, book));
                });
            })
            .catch(error => console.log(error));
    });

    submitBtn.addEventListener('click', (ev) => {
        ev.preventDefault();

        const title = inputFields[0].value;
        const author = inputFields[1].value;

        if (!title.trim() || !author.trim()) {
            return;
        }

        fetch(url, {
            method: 'POST',
            'Content-Type': 'application/json',
            body: JSON.stringify({
                title,
                author
            })
        })

        clearInputFields();
        loadBooksBtn.click();
    });

    function addBook(id, { author, title }) {
        const tr = document.createElement('tr');
        tr.id = id;

        const authorName = createComponent('td', author);
        const titleName = createComponent('td', title);
        const buttonsTd = createComponent('td', '');
        const editBtn = createComponent('button', 'Edit');
        const deleteBtn = createComponent('button', 'Delete');

        buttonsTd.appendChild(editBtn);
        buttonsTd.appendChild(deleteBtn);
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

    function clearInputFields() {
        inputFields.forEach(input => input.value = '');
    }
}

solve();