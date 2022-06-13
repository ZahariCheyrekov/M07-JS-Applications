const url = 'http://localhost:3030/jsonstore/collections/students';
const submitBtn = document.getElementById('submit');

function solve() {
    submitBtn.addEventListener('click', loadStudents)
}

function loadStudents(ev) {
    ev.preventDefault();
}

solve();