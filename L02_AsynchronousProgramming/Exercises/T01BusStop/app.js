async function getInfo() {
    const idField = document.getElementById('stopId');
    const divResult = document.getElementById('stopName');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${idField.value}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const { name } = data;
        divResult.textContent = name;

        // Bus {busId} arrives in {time} minutes

    } catch (error) {
        divResult.textContent = 'Error';
    }

    idField.value = '';

}