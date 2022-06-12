function solve() {
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const infoSpan = document.querySelector('.info');
    const url = 'http://localhost:3030/jsonstore/bus/schedule/2572';

    async function depart() {
        disableButtons(true, false);

        try {
            const response = await fetch(url);
            const data = await response.json();

            const { next } = data;
            infoSpan.textContent = `Next stop ${next.slice(0, 1).toUpperCase() + next.slice(1)}`;

        } catch (error) {
            infoSpan.textContent = 'Error';
            disableButtons(true, true);
        }
    }

    function arrive() {
        disableButtons(false, true);
    }

    return {
        depart,
        arrive
    };

   
}

let result = solve();