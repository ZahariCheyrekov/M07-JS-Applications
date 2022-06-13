const url = 'http://localhost:3030/jsonstore/collections/students';
const submitBtn = document.getElementById('submit');

function solve() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(student => {

                createTableRow(student);
            })
        })
        .catch(error => console.log(error));

    submitBtn.addEventListener('click', createStudent);
}

function createTableRow(student) {
    let { firstName, lastName, facultyNumber, grade } = student;
    grade = Number(grade);

    const tr = document.createElement('tr');
}

function createStudent(ev) {
    ev.preventDefault();
}

solve();