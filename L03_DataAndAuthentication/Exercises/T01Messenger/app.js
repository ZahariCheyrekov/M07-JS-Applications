const url = 'http://localhost:3030/jsonstore/messenger';

function attachEvents() {
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', getAllMessages);
}

function getAllMessages() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
}

attachEvents();