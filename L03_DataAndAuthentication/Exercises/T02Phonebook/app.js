const loadBtn = document.getElementById('btnLoad');
const createBtn = document.createElement('btnCreate');
const phonebook = document.getElementById('phonebook');

const url = 'http://localhost:3030/jsonstore/phonebook';

function attachEvents() {
    loadBtn.addEventListener('click', getAllNumbers);
    createBtn.addEventListener('click', createNumber);
}

function getAllNumbers() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for (const { person, phone, _id } of Object.values(data)) {
                const li = document.createElement('li');
                li.textContent = `${person}: ${phone}`;
                li.id = _id;

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', deleteNumber);

                li.appendChild(deleteBtn);
                phonebook.appendChild(li);
            }
        })
        .catch(error => console.log(error));
}

function deleteNumber(ev) {
    fetch(`${url}/${ev.target.parentNode.id}`, {
        method: 'DELETE'
    });
}


attachEvents();