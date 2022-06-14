import { rednderElement } from './renderer.js';
import { validateYear } from './validator.js';

const yearsBase = document.getElementById('years');
const years = Array.from(document.querySelectorAll('.monthCalendar')).reduce((year, data) => {
    year[data.id] = data;
    return year;
}, {});
const months = Array.from(document.querySelectorAll('.daysCalendar'))
console.log()

rednderElement(yearsBase);

document.addEventListener('click', (ev) => {
    console.log(ev.target);

    if (validateYear(ev)) {
        console.log(ev.target.textContent)
        const year = ev.target.textContent.trim();
        rednderElement(years[`year-${year}`]);
    }

    if (ev.target.tagName == 'CAPTION') {
        const captionText = ev.target.innerText

        if (!isNaN(captionText)) {
            rednderElement(yearsBase);
        }
    }
});