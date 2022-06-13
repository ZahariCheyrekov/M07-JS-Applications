const textArea = document.getElementById('messages');
const nameInput = document.getElementsByName('author')[0];
const contentInput = document.getElementsByName('content')[0];
const url = 'http://localhost:3030/jsonstore/messenger';

function attachEvents() {
    document.getElementById('submit').addEventListener('click', sendMessage);
    document.getElementById('refresh').addEventListener('click', getAllMessages);
}

function sendMessage() {
    if (!nameInput.value || !contentInput.value) {
        return;
    }

    fetch(url, {
        method: 'POST',
        'Content-Type': 'application/json',
        body: JSON.stringify({
            author: nameInput.value,
            message: contentInput.value
        })
    })
        .catch(error => console.log(error));

    clearInputFields();
}

function getAllMessages() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            textArea.value = Object.values(data)
                .map(m => `${m.author}: ${m.message || m.content}`)
                .join('\n');
        })
        .catch(error => console.log(error));
}

function clearInputFields() {
    nameInput.value = '';
    contentInput.value = '';
}

attachEvents();