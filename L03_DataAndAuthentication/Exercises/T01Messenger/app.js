const url = 'http://localhost:3030/jsonstore/messenger';
const textArea = document.getElementById('messages');

function attachEvents() {
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', getAllMessages);
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

attachEvents();