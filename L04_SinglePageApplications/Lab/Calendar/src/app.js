import { rednderElement } from './renderer.js';
import { validateMonth, validateYear } from './validator.js';

const yearsBase = document.getElementById('years');
const years = Array.from(document.querySelectorAll('.monthCalendar')).reduce((year, data) => {
    year[data.id] = data;
    return year;
}, {});
const monthsElements = Array.from(document.querySelectorAll('.daysCalendar'));

rednderElement(yearsBase);

document.addEventListener('click', (ev) => {
    if (validateYear(ev)) {
        const year = ev.target.textContent.trim();
        rednderElement(years[`year-${year}`]);

    } else if (validateMonth(ev)) {
        const year = document.querySelector('caption').textContent;
        const month = ev.target.innerText.trim();
        const monthIndex = months.findIndex(x => x == month);

        if (monthIndex !== -1) {
            const monthElement = monthsElements.find(x => x.id === `month-${year}-${monthIndex + 1}`);
            rednderElement(monthElement);
        }
    }

    if (ev.target.tagName == 'CAPTION') {
        const dataText = ev.target.innerText;

        if (dataText.match(/^([1-2]{1}[0-9]{3}) \- ([1-2]{1}[0-9]{3})$/g)) {
            return;
        }

        if (isNaN(dataText)) {
            const year = dataText.match(/[1-2]{1}[0-9]{3}/g);
            rednderElement(years[`year-${year}`]);
        } else {
            rednderElement(yearsBase);
        }
    }
});

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];