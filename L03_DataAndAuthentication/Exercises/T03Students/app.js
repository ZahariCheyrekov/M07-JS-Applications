const submitBtn = document.getElementById('submit');
const table = document.querySelector('#results tbody');
const url = 'http://localhost:3030/jsonstore/collections/students';

function solve() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(student => {
                table.appendChild(createTableRow(student));
            })
        })
        .catch(error => console.log(error));

    submitBtn.addEventListener('click', createStudent);
}

function createTableRow(student) {
    let { firstName, lastName, facultyNumber, grade } = student;
    grade = Number(grade);

    const tr = document.createElement('tr');

    createTableData(tr, firstName);
    createTableData(tr, lastName);
    createTableData(tr, facultyNumber);
    createTableData(tr, grade);

    return tr;
}

function createTableData(tr, value) {
    const td = document.createElement('td');
    td.textContent = value;
    tr.appendChild(td);
}

function createStudent(ev) {
    ev.preventDefault();
}

solve();