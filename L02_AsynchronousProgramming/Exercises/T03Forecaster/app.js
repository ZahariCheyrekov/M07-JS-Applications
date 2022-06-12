async function attachEvents() {
    const idField = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const forecast = document.getElementById('forecast');
    const upcoming = document.getElementById('upcoming');
    const label = document.querySelector('.label');
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';

    submitBtn.addEventListener('click', getData);

    async function getData() {
        try {
            const locationUrl = `http://localhost:3030/jsonstore/forecaster/today/${idField.value}`;
            const response = await fetch(locationUrl);
            const data = await response.json();

            const upcomingUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${idField.value}`;
            const res = await fetch(locationUrl);
            const dataUpcoming = await res.json();



        } catch (error) {
            label.textContent = 'Error';
            forecast.style.display = '';
            upcoming.style.display = 'none';
        }
    };
}

function getWeatherIcon(condition) {
    const types = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    };

    return types[condition];
}

attachEvents();