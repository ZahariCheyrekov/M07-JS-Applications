async function attachEvents() {
    const idField = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const forecast = document.getElementById('forecast');
    const upcoming = document.getElementById('upcoming');
    const label = document.querySelector('.label');
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';

    submitBtn.addEventListener('click', getData);

    
}

attachEvents();