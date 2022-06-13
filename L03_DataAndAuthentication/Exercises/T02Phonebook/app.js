const loadBtn = document.getElementById('btnLoad');
const createBtn = document.getElementById('btnCreate');
const personInput = document.getElementById('person');
const phoneInput = document.getElementById('phone');
const phonebook = document.getElementById('phonebook');

const url = 'http://localhost:3030/jsonstore/phonebook';

function attachEvents() {
    loadBtn.addEventListener('click', getAllNumbers);
    createBtn.addEventListener('click', createNumber);
}

function getAllNumbers() {
    phonebook.replaceChildren();

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

function createNumber() {
    if (!personInput.value || !phoneInput.value) {
        return;
    }

    fetch(url, {
        method: 'POST',
        'Content-Type': 'application/json',
        body: JSON.stringify({
            person: personInput.value,
            phone: phoneInput.value
        })
    });

    clearInputFields();
    loadBtn.click();
}

function deleteNumber(ev) {
    fetch(`${url}/${ev.target.parentNode.id}`, {
        method: 'DELETE'
    });

    loadBtn.click();
}

function clearInputFields() {
    personInput.value = '';
    phoneInput.value = '';
}

attachEvents();