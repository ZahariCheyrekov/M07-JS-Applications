function solve() {
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const infoSpan = document.querySelector('.info');
    const url = 'http://localhost:3030/jsonstore/bus/schedule/2572';
    let stop = '';

    async function depart() {

        try {
            const response = await fetch(url);
            const data = await response.json();

            disableButtons(true, false);
            stop = `${data.next.slice(0, 1).toUpperCase() + data.next.slice(1)}`;
            infoSpan.textContent = `Next stop ${stop}`;

        } catch (error) {
            infoSpan.textContent = 'Error';
            disableButtons(true, true);
        }
    }

    function arrive() {
        infoSpan.textContent = `Arriving at ${stop}`;
        disableButtons(false, true);
    }

    return {
        depart,
        arrive
    };

    function disableButtons(first, second) {
        departBtn.disabled = first;
        arriveBtn.disabled = second;
    }
}

let result = solve();